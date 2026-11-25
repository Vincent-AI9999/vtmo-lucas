window.VTMO_QUESTIONS_M3 = [
  // ============ DẠNG 1: DÃY SỐ CÁCH ĐỀU – TRUY HỒI ============
  {
    id: 'm3_c1', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 1', subtopic: 'Dạng 1: Dãy số & Truy hồi',
    type: 'mc', targetSec: 45,
    text: 'Cho dãy số bên dưới. Tìm giá trị phù hợp cho X và Y.\n6; 0; 13; 12; 20; 24; 27; 36; X; Y; 41; 60',
    keywords: ['6; 0; 13; 12; 20; 24', 'X; Y'],
    strategy: 'Dãy đan xen 2 dãy riêng! Nhìn các số ở vị trí lẻ (6, 13, 20, 27...) và vị trí chẵn (0, 12, 24, 36...).',
    steps: [
      'Vị trí lẻ: 6, 13, 20, 27, X, 41 — mỗi lần cộng thêm 7 ⟹ X = 27 + 7 = 34.',
      'Vị trí chẵn: 0, 12, 24, 36, Y, 60 — mỗi lần cộng thêm 12 ⟹ Y = 36 + 12 = 48.'
    ],
    options: ['34, 46', '36, 48', '34, 52', '34, 48', '30, 50'], answer: 3,
    explanation: 'Tách thành 2 dãy xen kẽ:\n• Vị trí lẻ (+7): 6, 13, 20, 27, 34, 41 ⟹ X = 34.\n• Vị trí chẵn (+12): 0, 12, 24, 36, 48, 60 ⟹ Y = 48.\nĐáp án: D. 34, 48'
  },
  {
    id: 'm3_c2', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 2', subtopic: 'Dạng 1: Dãy số & Truy hồi',
    type: 'mc', targetSec: 35,
    text: 'Tính giá trị của B − A biết rằng:\nA = 1 + 4 + 7 + 10 + 13 + 16 + 19 + 22 + 25 + 28 + 31\nB = 2 + 5 + 8 + 11 + 14 + 17 + 20 + 23 + 26 + 29 + 32',
    keywords: ['B − A', '1 + 4 + ... + 31', '2 + 5 + ... + 32'],
    strategy: 'KHÔNG tính tổng A và B! So sánh từng số hạng tương ứng: mỗi số của B đều lớn hơn số của A đúng 1 đơn vị!',
    steps: [
      '2−1=1, 5−4=1, 8−7=1, ..., 32−31=1.',
      'Đếm xem có bao nhiêu số hạng: (31 − 1) : 3 + 1 = 11 số hạng ⟹ B − A = 11 × 1.'
    ],
    options: ['10', '11', '12', '30', '31'], answer: 1,
    explanation: 'Mỗi số hạng của B hơn số hạng tương ứng của A là 1 đơn vị.\nSố số hạng = (31 − 1) : 3 + 1 = 11 ⟹ B − A = 11.\nĐáp án: B. 11'
  },
  {
    id: 'm3_c3', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 3', subtopic: 'Dạng 1: Dãy số & Truy hồi',
    type: 'open', targetSec: 90,
    text: 'Cho các số 8, 13, 18, 23, 28 là “một dãy số cách đều” gồm 5 số, trong đó số đầu tiên là 8, số cuối cùng là 28, khoảng cách giữa hai số liên tiếp là 5. Phong viết “một dãy số cách đều”, trong đó số đầu tiên là 11 và số cuối cùng là 46. Phong nhớ rằng mình đã viết số 32 và không viết số 24 trong dãy số đó. Hỏi tổng các số mà Phong đã viết là bao nhiêu?',
    keywords: ['số đầu tiên là 11', 'cuối cùng là 46', 'có số 32', 'không viết số 24', 'tổng'],
    strategy: 'Tìm ước chung của (32 − 11 = 21) và (46 − 32 = 14) để ra khoảng cách d, rồi loại d tạo ra số 24!',
    steps: [
      'Hiệu 32 − 11 = 21; Hiệu 46 − 32 = 14 ⟹ Khoảng cách d chia hết cả 21 và 14 ⟹ d = 1 hoặc d = 7.',
      'Nếu d = 1 thì dãy chứa tất cả số từ 11 đến 46 (có số 24, loại!). Vậy d = 7.',
      'Dãy là: 11, 18, 25, 32, 39, 46 (6 số). Tổng = (11 + 46) × 6 : 2.'
    ],
    answer: '171',
    explanation: '• 32 − 11 = 21; 46 − 32 = 14 ⟹ khoảng cách d ∈ {1, 7}.\n• Loại d = 1 vì có số 24 ⟹ chọn d = 7.\n• Dãy có (46 − 11) : 7 + 1 = 6 số.\n• Tổng = (11 + 46) × 6 : 2 = 171.\nĐáp số: 171'
  },
  {
    id: 'm3_c4', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 4', subtopic: 'Dạng 1: Dãy số & Truy hồi',
    type: 'open', targetSec: 90,
    text: 'Tiên dự định xếp hạc giấy làm quà sinh nhật tặng mẹ vào ngày 10/01/2023. Mỗi ngày Tiên sẽ xếp số hạc giấy bằng tổng số hạc giấy đã xếp của 2 ngày trước đó. Hôm qua Tiên đã xếp được 60 con hạc giấy, hôm nay (ngày 08/01/2023) Tiên xếp được 96 con hạc giấy. Hỏi tính đến ngày sinh nhật mẹ, Tiên đã xếp được tất cả bao nhiêu con hạc giấy (tính luôn số hạc giấy Tiên đã xếp vào ngày 10/01/2023)? Biết rằng ngày đầu tiên Tiên xếp được 24 con hạc giấy.',
    keywords: ['tổng 2 ngày trước đó', 'hôm qua 60', 'ngày 08/01 96', 'ngày 10/01', 'ngày đầu tiên 24'],
    strategy: 'Tìm ngược lại xem trước ngày 07/01 Tiên đã xếp những ngày nào cho đến khi chạm mốc ngày đầu tiên 24 con, rồi tính xuôi đến 10/01!',
    steps: [
      'Đi ngược: Ngày 08/01 = 96; Ngày 07/01 = 60 ⟹ Ngày 06/01 = 96 − 60 = 36 ⟹ Ngày 05/01 = 60 − 36 = 24 (đúng ngày đầu tiên!).',
      'Đi xuôi: Ngày 09/01 = 60 + 96 = 156; Ngày 10/01 = 96 + 156 = 252.',
      'Cộng tất cả 6 ngày: 24 + 36 + 60 + 96 + 156 + 252.'
    ],
    answer: '624',
    explanation: 'Số hạc giấy từng ngày là:\n• Ngày 05/01 (ngày đầu): 24\n• Ngày 06/01: 36\n• Ngày 07/01: 60\n• Ngày 08/01: 96\n• Ngày 09/01: 60 + 96 = 156\n• Ngày 10/01: 96 + 156 = 252\nTổng = 24 + 36 + 60 + 96 + 156 + 252 = 624 (con).\nĐáp số: 624'
  },
  {
    id: 'm3_c5', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 5', subtopic: 'Dạng 1: Dãy số & Truy hồi',
    type: 'open', targetSec: 60,
    text: 'Cho dãy số Fibonacci như sau:\n1, 1, 2, 3, 5, 8, 13, 21, 34, ...\nTrong 100 số hạng đầu tiên của dãy Fibonacci, hỏi có bao nhiêu số lẻ?',
    keywords: ['Fibonacci', '100 số hạng đầu tiên', 'bao nhiêu số lẻ'],
    strategy: 'Không tính 100 số! Viết tính Lẻ/Chẵn của vài số đầu để tìm chu kỳ lặp!',
    steps: [
      'Tính chất: Lẻ, Lẻ, Chẵn; Lẻ, Lẻ, Chẵn; Lẻ, Lẻ, Chẵn... Chu kỳ là 3 (mỗi chu kỳ có 2 số lẻ và 1 số chẵn).',
      'Chia 100 : 3 = 33 (dư 1).',
      'Số số lẻ = 33 × 2 + 1 (số dư đầu tiên của chu kỳ mới là số lẻ!).'
    ],
    answer: '67',
    explanation: 'Quy luật: (Lẻ, Lẻ, Chẵn) lặp lại theo chu kỳ 3.\n100 : 3 = 33 chu kỳ dư 1 số (là số lẻ).\nSố số lẻ = 33 × 2 + 1 = 67.\nĐáp số: 67'
  },

  // ============ DẠNG 2: CHU KỲ CHỮ SỐ – BẢNG SỐ – VÒNG TRÒN ============
  {
    id: 'm3_c6', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 6', subtopic: 'Dạng 2: Chu kỳ & Bảng số',
    type: 'mc', targetSec: 45,
    text: 'Người ta xếp các số tự nhiên từ 1 đến 2017 vào các cột A, B, C, D, E, F, G như hình sau: Hỏi số 2017 sẽ nằm ở cột nào?',
    diagram: {
      type: 'zigzag',
      cols: ['A','B','C','D','E','F','G'],
      rows: [
        [1,2,3,4,5,6,7],
        [14,13,12,11,10,9,8],
        [15,16,17,18,19,20,21],
        [28,27,26,25,24,23,22]
      ]
    },
    keywords: ['A, B, C, D, E, F, G', '2017', 'cột nào'],
    strategy: 'Một lượt đi và về gồm 2 hàng = 14 số ⟹ chu kỳ lặp là 14! Chia 2017 cho 14.',
    steps: [
      'Hàng 1 đi từ A→G (7 số), hàng 2 quay lại từ G→A (7 số) ⟹ chu kỳ = 14.',
      '2017 : 14 = 144 (dư 1).',
      'Dư 1 ứng với vị trí số 1, tức là cột A!'
    ],
    options: ['B', 'D', 'E', 'G', 'A'], answer: 4,
    explanation: 'Chu kỳ zích zắc gồm 2 hàng = 14 số.\n2017 : 14 = 144 (dư 1) ⟹ cùng cột với số 1, là cột A.\nĐáp án: E. A'
  },
  {
    id: 'm3_c7', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 7', subtopic: 'Dạng 2: Chu kỳ & Bảng số',
    type: 'open', targetSec: 60,
    text: 'Một nhóm có 80 bạn xếp thành một hàng và bắt đầu điểm danh, lượt thứ nhất các bạn lần lượt đếm theo các chữ cái V, T, M, O, V, T, M, O cho đến hết, lượt thứ hai các bạn điểm danh bằng các số lần lượt từ 1 đến 80. Hỏi trong hàng ấy có bao nhiêu bạn trong lượt thứ nhất đã nói chữ O và trong lượt thứ hai đã nói một số chia hết cho 3?',
    keywords: ['80 bạn', 'V, T, M, O', 'nói chữ O', 'chia hết cho 3'],
    strategy: 'Nói chữ O ⟹ số thứ tự chia hết cho 4! Kết hợp chia hết cho 3 ⟹ chia hết cho 12!',
    steps: [
      'Chu kỳ V, T, M, O có 4 chữ ⟹ bạn nói chữ O có số thứ tự chia hết cho 4 (4, 8, 12, ...).',
      'Số chia hết cho cả 4 và 3 là số chia hết cho 12 (12, 24, 36, ...).',
      'Từ 1 đến 80 có bao nhiêu số chia hết cho 12? Lấy 80 : 12 lấy phần nguyên!'
    ],
    answer: '6',
    explanation: 'Bạn nói chữ O có vị trí chia hết cho 4; thêm điều kiện chia hết cho 3 ⟹ vị trí là bội của 12.\nTừ 1 đến 80 có: 12, 24, 36, 48, 60, 72 (80 : 12 = 6 dư 8).\nVậy có 6 bạn.\nĐáp số: 6'
  },
  {
    id: 'm3_c8', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 8', subtopic: 'Dạng 2: Chu kỳ & Bảng số',
    type: 'mc', targetSec: 45,
    text: 'Trong một trò chơi, người chơi sẽ sử dụng quân cờ của mình xuất phát từ vị trí A và sẽ di chuyển vào các ô được xếp thành một vòng tròn như hình minh hoạ bên dưới.\n• Lần thứ nhất di chuyển 1 ô từ vị trí A sang vị trí B;\n• Lần thứ hai di chuyển 2 ô từ vị trí B sang vị trí C;\n• Lần thứ ba di chuyển 3 ô từ vị trí C sang vị trí D;\n• ...\nSau 15 lần đi như vậy thì quân cờ đã đi được đúng 1 vòng của trò chơi (lúc này quân cờ ở vị trí xuất phát A). Hỏi vòng tròn của trò chơi này có tất cả bao nhiêu ô?',
    diagram: { type: 'circleGame' },
    keywords: ['15 lần đi', 'đúng 1 vòng', '1 + 2 + 3 + ... + 15'],
    strategy: 'Tổng số ô của 1 vòng tròn chính là tổng số bước đi sau 15 lần!',
    steps: [
      'Số ô đi được = 1 + 2 + 3 + ... + 15.',
      'Tính nhanh: (1 + 15) × 15 : 2 = 16 × 15 : 2 = 8 × 15.'
    ],
    options: ['100', '120', '121', '130', '131'], answer: 1,
    explanation: 'Số ô trên vòng tròn = 1 + 2 + 3 + ... + 15 = (1 + 15) × 15 : 2 = 120 (ô).\nĐáp án: B. 120'
  },
  {
    id: 'm3_c9', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 9', subtopic: 'Dạng 2: Chu kỳ & Bảng số',
    type: 'mc', targetSec: 40,
    text: 'Pi viết liên tục cụm từ TOANTITAN thành dãy chữ sau:\nTOANTITANTOANTITANTOANTITAN...\nHỏi chữ cái thứ 2014 là chữ gì?',
    keywords: ['TOANTITAN', 'chữ cái thứ 2014'],
    strategy: 'Đếm số chữ trong từ TOANTITAN (= 9 chữ) rồi chia 2014 cho 9 lấy số dư!',
    steps: [
      'Cụm TOANTITAN gồm 9 chữ cái: T(1), O(2), A(3), N(4), T(5), I(6), T(7), A(8), N(9).',
      '2014 : 9 = 223 (dư 7) ⟹ chữ cái thứ 7 trong cụm là chữ T!'
    ],
    options: ['T', 'I', 'A', 'N', 'O'], answer: 0,
    explanation: 'Chu kỳ 9 chữ cái. 2014 : 9 = 223 dư 7.\nChữ thứ 7 trong TOANTITAN là T.\nĐáp án: A. T'
  },
  {
    id: 'm3_c10', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 10', subtopic: 'Dạng 2: Chu kỳ & Bảng số',
    type: 'mc', targetSec: 60,
    text: 'Cho dãy ký tự theo quy luật bên dưới, hỏi ký tự thứ 202 là gì?\nV, T, M, O, O, V, T, M, M, O, V, T, T, M, O, V, V, T, M, O, ...',
    keywords: ['V, T, M, O, O, V, T, M, M, O', 'ký tự thứ 202'],
    strategy: 'Chia dãy thành từng nhóm 5 chữ cái! Nhìn chữ bị nhân đôi chạy ngược từ O → M → T → V → chu kỳ dài 20!',
    steps: [
      'Nhóm 1: V,T,M,O,O (gấp đôi O). Nhóm 2: V,T,M,M,O (gấp đôi M). Nhóm 3: V,T,T,M,O. Nhóm 4: V,V,T,M,O.',
      'Sau 4 nhóm (20 chữ cái) quy luật quay lại từ đầu! Vậy chu kỳ = 20.',
      '202 : 20 = 10 (dư 2) ⟹ ký tự thứ 2 là T.'
    ],
    options: ['V', 'T', 'M', 'O', '2'], answer: 1,
    explanation: 'Chu kỳ 20 ký tự gồm 4 nhóm 5 chữ: (VTMOO)(VTMMO)(VTTMO)(VVTMO).\n202 : 20 = 10 dư 2 ⟹ ký tự thứ 2 là T.\nĐáp án: B. T'
  },

  // ============ DẠNG 3: DÃY HÌNH – QUE DIÊM – TĂNG TRƯỞNG ============
  {
    id: 'm3_c12', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 12', subtopic: 'Dạng 3: Dãy hình & Que diêm',
    type: 'open', targetSec: 120,
    text: 'An điền các số theo quy luật bên dưới. Hỏi hình tròn màu xám thứ 100 An sẽ điền số nào?',
    diagram: { type: 'spiralGrey' },
    keywords: ['hình tròn màu xám thứ 100', '1, 2, 3, 5, 7, 10, 13, 17, 21, 26'],
    strategy: 'Liệt kê các số trong hình tròn xám: 1, 2, 3, 5, 7, 10, 13, 17, 21, 26... rồi nhìn khoảng cách tăng thêm (+1,+1,+2,+2,+3,+3...)!',
    steps: [
      'Dãy các hình tròn xám: 1, 2, 3, 5, 7, 10, 13, 17, 21, 26...',
      'Khoảng cách giữa các số liên tiếp là: +1, +1, +2, +2, +3, +3, +4, +4, +5, ... (cặp 2 bước bằng nhau!).',
      'Đến hình tròn xám thứ 100 cần cộng 99 bước: hai lần (1 + 2 + ... + 49) và cộng thêm 50: 1 + 2×(49×50:2) + 50 = 1 + 2450 + 50.'
    ],
    answer: '2501',
    explanation: 'Các số trong hình tròn xám: 1, 2, 3, 5, 7, 10, 13, 17, 21, 26, ...\nHiệu liên tiếp là: 1, 1, 2, 2, 3, 3, 4, 4, ..., 49, 49, 50 (gồm 99 bước).\nSố thứ 100 = 1 + 2 × (1 + 2 + ... + 49) + 50 = 1 + 49 × 50 + 50 = 1 + 50 × 50 = 2501.\nĐáp số: 2501'
  },
  {
    id: 'm3_c13', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 13', subtopic: 'Dạng 3: Dãy hình & Que diêm',
    type: 'mc', targetSec: 45,
    text: 'Chọn hình phù hợp điền vào dấu chấm hỏi (?).',
    diagram: { type: 'nestedShapes' },
    keywords: ['hình bên trong', 'hình bên ngoài', '?'],
    strategy: 'Hình BÊN TRONG của ô đứng trước trở thành hình BÊN NGOÀI của ô ngay sau nó!',
    steps: [
      'Ô 1: ngoài Tròn, trong Vuông ⟹ Ô 2: ngoài Vuông, trong Tam giác.',
      'Ô 3: ngoài Tam giác, trong Tròn ⟹ Ô 4: ngoài Tròn, trong Ngũ giác.',
      'Vậy Ô 5 (?) phải có ngoài Ngũ giác (từ trong của Ô 4) và trong Tam giác (để khớp ngoài Tam giác của Ô 6)!'
    ],
    options: [
      'Ngũ giác bên ngoài, Tam giác bên trong',
      'Ngũ giác bên ngoài, Hình vuông bên trong',
      'Hình tròn bên ngoài, Tam giác bên trong',
      'Ngũ giác bên ngoài, Hình tròn bên trong',
      'Tam giác bên ngoài, Hình vuông bên trong'
    ], answer: 0,
    explanation: 'Quy luật: hình bên trong của hình thứ k là hình bên ngoài của hình thứ k+1.\n• Ô 4 có hình bên trong là Ngũ giác ⟹ Ô 5 có bên ngoài là Ngũ giác.\n• Ô 6 có bên ngoài là Tam giác ⟹ Ô 5 có bên trong là Tam giác.\nĐáp án: A'
  },
  {
    id: 'm3_c14', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 14', subtopic: 'Dạng 3: Dãy hình & Que diêm',
    type: 'mc', targetSec: 40,
    text: 'Long xếp 10 viên bi đen thành một vòng tròn. Sau đó giữa hai viên bi đen, Long đặt một viên bi trắng. Cuối cùng giữa viên bi đen và bi trắng, Long đặt một viên bi xanh. Hỏi có tất cả bao nhiêu viên bi xanh trên vòng tròn?',
    keywords: ['10 viên bi đen', 'vòng tròn', 'giữa hai bi đen đặt 1 bi trắng', 'giữa đen và trắng đặt 1 bi xanh'],
    strategy: 'Trên vòng tròn có 10 bi đen thì có 10 khoảng trống; sau khi đặt 10 bi trắng thành 20 viên xen kẽ, giữa chúng có 20 khoảng trống!',
    steps: [
      '10 viên bi đen xếp vòng tròn tạo ra 10 khoảng trống ⟹ đặt được 10 viên bi trắng.',
      'Lúc này trên vòng tròn có 10 đen + 10 trắng = 20 viên xen kẽ nhau ⟹ có đúng 20 khoảng giữa 1 đen và 1 trắng ⟹ 20 viên bi xanh!'
    ],
    options: ['10', '20', '12', '18', '22'], answer: 1,
    explanation: '10 bi đen ⟹ 10 bi trắng ⟹ 20 khoảng giữa bi đen và bi trắng ⟹ có 20 viên bi xanh.\nĐáp án: B. 20'
  },
  {
    id: 'm3_c15', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 15', subtopic: 'Dạng 3: Dãy hình & Que diêm',
    type: 'mc', targetSec: 40,
    text: 'Người ta dùng các tấm bìa ô vuông màu xám để tạo thành dãy hình có quy luật như bên dưới. Hỏi hình thứ 100 cần sử dụng bao nhiêu tấm bìa?',
    diagram: { type: 'xSquares' },
    keywords: ['hình thứ 100', 'bao nhiêu tấm bìa'],
    strategy: 'Đếm số ô ở 4 hình đầu: 1, 3, 5, 7, 9... mỗi hình tiếp theo tăng 2 ô!',
    steps: [
      'Hình 1: 1 ô; Hình 2: 3 ô; Hình 3: 5 ô; Hình 4: 7 ô; Hình 5: 9 ô.',
      'Công thức: Hình thứ n có 1 + 2 × (n − 1) tấm bìa.',
      'Với n = 100: 1 + 2 × 99 = 199.'
    ],
    options: ['99', '203', '197', '199', '201'], answer: 3,
    explanation: 'Số tấm bìa ở hình n là 1 + 2 × (n − 1).\nHình thứ 100 cần: 1 + 2 × 99 = 199 (tấm bìa).\nĐáp án: D. 199'
  },
  {
    id: 'm3_c16', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 16', subtopic: 'Dạng 3: Dãy hình & Que diêm',
    type: 'open', targetSec: 90,
    text: 'An dùng những tấm bìa hình tam giác nhỏ có 3 cạnh bằng nhau và bằng 1 cm để ghép lại thành dãy hình thứ nhất (1, 4, 9, 16 tấm bìa), Bình dùng những tấm bìa hình vuông nhỏ có cạnh là 1 cm để ghép lại thành dãy hình thứ hai (1, 4, 9, 16 tấm bìa).\nSau đó mỗi bạn chọn ra một hình từ dãy hình của mình sao cho tổng chu vi của 2 hình đó là 50 cm. Hỏi hình An đã chọn có thể có nhiều nhất bao nhiêu tấm bìa?',
    diagram: { type: 'triSquareSeq' },
    keywords: ['tam giác cạnh 1 cm', 'vuông cạnh 1 cm', 'tổng chu vi là 50 cm', 'nhiều nhất bao nhiêu tấm bìa'],
    strategy: 'Muốn hình tam giác của An nhiều tấm bìa nhất thì cạnh tam giác (a) phải lớn nhất ⟹ chu vi hình vuông (4b) nhỏ nhất sao cho (50 − 4b) chia hết cho 3!',
    steps: [
      'Tam giác lớn cạnh a có chu vi 3a và số tấm bìa là a × a. Hình vuông cạnh b có chu vi 4b.',
      'Ta cần 3a + 4b = 50. Thử b nhỏ nhất: b = 1 ⟹ 3a = 46 (không chia hết 3, loại!).',
      'Thử b = 2 ⟹ 3a = 50 − 8 = 42 ⟹ a = 14! Số tấm bìa = 14 × 14.'
    ],
    answer: '196',
    explanation: 'Gọi cạnh tam giác là a, cạnh hình vuông là b: 3a + 4b = 50.\nĐể a lớn nhất, chọn b nhỏ nhất:\n• b = 1 ⟹ 50 − 4 = 46 (không chia hết cho 3).\n• b = 2 ⟹ 50 − 8 = 42 ⟹ a = 42 : 3 = 14 (cm).\nSố tấm bìa nhiều nhất = 14 × 14 = 196.\nĐáp số: 196'
  },
  {
    id: 'm3_c17', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 17', subtopic: 'Dạng 3: Dãy hình & Que diêm',
    type: 'open', targetSec: 50,
    text: 'Cho quy luật dãy hình như bên dưới. Hỏi hình 4 cần bao nhiêu que diêm?',
    diagram: { type: 'matchGrids' },
    keywords: ['hình 4', 'bao nhiêu que diêm'],
    strategy: 'Đếm số que diêm ngang và dọc ở Hình 1 (1×1), Hình 2 (2×2), Hình 3 (3×3)!',
    steps: [
      'Hình 1 (lưới 1×1): 2 hàng ngang × 1 + 2 cột dọc × 1 = 4 que.',
      'Hình 2 (lưới 2×2): 3 hàng ngang × 2 + 3 cột dọc × 2 = 12 que. Hình 3 (lưới 3×3): 4×3 + 4×3 = 24 que.',
      'Hình 4 (lưới 4×4): có 5 hàng ngang (mỗi hàng 4 que) và 5 cột dọc (mỗi cột 4 que) = 2 × 5 × 4.'
    ],
    answer: '40',
    explanation: 'Hình n là lưới n × n nên có (n + 1) hàng ngang (mỗi hàng n que) và (n + 1) cột dọc (mỗi cột n que).\nSố que diêm Hình 4 = 2 × 4 × 5 = 40 (que).\nĐáp số: 40'
  },
  {
    id: 'm3_c18', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 18', subtopic: 'Dạng 3: Dãy hình & Que diêm',
    type: 'open', targetSec: 75,
    text: 'Minh dùng các que diêm để ghép lại các chữ số như hình vẽ bên dưới. Hỏi với 6 que diêm, Minh có bao nhiêu cách ghép thành số có hai chữ số (không cần thiết phải sử dụng hết 6 que diêm)?',
    diagram: { type: 'matchDigits' },
    keywords: ['6 que diêm', 'số có hai chữ số', 'không cần thiết phải sử dụng hết'],
    strategy: 'Đếm số que của từng chữ số 0..9 trước! Chỉ chọn cặp (a, b) có tổng que ≤ 6 (nhớ a ≠ 0!).',
    steps: [
      'Số que từng chữ số: 1 (2 que), 7 (3 que), 4 (4 que), các số 2, 3, 5 (5 que), còn 0, 6, 9 (6 que), 8 (7 que).',
      'Vì tổng que của 2 chữ số ≤ 6 và mỗi chữ số cần ít nhất 2 que, nên chữ số nào cũng chỉ có thể dùng ≤ 4 que (tức chỉ lấy từ {1, 7, 4})!',
      'Thử ghép từ {1(2), 7(3), 4(4)}: (2+2): 11; (2+3): 17, 71; (2+4): 14, 41; (3+3): 77. Có 6 số!'
    ],
    answer: '6',
    explanation: 'Các chữ số dùng ≤ 4 que là: 1 (2 que), 7 (3 que), 4 (4 que). Các chữ số khác cần ≥ 5 que nên ghép thêm chữ số khác sẽ vượt quá 6 que.\nCác số 2 chữ số có tổng que ≤ 6 là:\n• Dùng 4 que: 11\n• Dùng 5 que: 17, 71\n• Dùng 6 que: 14, 41, 77\nTổng cộng có 6 cách (6 số).\nĐáp số: 6'
  },
  {
    id: 'm3_c19', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 19', subtopic: 'Dạng 3: Dãy hình & Que diêm',
    type: 'open', targetSec: 90,
    text: 'Nhi sử dụng các que diêm để ghép lại thành số 2021 như hình sau. Sau đó, Nhi di chuyển 2 que diêm (không thêm, không xoá) để tạo thành số có 4 chữ số lớn nhất có thể. Hỏi số của Nhi tạo thành là số nào?',
    diagram: { type: 'match2021' },
    keywords: ['2021', 'di chuyển 2 que diêm', '4 chữ số lớn nhất'],
    strategy: 'Ưu tiên làm chữ số hàng NGHÌN (chữ số 2 đầu tiên) lớn nhất có thể!',
    steps: [
      'Chữ số 2 đầu tiên (5 que): chỉ cần di chuyển 2 que ở chính nó (que trên-phải → trên-trái, que dưới-trái → dưới-phải) để biến 2 thành 5!',
      'Thử xem có làm hàng nghìn thành 6, 8, 9 được không? Muốn lên 6 hoặc 9 cần lấy thêm 1 que từ 0, 2, hoặc 1, nhưng không số nào trong {0(6), 2(5), 1(2)} bỏ bớt 1 que mà vẫn thành chữ số hợp lệ!',
      'Nếu đổi 2 → 3 (1 que) và 0 → 9 (1 que) thì được 3921 < 5021. Vậy lớn nhất là 5021!'
    ],
    answer: '5021',
    explanation: 'Muốn số lớn nhất, ưu tiên tăng chữ số hàng nghìn (2).\n• Di chuyển 2 que ngay trong chữ số 2 đầu tiên để đổi 2 → 5, ta được 5021.\n• Không thể biến 2 thành 6, 7, 8, 9 vì không lấy thêm được 1 que từ {0, 2, 1} mà vẫn giữ hợp lệ.\n• Đổi 2→3 và 0→9 chỉ được 3921 < 5021.\nĐáp số: 5021'
  },
  {
    id: 'm3_c20', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 20', subtopic: 'Dạng 3: Dãy hình & Que diêm',
    type: 'open', targetSec: 75,
    text: 'Một bảng điện tử gồm 45 đèn led nhỏ (mỗi hình vuông nhỏ là 1 đèn led) dùng để hiển thị các số bằng cách bật/tắt các đèn led. Biết rằng lúc này bảng điện tử đang hiện số 621 như hình bên dưới, hỏi cần bật/tắt ít nhất bao nhiêu đèn led để bảng điện hiện số 208. Các số từ 0 đến 9 khi hiển thị trên bảng điện tử sẽ có dạng như hình bên dưới.',
    diagram: { type: 'ledGrid' },
    keywords: ['621', '208', 'bật/tắt ít nhất bao nhiêu đèn led'],
    strategy: 'So sánh từng ô 5×3 ở từng vị trí chữ số: 6 → 2, 2 → 0, và 1 → 8!',
    steps: [
      'Chữ số 1 (6 → 2): 6 và 2 giống nhau ở 3 thanh ngang (9 ô), chỉ khác ở cột trái/phải hàng 2 (tắt 1, bật 1 = 2 đèn) và hàng 4 (tắt 1 = 1 đèn) ⟹ đổi 3 đèn.',
      'Chữ số 2 (2 → 0): khác 3 đèn (bật ô trái hàng 2, tắt ô giữa hàng 3, bật ô phải hàng 4).',
      'Chữ số 3 (1 → 8): số 1 sáng 5 đèn (cột phải), số 8 sáng 13 đèn (cả 5 đèn cột phải đều có trong 8) ⟹ cần bật thêm 13 − 5 = 8 đèn! Cộng 3 + 3 + 8.'
    ],
    answer: '14',
    explanation: 'Số đèn led cần bật/tắt ở từng vị trí:\n• Từ 6 thành 2: thay đổi 3 đèn.\n• Từ 2 thành 0: thay đổi 3 đèn.\n• Từ 1 thành 8: bật thêm 13 − 5 = 8 đèn.\nTổng cộng = 3 + 3 + 8 = 14 (đèn).\nĐáp số: 14'
  },
  {
    id: 'm3_c21', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 21', subtopic: 'Dạng 3: Dãy hình & Que diêm',
    type: 'open', targetSec: 45,
    text: 'Cho dãy hình bên dưới. Hỏi hình thứ 6 có bao nhiêu hình tam giác màu trắng?',
    diagram: { type: 'whiteTriangles' },
    keywords: ['hình thứ 6', 'tam giác màu trắng'],
    strategy: 'Đếm số tam giác trắng ở Hình 1, Hình 2, Hình 3: mỗi bước thêm vào 1 ô thoi sẽ thêm 2 tam giác trắng!',
    steps: [
      'Hình 1: 4 tam giác trắng (4 góc).',
      'Hình 2: 6 tam giác trắng. Hình 3: 8 tam giác trắng.',
      'Hình thứ 6: 4 + 2 × (6 − 1) = 4 + 10.'
    ],
    answer: '14',
    explanation: 'Số tam giác trắng: Hình 1 có 4; Hình 2 có 6; Hình 3 có 8...\nHình thứ 6 có: 4 + 2 × 5 = 14 (hình tam giác trắng).\nĐáp số: 14'
  },
  {
    id: 'm3_c22', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 22', subtopic: 'Dạng 3: Dãy hình & Que diêm',
    type: 'open', targetSec: 110,
    text: 'Cho dãy hình bên dưới. Tính hiệu số giữa hình tròn trắng và hình tròn xám (chênh lệch số lượng hai loại) ở hình thứ 10.',
    diagram: { type: 'hexCircles' },
    keywords: ['hiệu số', 'hình tròn xám', 'hình tròn trắng', 'hình thứ 10'],
    strategy: 'Đếm riêng từng vòng lục giác từ tâm ra ngoài! Từ vòng thứ 3 (Hình 3) trở đi, chỉ 6 đỉnh lục giác màu xám, còn các cạnh màu trắng!',
    steps: [
      'Hình tròn XÁM: Hình 1 có 1; Hình 2 cộng thêm 6; mỗi hình sau cộng thêm đúng 6 ở 6 góc ⟹ Hình 10 có 1 + 9 × 6 = 55 hình tròn xám.',
      'Hình tròn TRẮNG: Hình 1, 2 có 0; Hình 3 thêm 6; Hình 4 thêm 12; Hình 5 thêm 18 ... đến Hình 10 thêm 48.',
      'Tổng hình tròn trắng ở Hình 10 = 6 × (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) = 6 × 36 = 216. Hiệu = 216 − 55.'
    ],
    answer: '161',
    explanation: 'Ở hình thứ 10:\n• Số hình tròn xám = 1 + 9 × 6 = 55.\n• Số hình tròn trắng = 6 × (1 + 2 + ... + 8) = 6 × 36 = 216.\nHiệu số (chênh lệch) = 216 − 55 = 161.\nĐáp số: 161'
  },
  {
    id: 'm3_c23', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 23', subtopic: 'Dạng 3: Dãy hình & Que diêm',
    type: 'open', targetSec: 60,
    text: 'Các số 2; 0; 2; 0 được viết theo quy luật như hình vẽ bên dưới. Gọi Sₙ là tổng tất cả các số trong hình vuông n × n mà An chọn. Ví dụ S₃ của hình vuông được chọn là 10. An chọn một hình vuông 6 × 6, tính S₆ của hình vuông này.',
    diagram: { type: 'checker20' },
    keywords: ['2; 0; 2; 0', 'hình vuông 6 × 6', 'tính S₆'],
    strategy: 'Nhìn kỹ bảng: các số 2 và 0 xếp XEN KẼ như bàn cờ vua! Cứ mỗi ô 2 × 2 bất kỳ luôn có hai số 2 và hai số 0 (tổng = 4)!',
    steps: [
      'Trong bảng 2; 0 xen kẽ như bàn cờ, mỗi khối 2 × 2 chứa đúng 2 số 2 và 2 số 0 ⟹ tổng mỗi khối 2 × 2 bằng 4.',
      'Hình vuông 6 × 6 chia gọn thành 3 × 3 = 9 khối vuông 2 × 2!',
      'Vậy S₆ = 9 × 4 = 36 (không phụ thuộc chọn 6 × 6 ở vị trí nào!).'
    ],
    answer: '36',
    explanation: 'Mỗi hình vuông 6 × 6 có 36 ô và gồm 9 khối 2 × 2. Trong mỗi khối 2 × 2 có đúng hai số 2 và hai số 0 nên tổng bằng 4.\nVậy S₆ = 9 × 4 = 36 (hoặc nửa số ô là số 2: 18 × 2 = 36).\nĐáp số: 36'
  },

  // ============ DẠNG 4: QUY LUẬT CHỮ SỐ – SỐ LIÊN TIẾP ============
  {
    id: 'm3_c24', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 24', subtopic: 'Dạng 4: Quy luật chữ số',
    type: 'mc', targetSec: 90,
    text: 'An viết các số vào bảng 6 cột theo quy luật các số lẻ tăng dần zích zắc như hình dưới đây. Nếu tiếp tục viết tiếp theo quy luật trên thì đáp án nào dưới đây là đúng?',
    diagram: { type: 'snakeOddTable' },
    keywords: ['1, 3, 5, 7, 9', '19, 17, 15, 13, 11', '6 cột'],
    strategy: 'Nhìn chữ số hàng ĐƠN VỊ và hàng CHỤC! Hàng chục chẵn (0, 2, 4...) đi từ trái sang phải (bỏ cột 1); hàng chục lẻ (1, 3, 5...) đi từ phải sang trái (bỏ cột 6)!',
    steps: [
      'Hàng có hàng chục CHẴN (ví dụ 141..149): đi từ trái sang phải ở các cột 2, 3, 4, 5, 6 (141 ở cột 2, 143 ở cột 3, 145 ở cột 4, 147 ở cột 5, 149 ở cột 6).',
      'Hàng có hàng chục LẺ (ví dụ 151..159): đi từ phải sang trái ở các cột 5, 4, 3, 2, 1 (151 ở cột 5, 153 ở cột 4...).',
      'Kiểm tra A: 143 ở cột 3 và ngay dưới ở cột 5 là 151 — KHỚP HOÀN TOÀN!'
    ],
    options: [
      'Hàng trên cột 3 là 143; hàng dưới cột 5 là 151',
      'Hàng trên cột 5 là 61; hàng dưới cột 3 là 73',
      'Hàng trên cột 1 là 129; hàng dưới cột 3 là 133',
      'Hàng trên cột 6 là 99; hàng dưới cột 4 là 103',
      'Hàng trên cột 3 là 113; hàng dưới cột 5 là 121'
    ], answer: 0,
    explanation: 'Các hàng có hàng chục chẵn đi từ trái sang phải (cột 2→6): hàng 14x có 141(c2), 143(c3), 145(c4), 147(c5), 149(c6).\nHàng ngay dưới (15x) đi từ phải sang trái (cột 5→1): 151 ở cột 5, 153(c4), 155(c3), 157(c2), 159(c1).\nVậy đáp án A hoàn toàn đúng.\nĐáp án: A'
  },
  {
    id: 'm3_c25', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 25', subtopic: 'Dạng 4: Quy luật chữ số',
    type: 'open', targetSec: 75,
    text: 'Cho A = 20242024…2024 là một số tự nhiên có 2024 chữ số. Hỏi cần xóa nhiều nhất bao nhiêu chữ số để được số mới có tổng các chữ số là 2028?',
    keywords: ['2024 chữ số', 'xóa nhiều nhất', 'tổng các chữ số là 2028'],
    strategy: 'Muốn XÓA nhiều nhất thì phải GIỮ LẠI ít chữ số nhất! Ưu tiên giữ toàn các chữ số lớn nhất (số 4)!',
    steps: [
      'A có 2024 : 4 = 506 cụm "2024", nên có đúng 506 chữ số 4.',
      'Nếu giữ hết 506 chữ số 4 thì tổng là 506 × 4 = 2024 (thiếu 2028 − 2024 = 4 đơn vị).',
      'Giữ thêm 2 chữ số 2 nữa (2 + 2 = 4) ⟹ tổng chữ số giữ lại ít nhất là 506 + 2 = 508 chữ số. Số chữ số xóa nhiều nhất = 2024 − 508.'
    ],
    answer: '1516',
    explanation: 'Số A có 2024 : 4 = 506 cụm 2024 (tức có 506 chữ số 4).\nĐể xóa nhiều nhất, giữ lại ít chữ số nhất:\n• Giữ toàn bộ 506 chữ số 4 → tổng 506 × 4 = 2024.\n• Giữ thêm 2 chữ số 2 → tổng 2028.\nTổng chữ số giữ lại = 506 + 2 = 508.\nSố chữ số xóa nhiều nhất = 2024 − 508 = 1516.\nĐáp số: 1516'
  },
  {
    id: 'm3_c26', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 26', subtopic: 'Dạng 4: Quy luật chữ số',
    type: 'mc', targetSec: 90,
    text: 'Nam viết tất cả các số có 4 chữ số thỏa mãn:\n(1) Tích chữ số hàng nghìn và hàng trăm bằng chữ số hàng chục;\n(2) Tích chữ số hàng trăm và hàng chục bằng chữ số hàng đơn vị.\nHỏi Nam đã viết được tất cả bao nhiêu số?',
    keywords: ['4 chữ số', 'nghìn × trăm = chục', 'trăm × chục = đơn vị'],
    strategy: 'Chia trường hợp theo chữ số hàng TRĂM (b = 0, 1, 2, 3...) để đếm siêu nhanh không bị sót!',
    steps: [
      'Gọi số là abcd (a ∈ {1..9}, a×b = c ≤ 9, b×c = d ≤ 9).',
      '• Nếu b = 0: c = 0, d = 0 ⟹ a ∈ {1..9}: có 9 số (1000, 2000, ..., 9000).',
      '• Nếu b = 1: c = a, d = a ⟹ a ∈ {1..9}: có 9 số (1111, 2222? Không, 1111, 2122, 3133, ..., 9199).\n• Nếu b = 2: c = 2a, d = 4a ≤ 9 ⟹ a ∈ {1, 2}: 2 số (1224, 2248).\n• Nếu b = 3: c = 3a, d = 9a ≤ 9 ⟹ a = 1: 1 số (1339). Với b ≥ 4 thì d = a×b² ≥ 16 > 9 (loại!). Cộng 9 + 9 + 2 + 1!'
    ],
    options: ['17', '19', '20', '18', '21'], answer: 4,
    explanation: 'Xét chữ số hàng trăm b (với a ≥ 1):\n• b = 0 ⟹ 9 số (1000..9000).\n• b = 1 ⟹ 9 số (1111, 2122, ..., 9199).\n• b = 2 ⟹ 4a ≤ 9 ⟹ 2 số (1224, 2248).\n• b = 3 ⟹ 9a ≤ 9 ⟹ 1 số (1339).\n• b ≥ 4 ⟹ không có.\nTổng = 9 + 9 + 2 + 1 = 21 (số).\nĐáp án: E. 21'
  },
  {
    id: 'm3_c27', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 27', subtopic: 'Dạng 4: Quy luật chữ số',
    type: 'open', targetSec: 75,
    text: 'Trong một chiếc hộp có 7 thẻ bài được đánh 7 số tự nhiên liên tiếp. An không nhìn vào hộp và lấy ra 3 thẻ bài có tổng là 24. Sau đó An bỏ lại 3 thẻ bài đó vào hộp, Bình lấy ra 3 thẻ bài có tổng là 34. Tính tổng của số lớn nhất và số nhỏ nhất trong hộp.',
    keywords: ['7 số tự nhiên liên tiếp', '3 thẻ tổng 24', '3 thẻ tổng 34', 'số lớn nhất + số nhỏ nhất'],
    strategy: 'Ước lượng chặn trên và chặn dưới của số nhỏ nhất x! Ba số nhỏ nhất có tổng ≤ 24; ba số lớn nhất có tổng ≥ 34!',
    steps: [
      'Gọi 7 số liên tiếp là x, x+1, x+2, x+3, x+4, x+5, x+6.',
      'Tổng 3 thẻ nhỏ nhất ≤ 24 ⟹ x + (x+1) + (x+2) ≤ 24 ⟹ 3x + 3 ≤ 24 ⟹ x ≤ 7.',
      'Tổng 3 thẻ lớn nhất ≥ 34 ⟹ (x+4) + (x+5) + (x+6) ≥ 34 ⟹ 3x + 15 ≥ 34 ⟹ 3x ≥ 19 ⟹ x ≥ 7! Vậy x = 7 (7 thẻ là 7..13). Tính 7 + 13!'
    ],
    answer: '20',
    explanation: 'Gọi 7 thẻ là x .. (x + 6).\n• Tổng 3 thẻ nhỏ nhất = 3x + 3 ≤ 24 ⟹ x ≤ 7.\n• Tổng 3 thẻ lớn nhất = 3x + 15 ≥ 34 ⟹ x ≥ 7.\nVậy x = 7, các thẻ là 7, 8, 9, 10, 11, 12, 13.\nTổng số lớn nhất và nhỏ nhất = 7 + 13 = 20.\nĐáp số: 20'
  },

  // ============ DẠNG 5 & 6: HOÁN ĐỔI & MÁY BIẾN ĐỔI ============
  {
    id: 'm3_c28', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 28', subtopic: 'Dạng 5: Hoán đổi & Quy luật lặp',
    type: 'mc', targetSec: 60,
    text: 'Hình ví dụ trên là một đoạn ruy băng gồm các biểu tượng khác nhau. Nếu thay hình tròn ở chính giữa thành chiếc xe thì An sẽ có 4 biểu tượng giống nhau liên tiếp.\nNếu An được phép thay đổi đúng 3 biểu tượng ở đoạn ruy băng dưới, hỏi số lượng biểu tượng giống nhau liên tiếp nhiều nhất mà An có thể tạo ra là bao nhiêu?',
    diagram: { type: 'ribbon16' },
    keywords: ['thay đổi đúng 3 biểu tượng', 'giống nhau liên tiếp nhiều nhất'],
    strategy: 'Tìm xem đoạn nào trên ruy băng có sẵn nhiều biểu tượng giống nhau đứng gần nhau nhất (chỉ xen kẽ tối đa 3 hình khác)!',
    steps: [
      'Nhìn các ô từ vị trí 5 đến 10: [■, ●, ♥, ■, 🚗, ■].',
      'Trong 6 ô liên tiếp này đã có sẵn 3 hình vuông (■) ở vị trí 5, 8, 10!',
      'Chỉ cần đổi 3 ô khác (●, ♥, 🚗 ở giữa) thành ■ ⟹ được 6 hình vuông liên tiếp! (Kiểm tra mọi đoạn dài 7 ô đều có tối đa 3 hình giống nhau nên không thể đạt 7).'
    ],
    options: ['4', '5', '6', '7', '8'], answer: 2,
    explanation: 'Xét đoạn từ ô 5 đến ô 10: ■, ●, ♥, ■, 🚗, ■.\nĐổi 3 biểu tượng (●, ♥, 🚗) thành ■ sẽ tạo được 6 hình vuông liên tiếp.\nKhông có đoạn 7 ô nào chứa 4 biểu tượng giống nhau nên nhiều nhất là 6.\nĐáp án: C. 6'
  },
  {
    id: 'm3_c29', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 29', subtopic: 'Dạng 5: Hoán đổi & Quy luật lặp',
    type: 'mc', targetSec: 50,
    text: 'Có 4 chiếc hộp màu đen và 4 chiếc hộp màu trắng ở trên mặt bàn theo thứ tự bên dưới (4 đen đứng trước, 4 trắng đứng sau). Mỗi lần An đảo vị trí của hai hộp nằm kề nhau. Hỏi cần ít nhất bao nhiêu lần đảo để An có thể sắp xếp các hộp màu đen và màu trắng xen kẽ nhau?',
    diagram: { type: 'bwBoxes' },
    keywords: ['4 hộp đen và 4 hộp trắng', 'đảo hai hộp nằm kề nhau', 'xen kẽ nhau', 'ít nhất'],
    strategy: 'Đánh số vị trí 1..8! Để xen kẽ từ (Đ Đ Đ Đ T T T T), đưa 4 hộp đen về vị trí (1, 3, 5, 7) rồi cộng số bước nhảy!',
    steps: [
      'Ban đầu 4 hộp đen ở vị trí: 1, 2, 3, 4.',
      'Để xếp xen kẽ (Đ T Đ T Đ T Đ T), 4 hộp đen cần tới vị trí: 1, 3, 5, 7.',
      'Số lần đảo tối thiểu = (1−1) + (3−2) + (5−3) + (7−4) = 0 + 1 + 2 + 3 = 6!'
    ],
    options: ['5', '4', '8', '7', '6'], answer: 4,
    explanation: 'Đưa 4 hộp đen từ vị trí (1, 2, 3, 4) đến (1, 3, 5, 7):\nSố lượt đổi chỗ kề nhau = 0 + 1 + 2 + 3 = 6 (lần).\nĐáp án: E. 6'
  },
  {
    id: 'm3_c30', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 30', subtopic: 'Dạng 6: Máy biến đổi lặp',
    type: 'open', targetSec: 75,
    text: 'Một chiếc máy tính sau khi nhập vào 3 số sẽ cho ra kết quả 3 số mới theo các quy tắc:\nBước 1: Tính tất cả tổng của hai số trong 3 số vừa nhận được.\nBước 2: Lấy mỗi số ở bước 1 nhân với 2 thì thu được kết quả mới.\nVí dụ nhập vào {1; 3; 4}, sau bước 1 thu được {4; 5; 7}, sau bước 2 thu được {8; 10; 14}.\nKhi An nhập vào {11; 4; 12} và thực hiện tính như thế 7 lần, hỏi hiệu giữa số lớn nhất và số nhỏ nhất mà An thu được là bao nhiêu?',
    keywords: ['nhập {11; 4; 12}', '7 lần', 'hiệu giữa số lớn nhất và số nhỏ nhất'],
    strategy: 'MẸO CỰC NHANH: Không cần tính hết 7 lần! Xem hiệu (Lớn nhất − Nhỏ nhất) thay đổi thế nào sau MỖI lần biến đổi!',
    steps: [
      'Với 3 số a ≤ b ≤ c: bước 1 ra (a+b), (a+c), (b+c). Hiệu lớn nhất − nhỏ nhất = (b+c) − (a+b) = c − a (không đổi ở bước 1)!',
      'Sang bước 2, nhân mỗi số với 2 ⟹ hiệu GẤP ĐÔI sau mỗi lần!',
      'Hiệu ban đầu = 12 − 4 = 8. Sau 7 lần: 8 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 8 × 128.'
    ],
    answer: '1024',
    explanation: 'Hiệu ban đầu = 12 − 4 = 8.\nSau mỗi lần thực hiện (gồm Bước 1 và Bước 2), hiệu giữa số lớn nhất và nhỏ nhất tăng gấp đôi.\nSau 7 lần: 8 × 2⁷ = 8 × 128 = 1024.\nĐáp số: 1024'
  },

  // ============ PHẦN II: CHIA HẾT – ƯỚC BỘI – SỐ DƯ ============
  {
    id: 'm3_c31', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 31', subtopic: 'Dạng 7: Chia hết & Tìm chữ số',
    type: 'mc', targetSec: 50,
    text: 'Từ các chữ số 2, 3, 5, 6, 7 có thể viết được bao nhiêu số có 2 chữ số khác nhau mà chia hết cho 3? (Ví dụ: 27 là số có 2 chữ số khác nhau mà chia hết cho 3.)',
    keywords: ['2, 3, 5, 6, 7', '2 chữ số khác nhau', 'chia hết cho 3'],
    strategy: 'Tìm tất cả cặp 2 chữ số khác nhau có tổng chia hết cho 3; mỗi cặp tạo được 2 số!',
    steps: [
      'Tìm các cặp từ {2, 3, 5, 6, 7} có tổng chia hết cho 3:',
      '• {2, 7} (tổng 9) → 27, 72\n• {3, 6} (tổng 9) → 36, 63\n• {5, 7} (tổng 12) → 57, 75.',
      'Tổng cộng có 3 cặp × 2 = 6 số.'
    ],
    options: ['3', '4', '5', '6', '8'], answer: 3,
    explanation: 'Các cặp có tổng chia hết 3: {2, 7}, {3, 6}, {5, 7}.\nMỗi cặp viết được 2 số: 27, 72, 36, 63, 57, 75 (6 số).\nĐáp án: D. 6'
  },
  {
    id: 'm3_c32', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 32', subtopic: 'Dạng 7: Chia hết & Tìm chữ số',
    type: 'mc', targetSec: 30,
    text: 'Nếu số 4 chữ số 11N2 chia hết cho 4 thì có bao nhiêu giá trị có thể của N?',
    keywords: ['11N2', 'chia hết cho 4', 'bao nhiêu giá trị của N'],
    strategy: 'Dấu hiệu chia hết cho 4: chỉ cần xét 2 chữ số cuối N2 chia hết cho 4!',
    steps: [
      'N2 chia hết cho 4 với N ∈ {0..9}.',
      'Thử: 12, 32, 52, 72, 92 đều chia hết cho 4! (5 giá trị lẻ).'
    ],
    options: ['1', '2', '3', '4', '5'], answer: 4,
    explanation: 'Để 11N2 chia hết cho 4 thì N2 phải chia hết cho 4.\nVậy N ∈ {1, 3, 5, 7, 9} — có 5 giá trị.\nĐáp án: E. 5'
  },
  {
    id: 'm3_c33', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 33', subtopic: 'Dạng 7: Chia hết & Tìm chữ số',
    type: 'mc', targetSec: 110,
    text: 'Các chữ cái khác nhau đại diện cho các chữ số khác nhau. Biết rằng TITAN là số có 5 chữ số chia hết cho 8. Tính T + I + T + A + N.',
    diagram: { type: 'cryptarithm', rows: ['  V T M O', '+ 2 0 2 4', ' T I T A N'], lineBeforeLast: true },
    keywords: ['TITAN', 'chia hết cho 8', 'T + I + T + A + N'],
    strategy: 'VTMO + 2024 ra số 5 chữ số ⟹ T = 1! Sau đó dùng điều kiện 1AN chia hết cho 8!',
    steps: [
      'T = 1. Hàng trăm: 1 + 0 + nhớ = 1 (nên hàng chục KHÔNG nhớ) hoặc = 1? Nếu có nhớ sang trăm thì 1 + 0 + 1 = 2 ≠ T, vậy hàng chục KHÔNG nhớ!',
      'Từ TAN = 1AN chia hết cho 8 và không nhớ ở hàng chục (M + 2 = A ≤ 9), có N = O + 4 hoặc O + 4 − 10 (nhớ 1).',
      'Kiểm tra các số 1AN chia hết 8 có A, N khác 0,1,2,4: 136, 160(trùng 0), 168, 176, 184(trùng 4)... Thử 176 (A=7, N=6): O+4=6 ⟹ O=2(trùng? Không, chữ cái khác nhau nên được trùng chữ số 2 của 2024? Nếu chữ cái khác 2024 thì V=8, I=0, M=5, O=2→ có A=7, N=6: 8152 + 2024 = 10176!). Tính 1+0+1+7+6.'
    ],
    options: ['13', '15', '16', '18', '20'], answer: 1,
    explanation: '• T = 1; V + 2 ≥ 10 ⟹ V = 8, I = 0 (hoặc V=9, I=1 trùng T).\n• Hàng trăm 1 + 0 = 1 nên hàng chục không nhớ.\n• 1AN chia hết 8 ⟹ thử A = 7, N = 6 (176 : 8 = 22), khi đó M = 5, O = 2 (8152 + 2024 = 10176, tất cả các chữ cái V=8, T=1, M=5, O=2, I=0, A=7, N=6 đều khác nhau!).\nT + I + T + A + N = 1 + 0 + 1 + 7 + 6 = 15.\nĐáp án: B. 15'
  },
  {
    id: 'm3_c34', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 34', subtopic: 'Dạng 7: Chia hết & Tìm chữ số',
    type: 'open', targetSec: 75,
    text: 'Một tòa nhà có 30 tầng được đánh số từ 1 đến 30. Trong đó các tầng 1, 2, 3 dùng làm trung tâm mua sắm. Từ tầng 4 đến tầng 30 mỗi tầng có 35 phòng được đánh số từ 01 đến 35. Nhà An ở tầng 16 và phòng 24. An nhận thấy là khi viết 1624 hoặc 2416 đều thu được số có 4 chữ số chia hết cho 4. Hỏi trong tòa nhà có bao nhiêu phòng có tính chất giống nhà An? (Phòng 412, 1208 viết ngược lại là 0812 là 2 phòng không thỏa mãn là số có 4 chữ số.)',
    keywords: ['tầng 4 đến 30', 'phòng 01 đến 35', 'số có 4 chữ số', 'chia hết cho 4'],
    strategy: 'Để ghép 2 số 2 chữ số đều tạo thành số 4 chữ số chia hết cho 4: cả số tầng VÀ số phòng đều phải ≥ 10 và chia hết cho 4!',
    steps: [
      'Số tầng từ 10 đến 30 chia hết cho 4 gồm: 12, 16, 20, 24, 28 (có 5 tầng).',
      'Số phòng từ 10 đến 35 chia hết cho 4 gồm: 12, 16, 20, 24, 28, 32 (có 6 phòng).',
      'Mỗi tầng kết hợp với mỗi phòng cho 1 căn thỏa mãn ⟹ 5 × 6.'
    ],
    answer: '30',
    explanation: '• Tầng ≥ 10 (≤ 30) chia hết 4: {12, 16, 20, 24, 28} → 5 tầng.\n• Phòng ≥ 10 (≤ 35) chia hết 4: {12, 16, 20, 24, 28, 32} → 6 phòng.\nTổng số phòng = 5 × 6 = 30 (phòng).\nĐáp số: 30'
  },
  {
    id: 'm3_c35', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 35', subtopic: 'Dạng 8: Ước, Bội & Chia đều',
    type: 'mc', targetSec: 30,
    text: 'Một túi kẹo có số kẹo bên trong có thể chia hết cho 3, 4, hoặc 5 đứa trẻ mà không dư viên nào. Hỏi số kẹo nhỏ nhất có thể bên trong túi kẹo này là bao nhiêu?',
    keywords: ['chia hết cho 3, 4, hoặc 5', 'nhỏ nhất'],
    strategy: 'Tìm bội chung nhỏ nhất của 3, 4, 5: lấy 3 × 4 × 5!',
    steps: [
      '3, 4, 5 đôi một nguyên tố cùng nhau.',
      'BCNN(3, 4, 5) = 3 × 4 × 5 = 60.'
    ],
    options: ['50', '48', '24', '30', '60'], answer: 4,
    explanation: 'Số nhỏ nhất khác 0 chia hết cho 3, 4, 5 là 3 × 4 × 5 = 60.\nĐáp án: E. 60'
  },
  {
    id: 'm3_c36', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 36', subtopic: 'Dạng 8: Ước, Bội & Chia đều',
    type: 'mc', targetSec: 45,
    text: 'Bà Châu có 24 chiếc bánh. Bà muốn gói vào nhiều hơn một cái túi. Hỏi bà có bao nhiêu cách để làm điều đó sao cho mỗi túi chứa số bánh giống nhau? (Chú ý: mỗi cái túi chứa nhiều hơn một cái bánh.)',
    keywords: ['24 chiếc bánh', 'nhiều hơn một cái túi', 'mỗi túi nhiều hơn một cái bánh'],
    strategy: 'Tìm tất cả các ước của 24 lớn hơn 1 và nhỏ hơn 24!',
    steps: [
      '24 = số túi × số bánh/túi. Vì số túi > 1 và số bánh/túi > 1 nên số túi là ước của 24 trong khoảng từ 2 đến 12.',
      'Các ước của 24 thỏa mãn: 2, 3, 4, 6, 8, 12 ⟹ đếm có 6 cách!'
    ],
    options: ['4', '6', '8', '5', '7'], answer: 1,
    explanation: 'Các cách chia (số túi × số bánh/túi): 2×12, 3×8, 4×6, 6×4, 8×3, 12×2 ⟹ 6 cách.\nĐáp án: B. 6'
  },
  {
    id: 'm3_c37', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 37', subtopic: 'Dạng 9: Phép chia có dư',
    type: 'mc', targetSec: 20,
    text: 'Số nào dưới đây không thể là số dư khi chia một số tự nhiên cho 94?',
    keywords: ['không thể là số dư', 'chia cho 94'],
    strategy: 'Số dư luôn phải NHỎ HƠN số chia (0 ≤ dư < 94)!',
    steps: [
      'Khi chia cho 94, số dư chỉ có thể từ 0 đến 93.',
      'Số 99 > 94 nên không thể là số dư!'
    ],
    options: ['0', '9', '19', '93', '99'], answer: 4,
    explanation: 'Số dư luôn nhỏ hơn số chia (94) nên 99 không thể là số dư.\nĐáp án: E. 99'
  },
  {
    id: 'm3_c38', mang: 'mang3', group: 'm3_all', source: 'Mảng 3 • Câu 38', subtopic: 'Dạng 9: Phép chia có dư',
    type: 'open', targetSec: 110,
    text: 'Nhà trường tổ chức hội trại cho học sinh khối lớp 4. Khi xếp mỗi hàng 12 người thì hàng cuối cùng có 11 học sinh. Khi xếp mỗi hàng 15 người thì hàng cuối cùng có 8 học sinh và số hàng ít hơn cách xếp trên 2 hàng. Hỏi có bao nhiêu học sinh tham gia hội trại?',
    keywords: ['hàng 12 dư 11', 'hàng 15 dư 8', 'ít hơn 2 hàng'],
    strategy: 'Giả sử bớt đi số học sinh dư hoặc lấy số hàng chênh lệch quy đổi! Hoặc dùng phần thiếu: hàng 12 thiếu 1 bạn, hàng 15 thiếu 7 bạn!',
    steps: [
      'Gọi số hàng khi xếp 15 người là k hàng (k−1 hàng đủ 15 người và hàng cuối có 8 người).',
      'Khi xếp 12 người sẽ có k + 2 hàng (k+1 hàng đủ 12 người và hàng cuối có 11 người).',
      'Ta có phương trình: 12 × (k + 1) + 11 = 15 × (k − 1) + 8 ⟹ 12k + 23 = 15k − 7 ⟹ 3k = 30 ⟹ k = 10 hàng! Tính 15 × 9 + 8.'
    ],
    answer: '143',
    explanation: 'Gọi số hàng khi xếp 15 người là k ⟹ số hàng khi xếp 12 người là k + 2.\nSố học sinh = 15 × (k − 1) + 8 = 12 × (k + 1) + 11.\n⟹ 15k − 7 = 12k + 23 ⟹ 3k = 30 ⟹ k = 10.\nSố học sinh = 15 × 9 + 8 = 143 (thử lại: 143 = 12 × 11 + 11, số hàng 12 người là 12 hàng, 15 người là 10 hàng, chênh 2 hàng!).\nĐáp số: 143'
  }
];
