(function () {
  'use strict';

  const ALL_QUESTIONS = [
    ...(window.VTMO_QUESTIONS_M1 || []),
    ...(window.VTMO_QUESTIONS_M2 || []),
    ...(window.VTMO_QUESTIONS_M3 || [])
  ];

  const MANG_META = {
    mang1: {
      key: 'mang1',
      name: 'Mảng 1: Số học & Chữ số',
      icon: '🔢',
      desc: 'Buổi 1 • Đếm số, làm tròn, đánh số trang, chữ cái thay số & bảng kỳ diệu (27 câu trên lớp + 27 câu BTVN)'
    },
    mang2: {
      key: 'mang2',
      name: 'Mảng 2: Phép tính thông minh',
      icon: '⚡',
      desc: 'Buổi 2 • Thứ tự phép tính, tính nhanh, tính ngược, tháp số, chẵn lẻ & tối ưu (38 câu + 14 ví dụ)'
    },
    mang3: {
      key: 'mang3',
      name: 'Mảng 3: Dãy số & Quy luật',
      icon: '🔄',
      desc: 'Buổi 3 • Dãy cách đều, Fibonacci, chu kỳ, que diêm, dãy hình & chia hết có dư (37 câu + 12 ví dụ)'
    }
  };

  const STORAGE_KEY = 'vtmo_lucas_progress_v2';
  const GIST_CFG_KEY = 'vtmo_lucas_gist_cfg_v1';

  let store = loadStore();
  let lastEvalId = null;

  let session = {
    mode: 'practice',
    title: '',
    backTarget: 'home',
    questions: [],
    idx: 0,
    answers: [],
    submitted: [],
    correctness: [],
    flagged: [],
    timesSec: [],
    usedKw: [],
    usedStrategy: [],
    stepsUsed: [],
    kwActive: false,
    strategyOpen: false,
    stepsUnlocked: 0,
    qStartTs: 0,
    sessionStartTs: 0,
    examLimitSec: 0,
    timerId: null,
    scratchVisible: true,
    notesByQ: {}
  };

  // ==================== STORAGE ====================
  function defaultStore() {
    return {
      attempts: 0,
      correct: 0,
      totalTimeSec: 0,
      byQ: {},
      sessions: [] // { id, ts, dateLabel, mode, title, answered, total, correct, wrong, skipped, accuracyPct, totalTimeSec, avgSecPerQ, fastCount, independentCount, hintCount, strengths, weaknesses, autoSummary, speedGrade, accGrade, stars, focusLevel, parentNote }
    };
  }

  function loadStore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultStore();
      const parsed = JSON.parse(raw);
      return {
        ...defaultStore(),
        ...parsed,
        byQ: parsed.byQ || {},
        sessions: Array.isArray(parsed.sessions) ? parsed.sessions : []
      };
    } catch (_) {
      return defaultStore();
    }
  }

  function saveStore() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (_) {}
  }

  // ==================== NAVIGATION & UTILS ====================
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach((el) => el.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function formatSec(sec) {
    const s = Math.max(0, Math.round(sec));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
  }

  function formatDateTime(ts) {
    const d = new Date(ts);
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} • ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // ==================== HOME SCREEN ====================
  function renderHome() {
    stopTimer();
    document.getElementById('top-timer').style.display = 'none';

    const pct = store.attempts > 0 ? Math.round((store.correct / store.attempts) * 100) : 0;
    const avgSec = store.attempts > 0 ? Math.round(store.totalTimeSec / store.attempts) : 0;
    const doneUnique = Object.keys(store.byQ).length;

    document.getElementById('stat-sessions').textContent = `${store.sessions.length} buổi`;
    document.getElementById('stat-done').textContent = `${doneUnique}/${ALL_QUESTIONS.length}`;
    document.getElementById('stat-acc').textContent = `${pct}%`;
    document.getElementById('stat-speed').textContent = avgSec > 0 ? `${avgSec}s/câu` : '—';

    const weakList = getWeakOrSlowQuestions();
    document.getElementById('weak-mode-count').textContent =
      weakList.length > 0 ? `${weakList.length} câu cần ôn lại` : 'Chưa có câu sai/chậm';

    // Last session banner
    const bannerWrap = document.getElementById('home-last-session');
    if (store.sessions.length > 0) {
      const last = store.sessions[0];
      const starsStr = last.stars > 0 ? ' ' + '⭐'.repeat(last.stars) : '';
      bannerWrap.innerHTML = `
        <div class="last-session-banner">
          <div>
            <div style="font-size:13px; font-weight:800; color:var(--primary-dark);">
              🗓️ Buổi học gần nhất (${escHtml(last.dateLabel)}): ${escHtml(last.title)}${starsStr}
            </div>
            <div style="font-size:13.5px; color:var(--text-muted); margin-top:2px;">
              Kết quả: <b>${last.correct}/${last.answered} đúng (${last.accuracyPct}%)</b> • Tốc độ TB: <b>${last.avgSecPerQ}s/câu</b> • ${escHtml(last.speedGrade)}
              ${last.parentNote ? `<br>💬 <i>Nhận xét: ${escHtml(last.parentNote)}</i>` : ''}
            </div>
          </div>
          <button class="btn btn-outline" style="min-height:38px; padding:7px 14px; font-size:13px;" onclick="VTMOApp.openAnalytics()">Xem tất cả đánh giá →</button>
        </div>
      `;
    } else {
      bannerWrap.innerHTML = '';
    }

    const mangGrid = document.getElementById('mang-grid');
    mangGrid.innerHTML = '';
    Object.values(MANG_META).forEach((m) => {
      const qs = ALL_QUESTIONS.filter((q) => q.mang === m.key);
      const solved = qs.filter((q) => store.byQ[q.id]?.lastCorrect).length;
      const card = document.createElement('div');
      card.className = 'mang-card';
      card.onclick = () => openMang(m.key);
      card.innerHTML = `
        <div class="mang-card-top">
          <span class="mang-icon">${m.icon}</span>
          <span class="mang-badge">${qs.length} câu</span>
        </div>
        <h3>${escHtml(m.name)}</h3>
        <p>${escHtml(m.desc)}</p>
        <div class="mang-meta">
          <span>Đã đạt: ${solved}/${qs.length}</span>
          <span style="color:var(--primary)">Vào học →</span>
        </div>
      `;
      mangGrid.appendChild(card);
    });

    showScreen('screen-home');
  }

  // ==================== TOPIC & THEORY ====================
  function openMang(mangKey) {
    const meta = MANG_META[mangKey];
    const qs = ALL_QUESTIONS.filter((q) => q.mang === mangKey);

    document.getElementById('topic-banner').innerHTML = `
      <div>
        <h2>${meta.icon} ${escHtml(meta.name)}</h2>
        <p>${escHtml(meta.desc)}</p>
      </div>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="VTMOApp.startCustom('${mangKey}', 'all', 'practice', 'Luyện tất cả ${escHtml(meta.name)}')">
          🧩 Làm tất cả (${qs.length} câu)
        </button>
        <button class="btn btn-warning" onclick="VTMOApp.startCustom('${mangKey}', 'all', 'sprint', 'Tăng tốc ${escHtml(meta.name)}', 10)">
          ⚡ Tăng tốc (10 câu)
        </button>
      </div>
    `;

    const list = document.getElementById('subtopic-list');
    list.innerHTML = '';

    const tCard = document.createElement('div');
    tCard.className = 'subtopic-card theory-special';
    tCard.onclick = () => openTheory(mangKey);
    tCard.innerHTML = `
      <div class="si-icon">📖</div>
      <div class="si-body">
        <div class="si-title">Lý thuyết tóm tắt & Ví dụ mẫu (${meta.name})</div>
        <div class="si-desc">Xem công thức giải nhanh, mẹo nhận diện dạng bài & các ví dụ có lời giải từng bước</div>
      </div>
      <div class="si-right">Mở lý thuyết →</div>
    `;
    list.appendChild(tCard);

    if (mangKey === 'mang1') {
      const classQs = qs.filter((q) => q.group === 'm1_class');
      const hwQs = qs.filter((q) => q.group === 'm1_hw');
      appendSubCard(list, '🏫', 'Bài tập trên lớp (Buổi 1)', '27 câu từ Câu 1 đến Câu 27 theo phiếu học trên lớp', classQs, () =>
        startSession({ mode: 'practice', title: 'Mảng 1 • Trên lớp', backTarget: () => openMang('mang1'), questions: classQs })
      );
      appendSubCard(list, '🏠', 'Bài tập về nhà (BTVN Mảng 1)', '27 câu rèn luyện thêm tại nhà từ Câu 1 đến Câu 27', hwQs, () =>
        startSession({ mode: 'practice', title: 'Mảng 1 • BTVN', backTarget: () => openMang('mang1'), questions: hwQs })
      );
    }

    const groups = new Map();
    qs.forEach((q) => {
      if (!groups.has(q.subtopic)) groups.set(q.subtopic, []);
      groups.get(q.subtopic).push(q);
    });

    groups.forEach((subQs, subName) => {
      appendSubCard(list, '📌', subName, 'Luyện chuyên sâu từng dạng để làm siêu nhanh', subQs, () =>
        startSession({ mode: 'practice', title: subName, backTarget: () => openMang(mangKey), questions: subQs })
      );
    });

    showScreen('screen-topic');
  }

  function appendSubCard(parent, icon, title, desc, qs, onClick) {
    const done = qs.filter((q) => store.byQ[q.id]?.lastCorrect).length;
    const avg = computeAvgSec(qs);
    const el = document.createElement('div');
    el.className = 'subtopic-card';
    el.onclick = onClick;
    el.innerHTML = `
      <div class="si-icon">${icon}</div>
      <div class="si-body">
        <div class="si-title">${escHtml(title)}</div>
        <div class="si-desc">${escHtml(desc)}</div>
      </div>
      <div class="si-right">
        <div>${qs.length} câu</div>
        <div class="si-sub-stat">Đạt ${done}/${qs.length}${avg ? ` • ${avg}s/câu` : ''}</div>
      </div>
    `;
    parent.appendChild(el);
  }

  function computeAvgSec(qs) {
    const times = qs.map((q) => store.byQ[q.id]?.lastSec).filter((t) => typeof t === 'number' && t > 0);
    if (!times.length) return 0;
    return Math.round(times.reduce((a, b) => a + b, 0) / times.length);
  }

  function openTheory(mangKey) {
    const t = window.VTMO_THEORY[mangKey];
    if (!t) return;
    document.getElementById('theory-back-btn').onclick = () => openMang(mangKey);

    const tabs = document.getElementById('theory-tabs');
    tabs.innerHTML = '';
    Object.keys(MANG_META).forEach((k) => {
      const btn = document.createElement('button');
      btn.className = `theory-tab ${k === mangKey ? 'active' : ''}`;
      btn.textContent = MANG_META[k].name;
      btn.onclick = () => openTheory(k);
      tabs.appendChild(btn);
    });

    let html = `
      <div class="topic-banner">
        <div>
          <h2>📖 ${escHtml(t.title)}</h2>
          <p>${escHtml(t.subtitle)}</p>
        </div>
      </div>
    `;
    t.sections.forEach((sec) => {
      html += `
        <div class="theory-card">
          <h3>${escHtml(sec.title)}</h3>
          <ul class="theory-bullets">${sec.bullets.map((b) => `<li>${escHtml(b)}</li>`).join('')}</ul>
          ${sec.example ? `<div class="example-box"><h4>💡 ${escHtml(sec.example.title)}</h4><p>${escHtml(sec.example.text)}</p></div>` : ''}
        </div>
      `;
    });
    document.getElementById('theory-body').innerHTML = html;
    showScreen('screen-theory');
  }

  // ==================== MODES & LAUNCHERS ====================
  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function startCustom(mangKey, _group, mode, title, limitCount) {
    let qs = ALL_QUESTIONS.filter((q) => q.mang === mangKey);
    if (mode === 'sprint') qs = shuffle(qs).slice(0, limitCount || 10);
    startSession({ mode, title, backTarget: () => openMang(mangKey), questions: qs });
  }

  function startSpeedSprint() {
    const easyMed = ALL_QUESTIONS.filter((q) => (q.targetSec || 60) <= 90);
    startSession({
      mode: 'sprint',
      title: '⚡ Tăng Tốc Phản Xạ (10 câu)',
      backTarget: 'home',
      questions: shuffle(easyMed).slice(0, 10)
    });
  }

  function startMockExam(count = 20) {
    const m1 = shuffle(ALL_QUESTIONS.filter((q) => q.mang === 'mang1')).slice(0, 7);
    const m2 = shuffle(ALL_QUESTIONS.filter((q) => q.mang === 'mang2')).slice(0, 7);
    const m3 = shuffle(ALL_QUESTIONS.filter((q) => q.mang === 'mang3')).slice(0, count - 14);
    const qs = [...m1, ...m2, ...m3];
    startSession({
      mode: 'exam',
      title: `🏆 Thi Thử VTMO (${qs.length} câu)`,
      backTarget: 'home',
      questions: qs,
      examLimitSec: count * 90
    });
  }

  function getWeakOrSlowQuestions() {
    return ALL_QUESTIONS.filter((q) => {
      const rec = store.byQ[q.id];
      if (!rec) return false;
      return !rec.lastCorrect || rec.lastSec > (q.targetSec || 60) * 1.25;
    });
  }

  function startWeakDrill() {
    const weak = getWeakOrSlowQuestions();
    if (!weak.length) {
      alert('Tuyệt vời! Lucas chưa có câu nào bị sai hoặc làm quá chậm.');
      return;
    }
    startSession({
      mode: 'drill',
      title: `🎯 Ôn Lại Câu Sai & Chậm (${weak.length} câu)`,
      backTarget: 'home',
      questions: weak
    });
  }

  function startSession({ mode, title, backTarget, questions, examLimitSec = 0 }) {
    if (!questions || !questions.length) {
      alert('Không có câu hỏi phù hợp.');
      return;
    }
    session = {
      mode,
      title,
      backTarget: backTarget || 'home',
      questions,
      idx: 0,
      answers: new Array(questions.length).fill(null),
      submitted: new Array(questions.length).fill(false),
      correctness: new Array(questions.length).fill(null),
      flagged: new Array(questions.length).fill(false),
      timesSec: new Array(questions.length).fill(0),
      usedKw: new Array(questions.length).fill(false),
      usedStrategy: new Array(questions.length).fill(false),
      stepsUsed: new Array(questions.length).fill(0),
      kwActive: false,
      strategyOpen: false,
      stepsUnlocked: 0,
      qStartTs: Date.now(),
      sessionStartTs: Date.now(),
      examLimitSec,
      timerId: null,
      scratchVisible: window.innerWidth >= 960,
      notesByQ: {}
    };

    showScreen('screen-quiz');
    applyScratchVisibility();
    initScratchpad();
    startTimer();
    renderQuestion();
  }

  // ==================== TIMER & PACE COACH ====================
  function startTimer() {
    stopTimer();
    const timerEl = document.getElementById('top-timer');
    timerEl.style.display = 'inline-block';
    updateTimerDisplay();
    session.timerId = setInterval(updateTimerDisplay, 1000);
  }

  function stopTimer() {
    if (session.timerId) {
      clearInterval(session.timerId);
      session.timerId = null;
    }
  }

  function updateTimerDisplay() {
    const timerEl = document.getElementById('top-timer');
    const now = Date.now();
    const totalElapsed = Math.floor((now - session.sessionStartTs) / 1000);

    if (session.mode === 'exam' && session.examLimitSec > 0) {
      const rem = Math.max(0, session.examLimitSec - totalElapsed);
      timerEl.textContent = `⏱ ${formatSec(rem)}`;
      timerEl.className = 'timer-pill' + (rem <= 120 ? ' danger' : rem <= 300 ? ' warn' : '');
      if (rem === 0) {
        finishExam();
        return;
      }
    } else {
      timerEl.textContent = `⏱ ${formatSec(totalElapsed)}`;
      timerEl.className = 'timer-pill';
    }

    const q = session.questions[session.idx];
    if (!q) return;
    const isDone = session.submitted[session.idx];
    const qElapsed = isDone
      ? session.timesSec[session.idx]
      : session.timesSec[session.idx] + Math.floor((now - session.qStartTs) / 1000);
    const target = q.targetSec || 60;
    const paceEl = document.getElementById('pace-meter');
    if (paceEl) {
      paceEl.textContent = `⏳ ${qElapsed}s / Mục tiêu ${target}s`;
      paceEl.className = 'pace-meter' +
        (qElapsed > target * 1.3 ? ' slow-over' : qElapsed > target ? ' slow-warn' : '');
    }

    const nudgeEl = document.getElementById('nudge-banner');
    if (nudgeEl && !isDone && session.mode !== 'exam') {
      if (qElapsed >= Math.max(35, Math.round(target * 0.75)) && !session.kwActive && session.stepsUnlocked === 0) {
        nudgeEl.style.display = 'block';
        nudgeEl.textContent = '💡 Mẹo tăng tốc: Đừng đọc lại cả bài quá lâu — hãy bấm "🔍 Soi từ khóa" hoặc "🪜 Mở Bước 1" để bắt tay vào giải ngay!';
      } else {
        nudgeEl.style.display = 'none';
      }
    }
  }

  function recordCurrentQTime() {
    if (session.submitted[session.idx]) return;
    const delta = Math.max(1, Math.floor((Date.now() - session.qStartTs) / 1000));
    session.timesSec[session.idx] += delta;
    session.qStartTs = Date.now();
  }

  // ==================== QUESTION RENDERING ====================
  function renderQuestion() {
    const q = session.questions[session.idx];
    const total = session.questions.length;
    const isExam = session.mode === 'exam';
    const isSubmitted = session.submitted[session.idx];

    session.qStartTs = Date.now();
    session.kwActive = session.usedKw[session.idx];
    session.strategyOpen = session.usedStrategy[session.idx];
    session.stepsUnlocked = session.stepsUsed[session.idx];

    document.getElementById('quiz-mode-badge').textContent = session.title;
    const completedCount = session.submitted.filter(Boolean).length;
    document.getElementById('quiz-progress-fill').style.width =
      `${Math.round(((isExam ? completedCount : session.idx) / total) * 100)}%`;
    document.getElementById('quiz-progress-label').textContent = `Câu ${session.idx + 1} / ${total}`;
    document.getElementById('quiz-subtopic-label').textContent = q.subtopic || '';

    const navStrip = document.getElementById('q-nav-strip');
    if (isExam || total <= 38) {
      navStrip.style.display = 'flex';
      navStrip.innerHTML = '';
      session.questions.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'q-nav-dot';
        if (i === session.idx) dot.classList.add('active');
        else if (session.correctness[i] === true) dot.classList.add('correct');
        else if (session.correctness[i] === false) dot.classList.add('wrong');
        else if (session.answers[i] !== null) dot.classList.add('answered');
        if (session.flagged[i]) dot.classList.add('flagged');
        dot.textContent = i + 1;
        dot.onclick = () => jumpToQuestion(i);
        navStrip.appendChild(dot);
      });
    } else {
      navStrip.style.display = 'none';
    }

    document.getElementById('q-badge-num').textContent = `Câu ${session.idx + 1}`;
    document.getElementById('q-badge-src').textContent = q.source || '';

    renderQuestionText();

    const diagBox = document.getElementById('diagram-box');
    if (q.diagram) {
      diagBox.style.display = 'flex';
      diagBox.innerHTML = renderDiagram(q.diagram);
    } else {
      diagBox.style.display = 'none';
      diagBox.innerHTML = '';
    }

    const analyzerBar = document.getElementById('analyzer-bar');
    const flagBtn = document.getElementById('btn-flag');
    if (isExam) {
      analyzerBar.style.display = 'none';
      flagBtn.style.display = 'inline-flex';
      flagBtn.textContent = session.flagged[session.idx] ? '🚩 Bỏ đánh dấu' : '🚩 Xem lại sau';
    } else {
      analyzerBar.style.display = 'flex';
      flagBtn.style.display = 'none';
      document.getElementById('btn-kw').classList.toggle('active', session.kwActive);
      document.getElementById('btn-strategy').classList.toggle('active', session.strategyOpen);
      updateStepBtnLabel();
    }
    renderAnalysisDrawer();
    document.getElementById('nudge-banner').style.display = 'none';

    const optList = document.getElementById('options-list');
    const openWrap = document.getElementById('open-inputs-wrap');
    optList.innerHTML = '';
    openWrap.innerHTML = '';

    if (q.type === 'mc') {
      optList.style.display = 'flex';
      openWrap.style.display = 'none';
      const labels = ['A', 'B', 'C', 'D', 'E'];
      const userVal = session.answers[session.idx];
      q.options.forEach((optText, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (userVal === i) btn.classList.add('selected');
        if (isSubmitted) {
          btn.disabled = true;
          if (i === q.answer) btn.classList.add('correct');
          else if (userVal === i && i !== q.answer) btn.classList.add('wrong');
        }
        btn.innerHTML = `<span class="opt-key">${labels[i]}</span><span>${escHtml(optText)}</span>`;
        btn.onclick = () => selectMCOption(i);
        optList.appendChild(btn);
      });
    } else if (q.type === 'open_multi') {
      optList.style.display = 'none';
      openWrap.style.display = 'flex';
      const vals = Array.isArray(session.answers[session.idx]) ? session.answers[session.idx] : q.inputs.map(() => '');
      q.inputs.forEach((inp, idx) => {
        const row = document.createElement('div');
        row.className = 'open-field-row';
        row.innerHTML = `<span class="open-field-label">${escHtml(inp.label)}</span>`;
        const el = document.createElement('input');
        el.type = 'text';
        el.inputMode = 'numeric';
        el.className = 'open-input';
        el.placeholder = 'Nhập đáp số...';
        el.value = vals[idx] || '';
        el.disabled = isSubmitted;
        if (isSubmitted) el.classList.add(normalizeAns(el.value) === normalizeAns(inp.answer) ? 'correct-inp' : 'wrong-inp');
        el.oninput = () => {
          const arr = Array.isArray(session.answers[session.idx]) ? [...session.answers[session.idx]] : q.inputs.map(() => '');
          arr[idx] = el.value;
          session.answers[session.idx] = arr;
        };
        row.appendChild(el);
        openWrap.appendChild(row);
      });
    } else {
      optList.style.display = 'none';
      openWrap.style.display = 'flex';
      const row = document.createElement('div');
      row.className = 'open-field-row';
      row.innerHTML = `<span class="open-field-label">Đáp số của Lucas:</span>`;
      const el = document.createElement('input');
      el.type = 'text';
      el.inputMode = /^[0-9]+$/.test(q.answer) ? 'numeric' : 'text';
      el.className = 'open-input';
      el.placeholder = 'Nhập đáp án...';
      el.value = session.answers[session.idx] || '';
      el.disabled = isSubmitted;
      if (isSubmitted) el.classList.add(isOpenCorrect(q, el.value) ? 'correct-inp' : 'wrong-inp');
      el.oninput = () => { session.answers[session.idx] = el.value; };
      el.onkeydown = (e) => { if (e.key === 'Enter' && !isSubmitted && !isExam) submitCurrent(); };
      row.appendChild(el);
      openWrap.appendChild(row);
    }

    const btnSubmit = document.getElementById('btn-submit');
    const btnNext = document.getElementById('btn-next');
    const btnSkip = document.getElementById('btn-skip');
    const btnFinishExam = document.getElementById('btn-finish-exam');
    const expBox = document.getElementById('explanation-box');

    if (isExam) {
      btnSubmit.style.display = 'none';
      btnSkip.style.display = 'none';
      btnNext.style.display = session.idx < total - 1 ? 'inline-flex' : 'none';
      btnNext.textContent = 'Câu tiếp →';
      btnFinishExam.style.display = 'inline-flex';
      expBox.style.display = 'none';
    } else {
      btnFinishExam.style.display = 'none';
      if (isSubmitted) {
        btnSubmit.style.display = 'none';
        btnSkip.style.display = 'none';
        btnNext.style.display = 'inline-flex';
        btnNext.textContent = session.idx < total - 1 ? 'Câu tiếp →' : 'Kết thúc & Đánh giá buổi →';
        showExplanationBox(session.correctness[session.idx], q);
      } else {
        btnSubmit.style.display = 'inline-flex';
        btnSkip.style.display = 'inline-flex';
        btnNext.style.display = 'none';
        expBox.style.display = 'none';
      }
    }

    const notesBox = document.getElementById('scratch-notes-input');
    if (notesBox) notesBox.value = session.notesByQ[q.id] || '';
    updateTimerDisplay();
  }

  function renderQuestionText() {
    const q = session.questions[session.idx];
    const el = document.getElementById('q-text');
    let html = escHtml(q.text);
    if (session.kwActive && q.keywords && q.keywords.length) {
      q.keywords.forEach((kw) => {
        const escapedKw = escHtml(kw).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        try {
          html = html.replace(new RegExp(`(${escapedKw})`, 'gi'), '<span class="kw-highlight">$1</span>');
        } catch (_) {}
      });
    }
    el.innerHTML = html;
  }

  function toggleKeywords() {
    if (session.mode === 'exam') return;
    session.kwActive = !session.kwActive;
    if (session.kwActive) session.usedKw[session.idx] = true;
    document.getElementById('btn-kw').classList.toggle('active', session.kwActive);
    renderQuestionText();
  }

  function toggleStrategy() {
    if (session.mode === 'exam') return;
    session.strategyOpen = !session.strategyOpen;
    if (session.strategyOpen) session.usedStrategy[session.idx] = true;
    document.getElementById('btn-strategy').classList.toggle('active', session.strategyOpen);
    renderAnalysisDrawer();
  }

  function unlockNextStep() {
    if (session.mode === 'exam') return;
    const q = session.questions[session.idx];
    const maxSteps = (q.steps || []).length;
    if (session.stepsUnlocked < maxSteps) {
      session.stepsUnlocked++;
      session.stepsUsed[session.idx] = Math.max(session.stepsUsed[session.idx], session.stepsUnlocked);
      updateStepBtnLabel();
      renderAnalysisDrawer();
    }
  }

  function updateStepBtnLabel() {
    const q = session.questions[session.idx];
    const maxSteps = (q.steps || []).length;
    const btn = document.getElementById('btn-step');
    if (!maxSteps) { btn.style.display = 'none'; return; }
    btn.style.display = 'inline-flex';
    if (session.stepsUnlocked < maxSteps) {
      btn.textContent = `🪜 Gợi ý Bước ${session.stepsUnlocked + 1}/${maxSteps}`;
      btn.classList.remove('locked');
    } else {
      btn.textContent = `🪜 Đã mở hết ${maxSteps} bước`;
      btn.classList.add('locked');
    }
  }

  function renderAnalysisDrawer() {
    const q = session.questions[session.idx];
    const drawer = document.getElementById('analysis-drawer');
    let html = '';
    if (session.strategyOpen && q.strategy) {
      html += `<div class="strategy-card"><strong>🧠 Nhận diện dạng & Mẹo nhanh:</strong> ${escHtml(q.strategy)}</div>`;
    }
    const steps = q.steps || [];
    for (let i = 0; i < session.stepsUnlocked && i < steps.length; i++) {
      html += `<div class="step-card"><strong>Bước ${i + 1}:</strong> ${escHtml(steps[i])}</div>`;
    }
    drawer.innerHTML = html;
  }

  function selectMCOption(i) {
    if (session.submitted[session.idx]) return;
    session.answers[session.idx] = i;
    document.querySelectorAll('#options-list .option-btn').forEach((btn, idx) => btn.classList.toggle('selected', idx === i));
  }

  function normalizeAns(v) {
    return String(v || '').trim().toUpperCase().replace(/[\s.,]/g, '');
  }

  function isOpenCorrect(q, userVal) {
    const norm = normalizeAns(userVal);
    if (!norm) return false;
    if (Array.isArray(q.acceptedAnswers)) return q.acceptedAnswers.some((a) => normalizeAns(a) === norm);
    return normalizeAns(q.answer) === norm;
  }

  function evaluateQuestion(idx) {
    const q = session.questions[idx];
    const ans = session.answers[idx];
    if (q.type === 'mc') return ans === q.answer;
    if (q.type === 'open_multi') {
      if (!Array.isArray(ans)) return false;
      return q.inputs.every((inp, k) => normalizeAns(ans[k]) === normalizeAns(inp.answer));
    }
    return isOpenCorrect(q, ans);
  }

  function submitCurrent() {
    const q = session.questions[session.idx];
    const ans = session.answers[session.idx];
    if (q.type === 'mc' && ans === null) { alert('Lucas hãy chọn 1 đáp án A, B, C, D hoặc E trước khi nộp nhé!'); return; }
    if (q.type === 'open' && !String(ans || '').trim()) { alert('Lucas hãy nhập đáp số trước khi nộp nhé!'); return; }
    if (q.type === 'open_multi' && (!Array.isArray(ans) || ans.some((x) => !String(x || '').trim()))) {
      alert('Lucas hãy điền đủ các ô đáp số nhé!');
      return;
    }

    recordCurrentQTime();
    session.submitted[session.idx] = true;
    const isOk = evaluateQuestion(session.idx);
    session.correctness[session.idx] = isOk;
    saveQuestionStats(q, isOk, session.timesSec[session.idx]);
    renderQuestion();
  }

  function saveQuestionStats(q, isOk, sec) {
    store.attempts += 1;
    if (isOk) store.correct += 1;
    store.totalTimeSec += sec;
    const prev = store.byQ[q.id] || { attempts: 0, correct: 0, lastCorrect: false, bestSec: 99999, lastSec: 0 };
    prev.attempts += 1;
    if (isOk) {
      prev.correct += 1;
      if (sec < prev.bestSec) prev.bestSec = sec;
    }
    prev.lastCorrect = isOk;
    prev.lastSec = sec;
    store.byQ[q.id] = prev;
    saveStore();
  }

  function showExplanationBox(isOk, q) {
    const box = document.getElementById('explanation-box');
    const title = document.getElementById('exp-title');
    const body = document.getElementById('exp-body');
    const sec = session.timesSec[session.idx];
    const target = q.targetSec || 60;
    const speedTag = sec <= target ? `⚡ Siêu nhanh (${sec}s ≤ ${target}s)` : `⏱ Mất ${sec}s (mục tiêu ${target}s)`;

    box.style.display = 'block';
    box.className = `explanation-box${isOk ? '' : ' is-wrong'}`;
    title.textContent = isOk ? `✅ Chính xác! ${speedTag}` : `❌ Chưa đúng (${speedTag}) — Xem phân tích lời giải:`;
    body.textContent = q.explanation;
  }

  function skipCurrent() {
    recordCurrentQTime();
    session.submitted[session.idx] = true;
    session.correctness[session.idx] = null;
    nextQuestion();
  }

  function nextQuestion() {
    if (session.mode === 'exam') {
      recordCurrentQTime();
      if (session.idx < session.questions.length - 1) {
        session.idx += 1;
        renderQuestion();
      }
      return;
    }
    if (session.idx < session.questions.length - 1) {
      session.idx += 1;
      renderQuestion();
    } else {
      finishSession(false);
    }
  }

  function jumpToQuestion(targetIdx) {
    if (targetIdx === session.idx) return;
    recordCurrentQTime();
    session.idx = targetIdx;
    renderQuestion();
  }

  function toggleFlag() {
    session.flagged[session.idx] = !session.flagged[session.idx];
    renderQuestion();
  }

  function finishExam() {
    recordCurrentQTime();
    const unanswered = session.answers.filter((a) => a === null || a === '').length;
    if (unanswered > 0 && session.examLimitSec > 0) {
      const elapsed = Math.floor((Date.now() - session.sessionStartTs) / 1000);
      if (elapsed < session.examLimitSec) {
        if (!confirm(`Vẫn còn ${unanswered} câu chưa trả lời. Lucas có chắc muốn nộp bài thi ngay không?`)) return;
      }
    }
    session.questions.forEach((q, i) => {
      if (!session.submitted[i]) {
        session.submitted[i] = true;
        const ans = session.answers[i];
        const hasAns = q.type === 'mc' ? ans !== null : (Array.isArray(ans) ? ans.some(Boolean) : Boolean(String(ans || '').trim()));
        if (hasAns) {
          const ok = evaluateQuestion(i);
          session.correctness[i] = ok;
          saveQuestionStats(q, ok, session.timesSec[i] || 1);
        } else {
          session.correctness[i] = null;
        }
      }
    });
    finishSession(false);
  }

  // ==================== EXIT MODAL & PARTIAL SAVE ====================
  function exitQuiz() {
    const answeredCount = session.correctness.filter((c) => c !== null).length;
    if (answeredCount === 0) {
      discardAndExit();
      return;
    }
    document.getElementById('exit-modal-msg').textContent =
      `Lucas đã nộp ${answeredCount}/${session.questions.length} câu trong buổi "${session.title}". Bạn muốn lưu kết quả và ghi nhận đánh giá cho các câu đã làm không?`;
    document.getElementById('exit-modal').classList.add('open');
  }

  function closeExitModal() {
    document.getElementById('exit-modal').classList.remove('open');
  }

  function discardAndExit() {
    closeExitModal();
    stopTimer();
    document.getElementById('top-timer').style.display = 'none';
    if (typeof session.backTarget === 'function') session.backTarget();
    else renderHome();
  }

  function savePartialAndFinish() {
    closeExitModal();
    finishSession(true);
  }

  // ==================== SESSION EVALUATION ENGINE ====================
  function buildSessionEvaluation(isPartial) {
    const indices = [];
    session.questions.forEach((_, i) => {
      if (!isPartial || session.submitted[i]) indices.push(i);
    });
    if (!indices.length) return null;

    let correct = 0, wrong = 0, skipped = 0, fastCount = 0, independentCount = 0, hintCount = 0;
    let sumTime = 0, answered = 0;
    const bySub = new Map();

    indices.forEach((i) => {
      const q = session.questions[i];
      const c = session.correctness[i];
      const sec = session.timesSec[i] || 0;
      const target = q.targetSec || 60;
      const sub = q.subtopic || 'Tổng hợp';

      if (!bySub.has(sub)) bySub.set(sub, { ok: 0, total: 0, fast: 0, time: 0, targetSum: 0 });
      const st = bySub.get(sub);

      if (c === true || c === false) {
        answered++;
        sumTime += sec;
        st.total++;
        st.time += sec;
        st.targetSum += target;
        if (session.stepsUsed[i] === 0 && !session.usedStrategy[i]) independentCount++;
        else hintCount++;
        if (c === true) {
          correct++;
          st.ok++;
          if (sec <= target) {
            fastCount++;
            st.fast++;
          }
        } else {
          wrong++;
        }
      } else {
        skipped++;
      }
    });

    const totalConsidered = indices.length;
    const denom = answered > 0 ? answered : totalConsidered;
    const accuracyPct = Math.round((correct / denom) * 100);
    const avgSecPerQ = answered > 0 ? Math.round(sumTime / answered) : 0;
    const fastRatio = correct > 0 ? fastCount / correct : 0;

    let accGrade = '💪 Cần củng cố';
    if (accuracyPct >= 85) accGrade = '🏆 Xuất sắc';
    else if (accuracyPct >= 70) accGrade = '🌟 Khá tốt';
    else if (accuracyPct >= 50) accGrade = '📘 Trung bình';

    let speedGrade = '🐢 Còn chậm';
    if (correct > 0 && fastRatio >= 0.75) speedGrade = '⚡ Siêu tốc';
    else if (correct > 0 && fastRatio >= 0.45) speedGrade = '🚀 Đạt chuẩn';

    const strengths = [];
    const weaknesses = [];
    bySub.forEach((st, sub) => {
      if (st.total === 0) return;
      const acc = st.ok / st.total;
      const avgT = st.time / st.total;
      const avgTarget = st.targetSum / st.total;
      if (acc >= 0.8 && avgT <= avgTarget * 1.1) strengths.push(`${sub} (${st.ok}/${st.total} đúng, ~${Math.round(avgT)}s)`);
      else if (acc < 0.7 || avgT > avgTarget * 1.2) weaknesses.push(`${sub} (${st.ok}/${st.total} đúng, ~${Math.round(avgT)}s)`);
    });

    let autoSummary = '';
    if (answered === 0) {
      autoSummary = 'Chưa có câu nào được trả lời.';
    } else if (accuracyPct >= 80 && fastRatio >= 0.65) {
      autoSummary = `Buổi học rất hiệu quả! Lucas làm đúng ${correct}/${answered} câu (${accuracyPct}%) với tốc độ nhanh (${avgSecPerQ}s/câu). Tiếp tục duy trì nhịp độ này và thử Thi Thử Tổng Hợp.`;
    } else if (accuracyPct >= 70 && fastRatio < 0.5) {
      autoSummary = `Lucas hiểu bài tốt (${correct}/${answered} đúng) nhưng tốc độ còn hơi chậm (${avgSecPerQ}s/câu). Buổi tới nên dùng nút "Soi từ khóa" nhanh trong 10 giây đầu và luyện Speed Sprint.`;
    } else {
      autoSummary = `Lucas làm đúng ${correct}/${answered} câu (${accuracyPct}%), trung bình ${avgSecPerQ}s/câu. Nên vào mục "Ôn Câu Sai & Làm Chậm" và xem lại Lý thuyết các dạng chưa chắc.`;
    }

    const ts = Date.now();
    return {
      id: `ses_${ts}_${Math.random().toString(36).slice(2, 6)}`,
      ts,
      dateLabel: formatDateTime(ts),
      mode: session.mode,
      title: session.title + (isPartial ? ` (Đã làm ${answered}/${session.questions.length} câu)` : ''),
      answered,
      total: totalConsidered,
      correct,
      wrong,
      skipped,
      accuracyPct,
      totalTimeSec: sumTime || Math.floor((ts - session.sessionStartTs) / 1000),
      avgSecPerQ,
      fastCount,
      independentCount,
      hintCount,
      strengths,
      weaknesses,
      autoSummary,
      speedGrade,
      accGrade,
      stars: 0,
      focusLevel: '',
      parentNote: ''
    };
  }

  function finishSession(isPartial) {
    stopTimer();
    document.getElementById('top-timer').style.display = 'none';

    const ev = buildSessionEvaluation(isPartial);
    if (ev && ev.answered > 0) {
      store.sessions.unshift(ev);
      if (store.sessions.length > 100) store.sessions = store.sessions.slice(0, 100);
      saveStore();
      lastEvalId = ev.id;
    } else {
      lastEvalId = null;
    }

    const total = ev ? ev.answered : session.questions.length;
    const correct = ev ? ev.correct : 0;
    const wrong = ev ? ev.wrong : 0;
    const skip = ev ? ev.skipped : 0;
    const fastCount = ev ? ev.fastCount : 0;
    const pct = ev ? ev.accuracyPct : 0;

    let emoji = '💪', msg = 'Lucas cố gắng thêm một chút nhé!';
    if (pct >= 90) { emoji = '🏆'; msg = 'Quá xuất sắc! Phong độ đỉnh cao!'; }
    else if (pct >= 70) { emoji = '🌟'; msg = 'Làm tốt lắm Lucas! Tiếp tục rèn tốc độ nào!'; }
    else if (pct >= 50) { emoji = '👍'; msg = 'Khá tốt! Ôn lại các câu sai/chậm để bứt phá nhé!'; }

    document.getElementById('res-emoji').textContent = emoji;
    document.getElementById('res-title').textContent = msg;
    document.getElementById('res-score').textContent = `${correct} / ${total} (${pct}%)`;
    document.getElementById('res-time-summary').textContent = ev
      ? `Thời gian: ${formatSec(ev.totalTimeSec)} • Trung bình: ${ev.avgSecPerQ}s/câu • Đã ghi nhận vào Nhật ký học!`
      : '';

    document.getElementById('rm-correct').textContent = correct;
    document.getElementById('rm-wrong').textContent = wrong;
    document.getElementById('rm-fast').textContent = `${fastCount}/${correct || 0}`;
    document.getElementById('rm-skip').textContent = skip;

    renderSessionEvalCard(ev);
    renderReviewList(isPartial);
    showScreen('screen-result');
  }

  function renderSessionEvalCard(ev) {
    const card = document.getElementById('session-eval-card');
    if (!ev) {
      card.style.display = 'none';
      return;
    }
    card.style.display = 'block';
    const accCls = ev.accuracyPct >= 75 ? 'good' : ev.accuracyPct >= 50 ? 'mid' : 'warn';
    const spdCls = ev.speedGrade.includes('Siêu') ? 'good' : ev.speedGrade.includes('Đạt') ? 'mid' : 'warn';

    card.innerHTML = `
      <div class="eval-header">
        <h3>📋 Phiếu Đánh Giá Buổi Học (${escHtml(ev.dateLabel)})</h3>
        <div class="eval-badges">
          <span class="eval-pill ${accCls}">${escHtml(ev.accGrade)} (${ev.accuracyPct}%)</span>
          <span class="eval-pill ${spdCls}">${escHtml(ev.speedGrade)} (${ev.avgSecPerQ}s/câu)</span>
          <span class="eval-pill info">🧠 Tự giải: ${ev.independentCount}/${ev.answered} câu</span>
        </div>
      </div>

      <div class="eval-summary-banner">${escHtml(ev.autoSummary)}</div>

      <div class="eval-auto-grid">
        <div class="eval-box">
          <h4>✅ Điểm mạnh trong buổi</h4>
          <div>${ev.strengths.length ? ev.strengths.map((s) => `• ${escHtml(s)}`).join('<br>') : 'Chưa có chuyên đề nổi bật (hoặc mới làm ít câu).'}</div>
        </div>
        <div class="eval-box">
          <h4>🎯 Cần luyện thêm / tăng tốc</h4>
          <div>${ev.weaknesses.length ? ev.weaknesses.map((w) => `• ${escHtml(w)}`).join('<br>') : 'Không có điểm yếu rõ rệt trong buổi này!'}</div>
        </div>
      </div>

      <div class="parent-eval-box">
        <h4>✍️ Ghi nhận của Bố/Mẹ hoặc Lucas sau buổi học</h4>
        <div class="rating-row">
          <div class="star-group" id="res-stars">
            ${[1, 2, 3, 4, 5].map((n) => `<button class="star-btn ${ev.stars >= n ? 'active' : ''}" onclick="VTMOApp.setSessionStars('${ev.id}', ${n})">⭐</button>`).join('')}
          </div>
          <div class="focus-pills" id="res-focus">
            ${['🔥 Tập trung tốt', '🙂 Bình thường', '😵‍💫 Hơi vội / phân tâm'].map((lbl) =>
              `<button class="focus-pill ${ev.focusLevel === lbl ? 'active' : ''}" onclick="VTMOApp.setSessionFocus('${ev.id}', '${lbl}')">${lbl}</button>`
            ).join('')}
          </div>
        </div>
        <textarea class="parent-note-input" id="res-parent-note" placeholder="Ghi nhận xét về buổi học của Lucas (vd: Con làm nhanh phần Mảng 2, cần rèn thêm bảng kỳ diệu...)...">${escHtml(ev.parentNote || '')}</textarea>
        <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
          <button class="btn btn-primary" style="min-height:40px; padding:8px 16px; font-size:14px;" onclick="VTMOApp.saveParentEval('${ev.id}')">💾 Lưu nhận xét</button>
          <button class="btn btn-outline" style="min-height:40px; padding:8px 16px; font-size:14px;" onclick="VTMOApp.copySessionReport('${ev.id}')">📋 Chép báo cáo gửi Zalo</button>
          <span id="eval-saved-toast" style="font-size:13px; font-weight:700; color:var(--success);"></span>
        </div>
      </div>
    `;
  }

  function findSession(id) {
    return store.sessions.find((s) => s.id === id);
  }

  function setSessionStars(id, n) {
    const s = findSession(id);
    if (!s) return;
    s.stars = n;
    saveStore();
    if (lastEvalId === id) renderSessionEvalCard(s);
    if (document.getElementById('screen-analytics').classList.contains('active')) renderSessionHistory();
  }

  function setSessionFocus(id, lbl) {
    const s = findSession(id);
    if (!s) return;
    s.focusLevel = s.focusLevel === lbl ? '' : lbl;
    saveStore();
    if (lastEvalId === id) renderSessionEvalCard(s);
    if (document.getElementById('screen-analytics').classList.contains('active')) renderSessionHistory();
  }

  function saveParentEval(id, noteInputId = 'res-parent-note', toastId = 'eval-saved-toast') {
    const s = findSession(id);
    if (!s) return;
    const inp = document.getElementById(noteInputId);
    if (inp) s.parentNote = inp.value.trim();
    saveStore();
    const toast = document.getElementById(toastId);
    if (toast) {
      toast.textContent = '✅ Đã lưu đánh giá buổi học!';
      setTimeout(() => { if (toast) toast.textContent = ''; }, 2500);
    }
  }

  function buildReportText(s) {
    const stars = s.stars ? '⭐'.repeat(s.stars) : 'Chưa chấm sao';
    return [
      `📊 BÁO CÁO HỌC TẬP VTMO — LUCAS`,
      `🗓️ Thời gian: ${s.dateLabel}`,
      `📚 Nội dung: ${s.title}`,
      `✅ Kết quả: ${s.correct}/${s.answered} câu đúng (${s.accuracyPct}%)`,
      `⏱ Tốc độ: TB ${s.avgSecPerQ}s/câu • Đạt tốc độ chuẩn: ${s.fastCount}/${s.correct} câu (${s.speedGrade})`,
      `🧠 Tự lập: Tự giải ${s.independentCount}/${s.answered} câu`,
      s.strengths?.length ? `💪 Điểm mạnh: ${s.strengths.join('; ')}` : '',
      s.weaknesses?.length ? `🎯 Cần ôn thêm: ${s.weaknesses.join('; ')}` : '',
      `💬 Nhận xét tự động: ${s.autoSummary}`,
      `👨‍👩‍👦 Đánh giá: ${stars}${s.focusLevel ? ' | ' + s.focusLevel : ''}`,
      s.parentNote ? `📝 Ghi chú Bố/Mẹ: ${s.parentNote}` : ''
    ].filter(Boolean).join('\n');
  }

  function copySessionReport(id) {
    const s = findSession(id);
    if (!s) return;
    const text = buildReportText(s);
    navigator.clipboard?.writeText(text).then(() => {
      alert('Đã sao chép báo cáo buổi học! Bạn có thể dán thẳng vào Zalo hoặc Ghi chú.');
    }).catch(() => {
      prompt('Sao chép báo cáo dưới đây:', text);
    });
  }

  function renderReviewList(isPartial) {
    const container = document.getElementById('review-list');
    container.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D', 'E'];

    session.questions.forEach((q, i) => {
      if (isPartial && !session.submitted[i]) return;
      const c = session.correctness[i];
      const sec = session.timesSec[i];
      const target = q.targetSec || 60;
      const cls = c === true ? 'ok' : c === false ? 'bad' : 'skip';
      const statusText = c === true ? '✅ Đúng' : c === false ? '❌ Sai' : '⏭ Bỏ qua';
      const speedCls = sec <= target ? 'fast' : sec <= target * 1.3 ? 'medium' : 'slow';
      const speedLabel = sec <= target ? `⚡ Nhanh (${sec}s/${target}s)` : `🐢 Chậm (${sec}s/${target}s)`;

      let userStr = 'Chưa trả lời';
      if (session.answers[i] !== null) {
        if (q.type === 'mc') userStr = `${labels[session.answers[i]]}. ${q.options[session.answers[i]]}`;
        else if (q.type === 'open_multi') userStr = session.answers[i].join(' | ');
        else userStr = session.answers[i];
      }
      const ansStr = q.type === 'mc'
        ? `${labels[q.answer]}. ${q.options[q.answer]}`
        : q.type === 'open_multi'
          ? q.inputs.map((inp) => inp.answer).join(' | ')
          : q.answer;

      const card = document.createElement('div');
      card.className = `review-card ${cls}`;
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:8px;">
          <span style="font-weight:800; font-size:14px;">${statusText} • Câu ${i + 1} (${escHtml(q.source)})</span>
          <span class="speed-pill ${speedCls}">${speedLabel}</span>
        </div>
        <div style="font-size:15px; margin-bottom:8px; white-space:pre-wrap;">${escHtml(q.text)}</div>
        <div style="font-size:13.5px; color:var(--text-muted); margin-bottom:8px;">
          <b>Lucas chọn:</b> ${escHtml(userStr)} &nbsp;|&nbsp; <b>Đáp án đúng:</b> <span style="color:var(--success); font-weight:800;">${escHtml(ansStr)}</span>
        </div>
        <details>
          <summary style="cursor:pointer; font-weight:700; font-size:13px; color:var(--primary);">Xem giải thích chi tiết</summary>
          <div style="margin-top:8px; padding:10px 12px; background:#f8fafc; border-radius:8px; font-size:13.5px; white-space:pre-wrap; line-height:1.6;">${escHtml(q.explanation)}</div>
        </details>
      `;
      container.appendChild(card);
    });
  }

  function retrySession() {
    startSession({
      mode: session.mode,
      title: session.title,
      backTarget: session.backTarget,
      questions: session.questions,
      examLimitSec: session.examLimitSec
    });
  }

  // ==================== ANALYTICS, CHART, HISTORY & SYNC ====================
  function openAnalytics() {
    stopTimer();
    document.getElementById('top-timer').style.display = 'none';

    const tbody = document.getElementById('analytics-tbody');
    tbody.innerHTML = '';
    Object.values(MANG_META).forEach((m) => {
      const qs = ALL_QUESTIONS.filter((q) => q.mang === m.key);
      const tried = qs.filter((q) => store.byQ[q.id]);
      const ok = qs.filter((q) => store.byQ[q.id]?.lastCorrect);
      const avg = computeAvgSec(qs);
      const targetAvg = Math.round(qs.reduce((s, q) => s + (q.targetSec || 60), 0) / qs.length);
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><b>${m.icon} ${escHtml(m.name)}</b></td>
        <td>${tried.length} / ${qs.length}</td>
        <td>${tried.length ? Math.round((ok.length / tried.length) * 100) + '%' : '—'}</td>
        <td>${avg ? `${avg}s` : '—'} <span style="color:var(--text-muted); font-size:12px;">(chuẩn ~${targetAvg}s)</span></td>
      `;
      tbody.appendChild(tr);
    });

    renderSessionChart();
    renderSessionHistory();
    loadGistInputs();

    const slowWrap = document.getElementById('analytics-weak-list');
    const weak = getWeakOrSlowQuestions();
    if (!weak.length) {
      slowWrap.innerHTML = '<div class="theory-card"><p>Chưa có câu sai hoặc câu làm quá chậm. Hãy bắt đầu luyện tập để hệ thống ghi nhận dữ liệu cho Lucas nhé!</p></div>';
    } else {
      slowWrap.innerHTML = weak.map((q) => {
        const rec = store.byQ[q.id];
        const status = !rec.lastCorrect ? '<span class="speed-pill slow">❌ Làm sai</span>' : `<span class="speed-pill medium">🐢 Chậm (${rec.lastSec}s / ${q.targetSec}s)</span>`;
        return `
          <div class="review-card ${rec.lastCorrect ? 'skip' : 'bad'}">
            <div style="display:flex; justify-content:space-between; gap:8px; flex-wrap:wrap; margin-bottom:6px;">
              <b>${escHtml(q.source)} — ${escHtml(q.subtopic)}</b>
              ${status}
            </div>
            <div style="font-size:14px; color:var(--text-muted);">${escHtml(q.text.slice(0, 140))}${q.text.length > 140 ? '...' : ''}</div>
          </div>
        `;
      }).join('');
    }
    showScreen('screen-analytics');
  }

  function renderSessionChart() {
    const box = document.getElementById('session-chart-box');
    const recent = store.sessions.slice(0, 10).reverse();
    if (!recent.length) {
      box.innerHTML = '<p style="font-size:14px; color:var(--text-muted);">Biểu đồ xu hướng sẽ xuất hiện ngay sau khi Lucas hoàn thành buổi học đầu tiên!</p>';
      return;
    }
    const colW = 68;
    const w = Math.max(460, recent.length * colW + 40);
    const h = 165;
    let svg = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">`;
    svg += `<text x="10" y="16" font-size="12" font-weight="800" fill="#1e40af">Cột xanh: % Chính xác  |  Số cam: Tốc độ TB (giây/câu)</text>`;
    recent.forEach((s, i) => {
      const cx = 38 + i * colW;
      const barH = Math.max(6, Math.round((s.accuracyPct / 100) * 85));
      const y = 122 - barH;
      const color = s.accuracyPct >= 75 ? '#059669' : s.accuracyPct >= 50 ? '#d97706' : '#dc2626';
      svg += `<rect x="${cx - 14}" y="${y}" width="28" height="${barH}" rx="6" fill="${color}" opacity="0.88"/>`;
      svg += `<text x="${cx}" y="${y - 5}" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0f172a">${s.accuracyPct}%</text>`;
      svg += `<text x="${cx}" y="138" text-anchor="middle" font-size="11" font-weight="800" fill="#c2410c">${s.avgSecPerQ}s</text>`;
      svg += `<text x="${cx}" y="154" text-anchor="middle" font-size="10.5" fill="#64748b">Buổi ${i + 1}</text>`;
    });
    svg += '</svg>';
    box.innerHTML = svg;
  }

  function renderSessionHistory() {
    const wrap = document.getElementById('session-history-list');
    if (!store.sessions.length) {
      wrap.innerHTML = '<div class="theory-card"><p>Chưa có buổi học nào được ghi nhận. Khi Lucas làm bài và bấm Nộp hoặc Lưu buổi học, đánh giá chi tiết sẽ tự động lưu tại đây!</p></div>';
      return;
    }
    wrap.innerHTML = store.sessions.map((s) => {
      const accCls = s.accuracyPct >= 75 ? 'good' : s.accuracyPct >= 50 ? 'mid' : 'warn';
      const spdCls = s.speedGrade.includes('Siêu') ? 'good' : s.speedGrade.includes('Đạt') ? 'mid' : 'warn';
      return `
        <div class="session-log-item">
          <div class="session-log-top">
            <div>
              <div style="font-size:15.5px; font-weight:800; color:var(--text);">${escHtml(s.title)}</div>
              <div style="font-size:12.5px; color:var(--text-muted);">🗓️ ${escHtml(s.dateLabel)} • Đúng <b>${s.correct}/${s.answered}</b> • Tự giải: <b>${s.independentCount}/${s.answered}</b></div>
            </div>
            <div class="eval-badges">
              <span class="eval-pill ${accCls}">${escHtml(s.accGrade)} (${s.accuracyPct}%)</span>
              <span class="eval-pill ${spdCls}">${escHtml(s.speedGrade)} (${s.avgSecPerQ}s/câu)</span>
            </div>
          </div>
          <div style="font-size:13.5px; color:var(--text); background:#f8fafc; padding:10px 12px; border-radius:10px; margin-bottom:10px;">
            ${escHtml(s.autoSummary)}
            ${s.strengths?.length ? `<div style="margin-top:4px; color:var(--success);"><b>✅ Điểm mạnh:</b> ${escHtml(s.strengths.join('; '))}</div>` : ''}
            ${s.weaknesses?.length ? `<div style="margin-top:2px; color:var(--danger);"><b>🎯 Cần ôn thêm:</b> ${escHtml(s.weaknesses.join('; '))}</div>` : ''}
          </div>
          <details>
            <summary style="cursor:pointer; font-size:13px; font-weight:800; color:var(--primary);">
              ✍️ Đánh giá Bố/Mẹ ${s.stars ? '(' + '⭐'.repeat(s.stars) + ')' : ''} ${s.focusLevel ? '• ' + escHtml(s.focusLevel) : ''}
            </summary>
            <div class="parent-eval-box" style="margin-top:10px;">
              <div class="rating-row">
                <div class="star-group">
                  ${[1, 2, 3, 4, 5].map((n) => `<button class="star-btn ${s.stars >= n ? 'active' : ''}" onclick="VTMOApp.setSessionStars('${s.id}', ${n})">⭐</button>`).join('')}
                </div>
                <div class="focus-pills">
                  ${['🔥 Tập trung tốt', '🙂 Bình thường', '😵‍💫 Hơi vội / phân tâm'].map((lbl) =>
                    `<button class="focus-pill ${s.focusLevel === lbl ? 'active' : ''}" onclick="VTMOApp.setSessionFocus('${s.id}', '${lbl}')">${lbl}</button>`
                  ).join('')}
                </div>
              </div>
              <textarea class="parent-note-input" id="note-${s.id}" placeholder="Nhận xét buổi học...">${escHtml(s.parentNote || '')}</textarea>
              <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
                <button class="btn btn-primary" style="min-height:38px; padding:6px 14px; font-size:13px;" onclick="VTMOApp.saveParentEval('${s.id}', 'note-${s.id}', 'toast-${s.id}')">💾 Lưu nhận xét</button>
                <button class="btn btn-outline" style="min-height:38px; padding:6px 14px; font-size:13px;" onclick="VTMOApp.copySessionReport('${s.id}')">📋 Chép báo cáo</button>
                <button class="btn btn-outline" style="min-height:38px; padding:6px 14px; font-size:13px; color:var(--danger);" onclick="VTMOApp.deleteSession('${s.id}')">🗑 Xóa</button>
                <span id="toast-${s.id}" style="font-size:12.5px; font-weight:700; color:var(--success);"></span>
              </div>
            </div>
          </details>
        </div>
      `;
    }).join('');
  }

  function deleteSession(id) {
    if (!confirm('Xóa bản ghi buổi học này?')) return;
    store.sessions = store.sessions.filter((s) => s.id !== id);
    saveStore();
    renderSessionChart();
    renderSessionHistory();
  }

  function resetStats() {
    if (confirm('Xóa toàn bộ lịch sử các buổi học và thống kê tốc độ của Lucas?')) {
      store = defaultStore();
      saveStore();
      openAnalytics();
    }
  }

  // ==================== SYNC & BACKUP (PC <-> IPAD) ====================
  function mergeExternalStore(incoming) {
    if (!incoming || typeof incoming !== 'object') throw new Error('Dữ liệu không hợp lệ');
    const byId = new Map();
    store.sessions.forEach((s) => byId.set(s.id, s));
    (incoming.sessions || []).forEach((s) => {
      if (!s || !s.id) return;
      const cur = byId.get(s.id);
      if (!cur) byId.set(s.id, s);
      else {
        byId.set(s.id, {
          ...cur,
          ...s,
          stars: Math.max(cur.stars || 0, s.stars || 0),
          parentNote: s.parentNote || cur.parentNote || '',
          focusLevel: s.focusLevel || cur.focusLevel || ''
        });
      }
    });
    store.sessions = Array.from(byId.values()).sort((a, b) => b.ts - a.ts).slice(0, 100);

    const incByQ = incoming.byQ || {};
    Object.keys(incByQ).forEach((qid) => {
      const a = store.byQ[qid];
      const b = incByQ[qid];
      if (!a) store.byQ[qid] = b;
      else {
        store.byQ[qid] = {
          attempts: Math.max(a.attempts || 0, b.attempts || 0),
          correct: Math.max(a.correct || 0, b.correct || 0),
          lastCorrect: a.lastCorrect || b.lastCorrect,
          bestSec: Math.min(a.bestSec || 99999, b.bestSec || 99999),
          lastSec: Math.min(a.lastSec || 99999, b.lastSec || 99999)
        };
      }
    });
    store.attempts = Math.max(store.attempts || 0, incoming.attempts || 0);
    store.correct = Math.max(store.correct || 0, incoming.correct || 0);
    store.totalTimeSec = Math.max(store.totalTimeSec || 0, incoming.totalTimeSec || 0);
    saveStore();
  }

  function encodeSyncCode(obj) {
    const json = JSON.stringify(obj);
    return btoa(unescape(encodeURIComponent(json)));
  }

  function decodeSyncCode(code) {
    const json = decodeURIComponent(escape(atob(code.trim())));
    return JSON.parse(json);
  }

  function copySyncCode() {
    const code = encodeSyncCode(store);
    const box = document.getElementById('sync-code-input');
    if (box) box.value = code;
    navigator.clipboard?.writeText(code).then(() => {
      setSyncMsg('✅ Đã tạo và sao chép Mã đồng bộ! Dán mã này sang máy kia rồi bấm "Nhập mã".');
    }).catch(() => {
      setSyncMsg('✅ Đã tạo mã ở ô bên dưới — hãy sao chép thủ công sang máy kia.');
    });
  }

  function importSyncCode() {
    const box = document.getElementById('sync-code-input');
    if (!box || !box.value.trim()) {
      setSyncMsg('⚠️ Vui lòng dán Mã đồng bộ vào ô trước.');
      return;
    }
    try {
      const parsed = decodeSyncCode(box.value);
      mergeExternalStore(parsed);
      openAnalytics();
      setSyncMsg('✅ Đã gộp dữ liệu và lịch sử đánh giá từ máy kia!');
    } catch (e) {
      setSyncMsg('❌ Mã đồng bộ không đúng định dạng.');
    }
  }

  function downloadBackupJson() {
    const blob = new Blob([JSON.stringify(store, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `vtmo-lucas-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  }

  function importBackupFile(evt) {
    const file = evt.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        mergeExternalStore(parsed);
        openAnalytics();
        setSyncMsg('✅ Đã nạp và gộp dữ liệu từ file sao lưu!');
      } catch (_) {
        setSyncMsg('❌ File JSON không hợp lệ.');
      }
    };
    reader.readAsText(file);
  }

  function setSyncMsg(msg) {
    const el = document.getElementById('sync-status-msg');
    if (el) el.textContent = msg;
  }

  function loadGistInputs() {
    try {
      const cfg = JSON.parse(localStorage.getItem(GIST_CFG_KEY) || '{}');
      const idEl = document.getElementById('gist-id-input');
      const tokEl = document.getElementById('gist-token-input');
      if (idEl && cfg.gistId) idEl.value = cfg.gistId;
      if (tokEl && cfg.token) tokEl.value = cfg.token;
    } catch (_) {}
  }

  function saveGistConfig() {
    const gistId = document.getElementById('gist-id-input').value.trim();
    const token = document.getElementById('gist-token-input').value.trim();
    localStorage.setItem(GIST_CFG_KEY, JSON.stringify({ gistId, token }));
    setSyncMsg('✅ Đã lưu cấu hình Gist trên trình duyệt này.');
  }

  async function cloudPush() {
    const cfg = JSON.parse(localStorage.getItem(GIST_CFG_KEY) || '{}');
    if (!cfg.gistId || !cfg.token) { setSyncMsg('⚠️ Nhập Gist ID và Token rồi bấm Lưu cấu hình trước.'); return; }
    try {
      setSyncMsg('⏳ Đang đẩy lên GitHub Gist...');
      const res = await fetch(`https://api.github.com/gists/${encodeURIComponent(cfg.gistId)}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${cfg.token}`,
          'Accept': 'application/vnd.github+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          files: { 'vtmo_lucas_progress.json': { content: JSON.stringify(store, null, 2) } }
        })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSyncMsg('✅ Đã đẩy toàn bộ kết quả & đánh giá lên Gist!');
    } catch (e) {
      setSyncMsg(`❌ Lỗi đẩy Gist: ${e.message}`);
    }
  }

  async function cloudPull() {
    const cfg = JSON.parse(localStorage.getItem(GIST_CFG_KEY) || '{}');
    if (!cfg.gistId) { setSyncMsg('⚠️ Nhập Gist ID trước.'); return; }
    try {
      setSyncMsg('⏳ Đang tải từ GitHub Gist...');
      const headers = { 'Accept': 'application/vnd.github+json' };
      if (cfg.token) headers['Authorization'] = `Bearer ${cfg.token}`;
      const res = await fetch(`https://api.github.com/gists/${encodeURIComponent(cfg.gistId)}`, { headers });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const file = data.files?.['vtmo_lucas_progress.json'] || Object.values(data.files || {})[0];
      if (!file || !file.content) throw new Error('Gist trống');
      mergeExternalStore(JSON.parse(file.content));
      openAnalytics();
      setSyncMsg('✅ Đã tải và gộp dữ liệu từ GitHub Gist!');
    } catch (e) {
      setSyncMsg(`❌ Lỗi tải Gist: ${e.message}`);
    }
  }

  // ==================== SCRATCHPAD (APPLE PENCIL + TOUCH + MOUSE) ====================
  let pad = {
    canvas: null,
    ctx: null,
    drawing: false,
    tool: 'pen',
    color: '#1d4ed8',
    strokes: [],
    currentStroke: null,
    bgMode: 'bg-grid'
  };

  function toggleScratchPanel() {
    session.scratchVisible = !session.scratchVisible;
    applyScratchVisibility();
    if (session.scratchVisible) resizeScratchCanvas();
  }

  function applyScratchVisibility() {
    const grid = document.getElementById('workspace-grid');
    const panel = document.getElementById('scratch-panel');
    const btn = document.getElementById('btn-toggle-scratch');
    if (session.scratchVisible) {
      grid.classList.remove('scratch-hidden');
      panel.style.display = 'block';
      btn.textContent = '✏️ Ẩn bảng nháp';
    } else {
      grid.classList.add('scratch-hidden');
      panel.style.display = 'none';
      btn.textContent = '✏️ Mở bảng nháp';
    }
  }

  function switchScratchTab(tab) {
    document.querySelectorAll('.scratch-tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === tab));
    document.getElementById('scratch-draw-pane').style.display = tab === 'draw' ? 'block' : 'none';
    document.getElementById('scratch-notes-pane').style.display = tab === 'notes' ? 'block' : 'none';
    document.getElementById('scratch-cheat-pane').style.display = tab === 'cheat' ? 'block' : 'none';
    if (tab === 'draw') resizeScratchCanvas();
  }

  function initScratchpad() {
    pad.canvas = document.getElementById('scratch-canvas');
    if (!pad.canvas) return;
    pad.ctx = pad.canvas.getContext('2d');
    pad.strokes = [];
    resizeScratchCanvas();

    if (pad.canvas.dataset.bound) return;
    pad.canvas.dataset.bound = '1';

    pad.canvas.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      pad.canvas.setPointerCapture(e.pointerId);
      const rect = pad.canvas.getBoundingClientRect();
      pad.drawing = true;
      pad.currentStroke = {
        tool: pad.tool,
        color: pad.color,
        width: pad.tool === 'eraser' ? 20 : pad.tool === 'highlighter' ? 14 : 2.6,
        alpha: pad.tool === 'highlighter' ? 0.35 : 1,
        points: [{ x: e.clientX - rect.left, y: e.clientY - rect.top }]
      };
    });

    pad.canvas.addEventListener('pointermove', (e) => {
      if (!pad.drawing || !pad.currentStroke) return;
      e.preventDefault();
      const rect = pad.canvas.getBoundingClientRect();
      pad.currentStroke.points.push({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      redrawPad();
      drawStroke(pad.currentStroke);
    });

    const endStroke = () => {
      if (!pad.drawing) return;
      pad.drawing = false;
      if (pad.currentStroke && pad.currentStroke.points.length) pad.strokes.push(pad.currentStroke);
      pad.currentStroke = null;
      redrawPad();
    };
    pad.canvas.addEventListener('pointerup', endStroke);
    pad.canvas.addEventListener('pointercancel', endStroke);

    window.addEventListener('resize', () => {
      if (document.getElementById('screen-quiz').classList.contains('active') && session.scratchVisible) resizeScratchCanvas();
    });

    const notesEl = document.getElementById('scratch-notes-input');
    if (notesEl) {
      notesEl.addEventListener('input', () => {
        const q = session.questions[session.idx];
        if (q) session.notesByQ[q.id] = notesEl.value;
      });
    }
  }

  function resizeScratchCanvas() {
    if (!pad.canvas) return;
    const wrap = pad.canvas.parentElement;
    if (!wrap) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = wrap.clientWidth, h = wrap.clientHeight;
    if (!w || !h) return;
    pad.canvas.width = w * dpr;
    pad.canvas.height = h * dpr;
    pad.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    redrawPad();
  }

  function drawStroke(st) {
    const ctx = pad.ctx;
    if (!ctx || !st.points.length) return;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = st.width;
    if (st.tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = st.alpha;
      ctx.strokeStyle = st.color;
    }
    ctx.beginPath();
    ctx.moveTo(st.points[0].x, st.points[0].y);
    if (st.points.length === 1) ctx.lineTo(st.points[0].x + 0.1, st.points[0].y + 0.1);
    else for (let i = 1; i < st.points.length; i++) ctx.lineTo(st.points[i].x, st.points[i].y);
    ctx.stroke();
    ctx.restore();
  }

  function redrawPad() {
    if (!pad.ctx || !pad.canvas) return;
    pad.ctx.clearRect(0, 0, pad.canvas.width, pad.canvas.height);
    pad.strokes.forEach(drawStroke);
  }

  function setPen(tool, color, btnEl) {
    pad.tool = tool;
    if (color) pad.color = color;
    document.querySelectorAll('.pen-btn.tool-sel').forEach((b) => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
  }

  function undoPad() { pad.strokes.pop(); redrawPad(); }
  function clearPad() { pad.strokes = []; redrawPad(); }
  function cyclePadBg() {
    const wrap = document.getElementById('canvas-wrap');
    const order = ['bg-grid', 'bg-lined', 'bg-plain'];
    const next = order[(order.indexOf(pad.bgMode) + 1) % order.length];
    wrap.classList.remove('bg-grid', 'bg-lined', 'bg-plain');
    wrap.classList.add(next);
    pad.bgMode = next;
  }

  // ==================== CRISP SVG & HTML DIAGRAM RENDERER ====================
  function renderDiagram(d) {
    if (!d) return '';
    switch (d.type) {
      case 'cryptarithm': return renderCryptarithm(d);
      case 'grid': return renderGrid(d, false);
      case 'sumGrid': return renderGrid(d, true);
      case 'pyramid': return renderPyramid(d);
      case 'flowchart': return renderFlowchart(d);
      case 'zigzag': return renderZigzag(d);
      case 'circleGame': return renderCircleGame();
      case 'spiralGrey': return renderSpiralGrey();
      case 'nestedShapes': return renderNestedShapes();
      case 'xSquares': return renderXSquares();
      case 'triSquareSeq': return renderTriSquareSeq();
      case 'matchGrids': return renderMatchGrids();
      case 'matchDigits': return renderMatchDigits();
      case 'match2021': return renderMatch2021();
      case 'ledGrid': return renderLedGrid();
      case 'whiteTriangles': return renderWhiteTriangles();
      case 'hexCircles': return renderHexCircles();
      case 'checker20': return renderChecker20();
      case 'snakeOddTable': return renderSnakeOddTable();
      case 'ribbon16': return renderRibbon16();
      case 'bwBoxes': return renderBwBoxes();
      default: return '';
    }
  }

  function renderCryptarithm(d) {
    const parsed = d.rows.map((raw) => {
      const trimmed = raw.trim();
      let op = '', rest = trimmed;
      if (/^[+\-×]/.test(trimmed)) { op = trimmed[0]; rest = trimmed.slice(1).trim(); }
      return { op, chars: rest.split(/\s+/) };
    });
    const maxCols = Math.max(...parsed.map((p) => p.chars.length)) + 1;
    let html = '<table class="crypt-table">';
    parsed.forEach((p, idx) => {
      const cls = d.lineBeforeLast && idx === parsed.length - 1 ? ' class="crypt-line"' : '';
      html += `<tr${cls}>`;
      const padCount = maxCols - p.chars.length;
      for (let i = 0; i < padCount; i++) html += `<td>${i === 0 ? escHtml(p.op) : ''}</td>`;
      p.chars.forEach((c) => { html += `<td>${escHtml(c)}</td>`; });
      html += '</tr>';
    });
    return html + '</table>';
  }

  function renderGrid(d, isSumGrid) {
    let html = '<table class="magic-grid">';
    d.rows.forEach((row, rIdx) => {
      html += '<tr>';
      row.forEach((cell, cIdx) => {
        const isLastCol = isSumGrid && cIdx === row.length - 1;
        const isLastRow = isSumGrid && rIdx === d.rows.length - 1;
        let cls = '';
        if (isSumGrid && isLastCol && isLastRow) cls = 'empty-corner';
        else if (isSumGrid && (isLastCol || isLastRow)) cls = 'sum-cell';
        else if (cell === 'x' || cell === '?' || cell === 'A') cls = 'x-cell';
        html += `<td class="${cls}">${escHtml(cell)}</td>`;
      });
      html += '</tr>';
    });
    return html + '</table>';
  }

  function renderPyramid(d) {
    const cellW = 54, cellH = 38;
    const totalRows = d.rows.length;
    const maxCols = d.rows[totalRows - 1].length;
    const svgW = maxCols * cellW + 20, svgH = totalRows * cellH + 20;
    let shapes = '';
    d.rows.forEach((row, rIdx) => {
      const startX = (svgW - row.length * cellW) / 2;
      const y = 10 + rIdx * cellH;
      row.forEach((val, cIdx) => {
        const x = startX + cIdx * cellW;
        const fill = /[A-Z?]/.test(val) ? '#fef3c7' : '#ffffff';
        shapes += `<rect x="${x}" y="${y}" width="${cellW}" height="${cellH}" fill="${fill}" stroke="#334155" stroke-width="2"/>`;
        shapes += `<text x="${x + cellW / 2}" y="${y + cellH / 2 + 6}" text-anchor="middle" font-size="16" font-weight="800" fill="#0f172a">${escHtml(val)}</text>`;
      });
    });
    return `<svg width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}">${shapes}</svg>`;
  }

  function renderFlowchart(d) {
    const n = d.nodes.length, w = n * 116 - 20, h = 76;
    let svg = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">`;
    d.nodes.forEach((label, i) => {
      const cx = 32 + i * 114, cy = 44;
      svg += `<circle cx="${cx}" cy="${cy}" r="24" fill="${label ? '#eff6ff' : '#fff'}" stroke="#1d4ed8" stroke-width="2.2"/>`;
      svg += `<text x="${cx}" y="${cy + 6}" text-anchor="middle" font-size="17" font-weight="800" fill="#0f172a">${escHtml(label)}</text>`;
      if (i < n - 1) {
        const ax1 = cx + 26, ax2 = cx + 88;
        svg += `<line x1="${ax1}" y1="${cy}" x2="${ax2}" y2="${cy}" stroke="#334155" stroke-width="2"/>`;
        svg += `<polygon points="${ax2},${cy} ${ax2 - 8},${cy - 5} ${ax2 - 8},${cy + 5}" fill="#334155"/>`;
        svg += `<text x="${(ax1 + ax2) / 2}" y="${cy - 10}" text-anchor="middle" font-size="14" font-weight="800" fill="#b45309">${escHtml(d.arrows[i])}</text>`;
      }
    });
    return svg + '</svg>';
  }

  function renderZigzag(d) {
    let html = '<table class="zig-table"><tr>' + d.cols.map((c) => `<th>${escHtml(c)}</th>`).join('') + '</tr>';
    d.rows.forEach((r) => { html += '<tr>' + r.map((v) => `<td>${v}</td>`).join('') + '</tr>'; });
    return html + '</table>';
  }

  function renderCircleGame() {
    const cx = 135, cy = 120, r = 90, total = 16;
    const labels = { 0: 'A', 1: 'B', 3: 'C', 6: 'D', 10: 'E' };
    let svg = '<svg width="270" height="240" viewBox="0 0 270 240">';
    for (let i = 0; i < total; i++) {
      if (i >= 12 && i <= 14) {
        if (i === 13) {
          const ang = (i / total) * Math.PI * 2 - Math.PI / 2;
          svg += `<text x="${cx + r * Math.cos(ang)}" y="${cy + r * Math.sin(ang) + 5}" text-anchor="middle" font-size="20" font-weight="800" fill="#475569">•••</text>`;
        }
        continue;
      }
      const ang = (i / total) * Math.PI * 2 - Math.PI / 2;
      const x = cx + r * Math.cos(ang), y = cy + r * Math.sin(ang);
      const lbl = labels[i] || '';
      svg += `<circle cx="${x}" cy="${y}" r="15" fill="${lbl ? '#eff6ff' : '#fff'}" stroke="#334155" stroke-width="2"/>`;
      if (lbl) svg += `<text x="${x}" y="${y + 5}" text-anchor="middle" font-size="14" font-weight="800" fill="#1d4ed8">${lbl}</text>`;
    }
    return svg + '</svg>';
  }

  function renderSpiralGrey() {
    const pos = [
      [1, 3, 2, true], [2, 2, 2, true], [3, 2, 3, true], [4, 3, 3, false],
      [5, 4, 3, true], [6, 4, 2, false], [7, 4, 1, true], [8, 3, 1, false],
      [9, 2, 1, false], [10, 1, 1, true], [11, 1, 2, false], [12, 1, 3, false],
      [13, 1, 4, true], [14, 2, 4, false], [15, 3, 4, false], [16, 4, 4, false],
      [17, 5, 4, true], [18, 5, 3, false], [19, 5, 2, false], [20, 5, 1, false],
      [21, 5, 0, true], [22, 4, 0, false], [23, 3, 0, false], [24, 2, 0, false],
      [25, 1, 0, false], [26, 0, 0, true], [27, 0, 1, false]
    ];
    const step = 44, ox = 28, oy = 26;
    let svg = '<svg width="245" height="275" viewBox="0 0 245 275">';
    for (let i = 0; i < pos.length - 1; i++) {
      const [, r1, c1] = pos[i], [, r2, c2] = pos[i + 1];
      svg += `<line x1="${ox + c1 * step}" y1="${oy + r1 * step}" x2="${ox + c2 * step}" y2="${oy + r2 * step}" stroke="#64748b" stroke-width="1.8"/>`;
    }
    pos.forEach(([n, r, c, grey]) => {
      const x = ox + c * step, y = oy + r * step;
      svg += `<circle cx="${x}" cy="${y}" r="16" fill="${grey ? '#94a3b8' : '#ffffff'}" stroke="#0f172a" stroke-width="2"/>`;
      svg += `<text x="${x}" y="${y + 5}" text-anchor="middle" font-size="13" font-weight="800" fill="${grey ? '#fff' : '#0f172a'}">${n}</text>`;
    });
    return svg + `<text x="${ox + 2 * step}" y="${oy + 5}" font-size="18" font-weight="800" fill="#475569">→ •••</text></svg>`;
  }

  function shapeSvg(kind, cx, cy, r) {
    if (kind === 'circle') return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#0f172a" stroke-width="2.2"/>`;
    if (kind === 'square') return `<rect x="${cx - r * 0.85}" y="${cy - r * 0.85}" width="${r * 1.7}" height="${r * 1.7}" fill="none" stroke="#0f172a" stroke-width="2.2"/>`;
    if (kind === 'triangle') return `<polygon points="${cx},${cy - r} ${cx - r * 0.92},${cy + r * 0.78} ${cx + r * 0.92},${cy + r * 0.78}" fill="none" stroke="#0f172a" stroke-width="2.2"/>`;
    if (kind === 'pentagon') {
      let pts = [];
      for (let i = 0; i < 5; i++) {
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5;
        pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
      }
      return `<polygon points="${pts.join(' ')}" fill="none" stroke="#0f172a" stroke-width="2.2"/>`;
    }
    return '';
  }

  function renderNestedShapes() {
    const seq = [['circle', 'square'], ['square', 'triangle'], ['triangle', 'circle'], ['circle', 'pentagon'], null, ['triangle', 'circle']];
    let svg = '<svg width="450" height="84" viewBox="0 0 450 84">';
    seq.forEach((pair, i) => {
      const cx = 38 + i * 74, cy = 42;
      if (!pair) svg += `<text x="${cx}" y="${cy + 10}" text-anchor="middle" font-size="30" font-weight="900" fill="#1d4ed8">?</text>`;
      else svg += shapeSvg(pair[0], cx, cy, 28) + shapeSvg(pair[1], cx, cy + (pair[0] === 'triangle' ? 4 : 0), 15);
    });
    return svg + '</svg>';
  }

  function renderXSquares() {
    const s = 13;
    const exactFigs = [
      [[0, 1]],
      [[0, 2], [1, 1], [2, 2]],
      [[0, 0], [2, 0], [1, 1], [0, 2], [2, 2]],
      [[1, 0], [3, 0], [2, 1], [1, 2], [3, 2], [0, 3], [4, 3]],
      [[0, 0], [4, 0], [1, 1], [3, 1], [2, 2], [1, 3], [3, 3], [0, 4], [4, 4]]
    ];
    let svg = '<svg width="410" height="96" viewBox="0 0 410 96">';
    exactFigs.forEach((cells, idx) => {
      const ox = [16, 62, 128, 198, 294][idx], oy = idx < 3 ? 28 : idx === 3 ? 16 : 6;
      cells.forEach(([c, r]) => { svg += `<rect x="${ox + c * s}" y="${oy + r * s}" width="${s}" height="${s}" fill="#64748b" stroke="#0f172a" stroke-width="1.2"/>`; });
      const cx = ox + (idx === 0 ? 6 : idx < 3 ? 20 : 32);
      svg += `<text x="${cx}" y="90" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Hình ${idx + 1}</text>`;
    });
    return svg + '</svg>';
  }

  function renderTriSquareSeq() {
    let svg = '<svg width="420" height="125" viewBox="0 0 420 125">';
    svg += '<text x="10" y="18" font-size="13" font-weight="800" fill="#1e40af">Dãy 1 (Tam giác cạnh 1 cm): 1 tấm → 4 tấm → 9 tấm → 16 tấm ...</text>';
    for (let n = 1; n <= 4; n++) {
      const cx = 30 + (n - 1) * 95, baseY = 58, side = n * 10, h = side * 0.866;
      svg += `<polygon points="${cx},${baseY - h} ${cx - side / 2},${baseY} ${cx + side / 2},${baseY}" fill="#cbd5e1" stroke="#0f172a" stroke-width="1.5"/>`;
      svg += `<text x="${cx}" y="${baseY + 14}" text-anchor="middle" font-size="11" font-weight="700">${n * n} tấm</text>`;
    }
    svg += '<text x="10" y="92" font-size="13" font-weight="800" fill="#047857">Dãy 2 (Hình vuông cạnh 1 cm): 1 tấm → 4 tấm → 9 tấm → 16 tấm ...</text>';
    for (let n = 1; n <= 4; n++) {
      const s = n * 6;
      svg += `<rect x="${22 + (n - 1) * 95}" y="98" width="${s}" height="${s}" fill="#bfdbfe" stroke="#0f172a" stroke-width="1.5"/>`;
    }
    return svg + '</svg>';
  }

  function renderMatchGrids() {
    let svg = '<svg width="350" height="120" viewBox="0 0 350 120">';
    const s = 22;
    [1, 2, 3].forEach((n, idx) => {
      const ox = [20, 95, 200][idx], oy = 90 - n * s;
      for (let r = 0; r <= n; r++) for (let c = 0; c < n; c++) svg += `<line x1="${ox + c * s + 2}" y1="${oy + r * s}" x2="${ox + (c + 1) * s - 2}" y2="${oy + r * s}" stroke="#b45309" stroke-width="3" stroke-linecap="round"/>`;
      for (let c = 0; c <= n; c++) for (let r = 0; r < n; r++) svg += `<line x1="${ox + c * s}" y1="${oy + r * s + 2}" x2="${ox + c * s}" y2="${oy + (r + 1) * s - 2}" stroke="#b45309" stroke-width="3" stroke-linecap="round"/>`;
      svg += `<text x="${ox + (n * s) / 2}" y="112" text-anchor="middle" font-size="13" font-weight="800">Hình ${n}</text>`;
    });
    return svg + '</svg>';
  }

  function draw7Seg(digit, ox, oy, w, h, color = '#0f172a') {
    const map = {
      0: [1,1,1,0,1,1,1], 1: [0,0,1,0,0,1,0], 2: [1,0,1,1,1,0,1], 3: [1,0,1,1,0,1,1], 4: [0,1,1,1,0,1,0],
      5: [1,1,0,1,0,1,1], 6: [1,1,0,1,1,1,1], 7: [1,0,1,0,0,1,0], 8: [1,1,1,1,1,1,1], 9: [1,1,1,1,0,1,1]
    };
    const m = map[digit], hh = h / 2;
    const coords = [
      [ox + 3, oy, ox + w - 3, oy], [ox, oy + 3, ox, oy + hh - 3], [ox + w, oy + 3, ox + w, oy + hh - 3],
      [ox + 3, oy + hh, ox + w - 3, oy + hh], [ox, oy + hh + 3, ox, oy + h - 3], [ox + w, oy + hh + 3, ox + w, oy + h - 3],
      [ox + 3, oy + h, ox + w - 3, oy + h]
    ];
    return m.map((on, i) => on ? `<line x1="${coords[i][0]}" y1="${coords[i][1]}" x2="${coords[i][2]}" y2="${coords[i][3]}" stroke="${color}" stroke-width="3.2" stroke-linecap="round"/>` : '').join('');
  }

  function renderMatchDigits() {
    let svg = '<svg width="390" height="64" viewBox="0 0 390 64">';
    for (let d = 0; d <= 9; d++) svg += draw7Seg(d, 10 + d * 38, 8, 22, 42, '#b45309');
    return svg + '</svg>';
  }

  function renderMatch2021() {
    let svg = '<svg width="390" height="126" viewBox="0 0 390 126">';
    [2, 0, 2, 1].forEach((d, i) => { svg += draw7Seg(d, 85 + i * 56, 8, 34, 58, '#1d4ed8'); });
    for (let d = 0; d <= 9; d++) svg += draw7Seg(d, 14 + d * 37, 82, 20, 34, '#64748b');
    return svg + '</svg>';
  }

  function renderLedGrid() {
    const patterns = {
      0:'111101101101111', 1:'001001001001001', 2:'111001111100111', 3:'111001111001111', 4:'101101111001001',
      5:'111100111001111', 6:'111100111101111', 7:'111001001001001', 8:'111101111101111', 9:'111101111001111'
    };
    const draw5x3 = (dig, ox, oy, cell) => {
      let out = '';
      for (let r = 0; r < 5; r++) for (let c = 0; c < 3; c++) {
        out += `<rect x="${ox + c * cell}" y="${oy + r * cell}" width="${cell}" height="${cell}" fill="${patterns[dig][r * 3 + c] === '1' ? '#334155' : '#ffffff'}" stroke="#64748b" stroke-width="1"/>`;
      }
      return out;
    };
    let svg = '<svg width="390" height="135" viewBox="0 0 390 135"><rect x="105" y="4" width="175" height="72" fill="#f8fafc" stroke="#0f172a" stroke-width="1.5"/>';
    [6, 2, 1].forEach((d, i) => { svg += draw5x3(d, 120 + i * 52, 10, 12); });
    svg += '<text x="10" y="96" font-size="11" font-weight="700" fill="#475569">Bảng mẫu các số 0 đến 9:</text>';
    for (let d = 0; d <= 9; d++) svg += draw5x3(d, 10 + d * 38, 102, 7.5);
    return svg + '</svg>';
  }

  function renderWhiteTriangles() {
    let svg = '<svg width="410" height="82" viewBox="0 0 410 82">';
    const s = 44;
    [1, 2, 3].forEach((n, idx) => {
      const ox = [15, 95, 220][idx];
      for (let k = 0; k < n; k++) {
        const x = ox + k * s;
        svg += `<rect x="${x}" y="8" width="${s}" height="${s}" fill="#fff" stroke="#0f172a" stroke-width="1.6"/>`;
        svg += `<polygon points="${x + s / 2},8 ${x + s},${8 + s / 2} ${x + s / 2},${8 + s} ${x},${8 + s / 2}" fill="#475569" stroke="#0f172a" stroke-width="1.2"/>`;
      }
      svg += `<text x="${ox + (n * s) / 2}" y="72" text-anchor="middle" font-size="12" font-weight="800">Hình ${n}</text>`;
    });
    return svg + '</svg>';
  }

  function renderHexCircles() {
    const dirs = [[1, 0], [0, 1], [-1, 1], [-1, 0], [0, -1], [1, -1]];
    const drawHexFig = (rings, cx, cy, cr) => {
      let out = `<circle cx="${cx}" cy="${cy}" r="${cr}" fill="#64748b" stroke="#0f172a" stroke-width="1"/>`;
      for (let k = 1; k < rings; k++) {
        let q = 0, r = -k;
        for (let d = 0; d < 6; d++) for (let step = 0; step < k; step++) {
          const px = cx + cr * 2 * (q + r / 2), py = cy + cr * 1.732 * r;
          out += `<circle cx="${px}" cy="${py}" r="${cr}" fill="${k === 1 || step === 0 ? '#64748b' : '#ffffff'}" stroke="#0f172a" stroke-width="1"/>`;
          q += dirs[d][0]; r += dirs[d][1];
        }
      }
      return out;
    };
    return '<svg width="390" height="126" viewBox="0 0 390 126">' +
      drawHexFig(1, 25, 60, 7) + '<text x="25" y="118" text-anchor="middle" font-size="11" font-weight="700">Hình 1</text>' +
      drawHexFig(2, 85, 60, 7) + '<text x="85" y="118" text-anchor="middle" font-size="11" font-weight="700">Hình 2</text>' +
      drawHexFig(3, 175, 60, 7) + '<text x="175" y="118" text-anchor="middle" font-size="11" font-weight="700">Hình 3</text>' +
      drawHexFig(4, 305, 60, 7) + '<text x="305" y="118" text-anchor="middle" font-size="11" font-weight="700">Hình 4</text></svg>';
  }

  function renderChecker20() {
    const step = 42, ox = 25, oy = 25;
    let svg = `<svg width="245" height="225" viewBox="0 0 245 225"><rect x="${ox + step - 17}" y="${oy + step - 17}" width="${step * 2 + 34}" height="${step * 2 + 34}" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2.5" rx="6"/>`;
    for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) {
      const x = ox + c * step, y = oy + r * step;
      svg += `<circle cx="${x}" cy="${y}" r="14" fill="#fff" stroke="#334155" stroke-width="1.8"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="15" font-weight="800">${(r + c) % 2 === 0 ? 2 : 0}</text>`;
    }
    return svg + `<text x="${ox + 4 * step + 22}" y="${oy + 5}" font-size="18" font-weight="800" fill="#475569">•••</text></svg>`;
  }

  function renderSnakeOddTable() {
    const rows = [
      ['', '1', '3', '5', '7', '9'],
      ['19', '17', '15', '13', '11', ''],
      ['', '21', '23', '25', '27', '29'],
      ['39', '37', '35', '33', '31', ''],
      ['', '...', '...', '...', '...', '...']
    ];
    let html = '<table class="zig-table"><tr><th>Cột 1</th><th>Cột 2</th><th>Cột 3</th><th>Cột 4</th><th>Cột 5</th><th>Cột 6</th></tr>';
    rows.forEach((r) => { html += '<tr>' + r.map((v) => `<td>${escHtml(v)}</td>`).join('') + '</tr>'; });
    return html + '</table>';
  }

  function renderRibbon16() {
    const icons = { H: '❤️', C: '⚫', S: '⬛', K: '🚗' };
    const ex = ['H', 'C', 'S', 'K', 'C', 'K', 'K', 'S', 'C'];
    const main = ['H', 'C', 'H', 'K', 'S', 'C', 'H', 'S', 'K', 'S', 'C', 'K', 'H', 'S', 'C', 'K'];
    const mkRow = (arr) => '<div style="display:flex; flex-wrap:wrap; gap:2px; justify-content:center;">' +
      arr.map((k, idx) => `<div style="width:28px; height:32px; border:1.5px solid #334155; background:#fff; display:flex; align-items:center; justify-content:center; font-size:15px;" title="Ô ${idx + 1}">${icons[k]}</div>`).join('') + '</div>';
    return `<div style="display:flex; flex-direction:column; gap:10px; align-items:center;">
      <div><div style="font-size:12px; font-weight:700; color:#475569; margin-bottom:4px; text-align:center;">Ví dụ:</div>${mkRow(ex)}</div>
      <div><div style="font-size:12px; font-weight:700; color:#1d4ed8; margin-bottom:4px; text-align:center;">Đoạn ruy băng cần đổi 3 biểu tượng:</div>${mkRow(main)}</div>
    </div>`;
  }

  function renderBwBoxes() {
    const boxes = ['B', 'B', 'B', 'B', 'W', 'W', 'W', 'W'];
    return '<div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">' +
      boxes.map((b, i) => `<div style="width:38px; height:38px; border:2px solid #0f172a; border-radius:6px; background:${b === 'B' ? '#1e293b' : '#ffffff'}; color:${b === 'B' ? '#fff' : '#0f172a'}; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:13px;">${i + 1}</div>`).join('') + '</div>';
  }

  // ==================== EXPORT GLOBAL API ====================
  window.VTMOApp = {
    init: () => renderHome(),
    renderHome,
    openMang,
    openTheory,
    openAnalytics,
    resetStats,
    startCustom,
    startSpeedSprint,
    startMockExam,
    startWeakDrill,
    exitQuiz,
    closeExitModal,
    discardAndExit,
    savePartialAndFinish,
    toggleKeywords,
    toggleStrategy,
    unlockNextStep,
    submitCurrent,
    skipCurrent,
    nextQuestion,
    toggleFlag,
    finishExam,
    retrySession,
    setSessionStars,
    setSessionFocus,
    saveParentEval,
    copySessionReport,
    deleteSession,
    copySyncCode,
    importSyncCode,
    downloadBackupJson,
    importBackupFile,
    saveGistConfig,
    cloudPush,
    cloudPull,
    toggleScratchPanel,
    switchScratchTab,
    setPen,
    undoPad,
    clearPad,
    cyclePadBg
  };

  document.addEventListener('DOMContentLoaded', () => {
    window.VTMOApp.init();
  });
})();
