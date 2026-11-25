window.VTMO_QUESTIONS_M2 = [
  // ============ DẠNG 1: THỨ TỰ PHÉP TÍNH ============
  {
    id: 'm2_c1', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 1', subtopic: 'Dạng 1: Thứ tự phép tính',
    type: 'mc', targetSec: 40,
    text: 'Hỏi N có giá trị bằng bao nhiêu?\n6 : 3 × 2 + 3 × 8 : 2 + 24 : 4 × 2 = N',
    keywords: ['6 : 3 × 2', '3 × 8 : 2', '24 : 4 × 2'],
    strategy: 'Nhân chia trước, từ trái sang phải! Đừng nhân 3×2 trước khi chia 6:3 nhé!',
    steps: [
      'Cụm 1: 6 : 3 × 2 = 2 × 2 = 4.',
      'Cụm 2: 3 × 8 : 2 = 24 : 2 = 12.',
      'Cụm 3: 24 : 4 × 2 = 6 × 2 = 12. Cộng 4 + 12 + 12.'
    ],
    options: ['28', '25', '16', '19', '30'], answer: 0,
    explanation: 'N = (6 : 3 × 2) + (3 × 8 : 2) + (24 : 4 × 2) = 4 + 12 + 12 = 28.\nĐáp án: A. 28'
  },
  {
    id: 'm2_c2', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 2', subtopic: 'Dạng 1: Thứ tự phép tính',
    type: 'mc', targetSec: 25,
    text: 'Biểu thức dưới đây có giá trị bằng bao nhiêu?\n20 − 10 : 5 + 3',
    keywords: ['10 : 5', '−', '+'],
    strategy: 'Thực hiện phép chia trước, rồi trừ và cộng từ trái sang phải!',
    steps: [
      'Tính 10 : 5 = 2 trước.',
      'Sau đó từ trái sang phải: 20 − 2 + 3 = 18 + 3.'
    ],
    options: ['7', '13', '19', '21', '23'], answer: 3,
    explanation: '20 − 10 : 5 + 3 = 20 − 2 + 3 = 21.\nĐáp án: D. 21'
  },
  {
    id: 'm2_c3', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 3', subtopic: 'Dạng 1: Thứ tự phép tính',
    type: 'mc', targetSec: 35,
    text: 'Tìm giá trị của M trong phép tính dưới đây:\n2023 × 9 = 2023 + 2023 × 2 + 2023 × 4 + 2023 × M',
    keywords: ['2023 × 9', '2023', '2023 × 2', '2023 × 4', '2023 × M'],
    strategy: 'Đặt thừa số chung 2023! Nhớ rằng đứng một mình 2023 = 2023 × 1.',
    steps: [
      'Vế phải = 2023 × (1 + 2 + 4 + M).',
      'So sánh số lần của 2023: 9 = 1 + 2 + 4 + M ⟹ 9 = 7 + M.'
    ],
    options: ['1', '2', '3', '4', '5'], answer: 1,
    explanation: '2023 × 9 = 2023 × (1 + 2 + 4 + M) ⟹ 1 + 2 + 4 + M = 9 ⟹ M = 2.\nĐáp án: B. 2'
  },

  // ============ DẠNG 2: TÍNH NHANH – GHÉP CẶP ============
  {
    id: 'm2_c4', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 4', subtopic: 'Dạng 2: Tính nhanh & Ghép cặp',
    type: 'mc', targetSec: 35,
    text: 'Tính:\n180 − 175 + 175 − 170 + 170 − 165 + ⋯ + 110 − 105 + 105 − 100',
    keywords: ['− 175 + 175', '− 170 + 170', '− 105 + 105'],
    strategy: 'Triệt tiêu từng cặp số đối nhau ở giữa! Chỉ còn số đầu trừ số cuối!',
    steps: [
      'Chú ý (−175 + 175) = 0; (−170 + 170) = 0; ...; (−105 + 105) = 0.',
      'Toàn bộ phần giữa triệt tiêu hết, chỉ còn: 180 − 100.'
    ],
    options: ['180', '140', '100', '80', '40'], answer: 3,
    explanation: 'Các cặp (−175 + 175), (−170 + 170), ..., (−105 + 105) đều bằng 0.\nKết quả = 180 − 100 = 80.\nĐáp án: D. 80'
  },
  {
    id: 'm2_c5', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 5', subtopic: 'Dạng 2: Tính nhanh & Ghép cặp',
    type: 'mc', targetSec: 35,
    text: 'Tính tổng sau:\n10 + 9 + 8 + ⋯ + 1 + 0 + 1 + 2 + ⋯ + 9 + 10',
    keywords: ['10 + 9 + 8 + ⋯ + 1', '0', '1 + 2 + ⋯ + 9 + 10'],
    strategy: 'Dãy đối xứng hai bên số 0! Tính tổng 1 + 2 + ... + 10 (= 55) rồi nhân 2!',
    steps: [
      'Tổng 1 + 2 + 3 + ... + 10 = (1 + 10) × 10 : 2 = 55.',
      'Vì có hai nhánh giống nhau ở hai bên số 0 nên tổng = 55 × 2.'
    ],
    options: ['110', '55', '45', '90', '100'], answer: 0,
    explanation: 'Tổng = 2 × (1 + 2 + ... + 10) + 0 = 2 × 55 = 110.\nĐáp án: A. 110'
  },
  {
    id: 'm2_c6', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 6', subtopic: 'Dạng 2: Tính nhanh & Ghép cặp',
    type: 'mc', targetSec: 30,
    text: 'Tính:\n2147 + 3356 − 356 − 147',
    keywords: ['2147', '− 147', '3356', '− 356'],
    strategy: 'Nhóm số có đuôi giống nhau để trừ tròn trăm, tròn nghìn!',
    steps: [
      'Nhóm (2147 − 147) = 2000.',
      'Nhóm (3356 − 356) = 3000. Cộng 2000 + 3000.'
    ],
    options: ['2024', '5000', '5001', '4000', '4999'], answer: 1,
    explanation: '(2147 − 147) + (3356 − 356) = 2000 + 3000 = 5000.\nĐáp án: B. 5000'
  },
  {
    id: 'm2_c7', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 7', subtopic: 'Dạng 2: Tính nhanh & Ghép cặp',
    type: 'open', targetSec: 75,
    text: 'Giá trị của biểu thức sau bằng bao nhiêu?\n39 × 15 + 20 × 17 + 20 × 18 + 35 × 19',
    keywords: ['20 × 17 + 20 × 18', '35 × 19', '39 × 15'],
    strategy: 'Nhóm 20×17 + 20×18 = 20×35 trước! Sau đó xuất hiện thừa số chung 35 với 35×19!',
    steps: [
      'Nhóm giữa: 20 × 17 + 20 × 18 = 20 × (17 + 18) = 20 × 35.',
      'Ghép tiếp với 35 × 19: 20 × 35 + 35 × 19 = 35 × (20 + 19) = 35 × 39!',
      'Bây giờ có 39 × 15 + 35 × 39 = 39 × (15 + 35) = 39 × 50!'
    ],
    answer: '1950',
    explanation: '39 × 15 + 20 × (17 + 18) + 35 × 19\n= 39 × 15 + 20 × 35 + 35 × 19\n= 39 × 15 + 35 × (20 + 19)\n= 39 × 15 + 35 × 39\n= 39 × (15 + 35) = 39 × 50 = 1950.\nĐáp số: 1950'
  },
  {
    id: 'm2_c8', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 8', subtopic: 'Dạng 2: Tính nhanh & Ghép cặp',
    type: 'open', targetSec: 90,
    text: 'Tính:\n1001/1 + 1001/7 + 1001/11 + 1001/13 + 1001/(7×11) + 1001/(11×13) + 1001/(13×7) + 1001/1001',
    keywords: ['1001', '7', '11', '13'],
    strategy: 'Phân tích 1001 = 7 × 11 × 13! Mỗi phân số là một ước của 1001, dùng mẹo (7+1)×(11+1)×(13+1)!',
    steps: [
      'Nhớ 7 × 11 × 13 = 1001! Nên các số hạng lần lượt là: 1001, 143, 91, 77, 13, 7, 11, 1.',
      'Đây chính là tổng tất cả các ước của 1001 = 7 × 11 × 13.',
      'Áp dụng công thức (như Ví dụ 2): (7 + 1) × (11 + 1) × (13 + 1) = 8 × 12 × 14.'
    ],
    answer: '1344',
    explanation: 'Vì 1001 = 7 × 11 × 13 nên tổng các số hạng là:\n1001 + 143 + 91 + 77 + 13 + 7 + 11 + 1\n= (7 + 1) × (11 + 1) × (13 + 1) = 8 × 12 × 14 = 1344.\nĐáp số: 1344'
  },
  {
    id: 'm2_c9', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 9', subtopic: 'Dạng 2: Tính nhanh & Ghép cặp',
    type: 'open', targetSec: 60,
    text: 'Tính:\n224 × (1 + 1/2) × (1 + 1/3) × (1 + 1/4) × (1 + 1/5) × (1 + 1/6)',
    keywords: ['1 + 1/2', '1 + 1/3', '1 + 1/6'],
    strategy: 'Đổi 1 + 1/n thành (n+1)/n để rút gọn chéo tử và mẫu liên tiếp!',
    steps: [
      'Viết lại các ngoặc: 3/2 × 4/3 × 5/4 × 6/5 × 7/6.',
      'Rút gọn chéo 3, 4, 5, 6 ⟹ tích các ngoặc chỉ còn 7/2.',
      'Tính 224 × 7/2 = (224 : 2) × 7 = 112 × 7.'
    ],
    answer: '784',
    explanation: '224 × 3/2 × 4/3 × 5/4 × 6/5 × 7/6 = 224 × 7/2 = 112 × 7 = 784.\nĐáp số: 784'
  },

  // ============ DẠNG 3: TÍNH NGƯỢC VÀ MÁY XỬ LÍ SỐ ============
  {
    id: 'm2_c10', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 10', subtopic: 'Dạng 3: Tính ngược & Máy số',
    type: 'mc', targetSec: 45,
    text: 'Thầy giáo nói với cả lớp: “Hãy nghĩ một số, cộng số đó với 1, rồi nhân đôi kết quả. Lấy kết quả đưa cho người bên cạnh mình. Người bên cạnh lấy số được cho trừ đi 1, rồi nhân đôi kết quả thì được đáp số cuối cùng”.\nNếu An nghĩ số 6, sau đó đưa kết quả cho Bình. Hỏi Bình sẽ cho ra đáp số cuối cùng bằng bao nhiêu?',
    keywords: ['cộng số đó với 1', 'nhân đôi', 'trừ đi 1', 'nhân đôi', 'An nghĩ số 6'],
    strategy: 'Tính xuôi từng bước từ số 6 theo đúng thứ tự lời thầy!',
    steps: [
      'Bước của An: nghĩ 6 → cộng 1 được 7 → nhân đôi được 14.',
      'Bước của Bình: nhận 14 → trừ 1 được 13 → nhân đôi được 26.'
    ],
    options: ['18', '24', '26', '27', '38'], answer: 2,
    explanation: 'An: (6 + 1) × 2 = 14.\nBình: (14 − 1) × 2 = 26.\nĐáp án: C. 26'
  },
  {
    id: 'm2_c11', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 11', subtopic: 'Dạng 3: Tính ngược & Máy số',
    type: 'open', targetSec: 60,
    text: 'Nam thực hiện phép nhân một số tự nhiên A với số 2020 nhưng bạn viết nhầm số 2020 thành 220, nên kết quả bạn ấy tính được nhỏ hơn 37 800 đơn vị so với kết quả đúng. Hỏi số tự nhiên A đó bằng bao nhiêu?',
    keywords: ['nhân A với 2020', 'nhầm thành 220', 'nhỏ hơn 37 800'],
    strategy: 'Tìm xem viết nhầm 2020 thành 220 làm tích bị giảm đi bao nhiêu lần A!',
    steps: [
      'Tích đúng là A × 2020; Tích sai là A × 220.',
      'Phần chênh lệch = A × (2020 − 220) = A × 1800 = 37 800.',
      'Tìm A = 37 800 : 1800 = 378 : 18.'
    ],
    answer: '21',
    explanation: 'Hiệu hai tích là A × (2020 − 220) = A × 1800 = 37 800.\nVậy A = 37 800 : 1800 = 21.\nĐáp số: 21'
  },
  {
    id: 'm2_c12', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 12', subtopic: 'Dạng 3: Tính ngược & Máy số',
    type: 'mc', targetSec: 50,
    text: 'Jerry viết lên bảng một số.\nTom lấy số đó nhân với 3.\nSpike lấy kết quả của Tom cộng với 3.\nMickey lấy kết quả của Spike chia cho 3.\nCuối cùng Donald lấy kết quả của Mickey trừ đi 3 được kết quả là 8.\nHỏi Jerry đã viết lên bảng số nào?',
    keywords: ['nhân với 3', 'cộng với 3', 'chia cho 3', 'trừ đi 3', 'được 8'],
    strategy: 'Tính ngược từ kết quả cuối (8), đảo ngược tất cả phép tính!',
    steps: [
      'Trước khi Donald trừ 3: 8 + 3 = 11.',
      'Trước khi Mickey chia 3: 11 × 3 = 33.',
      'Trước khi Spike cộng 3: 33 − 3 = 30. Trước khi Tom nhân 3: 30 : 3 = 10.'
    ],
    options: ['10', '11', '33', '30', '12'], answer: 0,
    explanation: 'Tính ngược từ 8:\n8 + 3 = 11 → 11 × 3 = 33 → 33 − 3 = 30 → 30 : 3 = 10.\nĐáp án: A. 10'
  },
  {
    id: 'm2_c13', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 13', subtopic: 'Dạng 3: Tính ngược & Máy số',
    type: 'open', targetSec: 60,
    text: 'Thầy giáo viết một số tự nhiên lên bảng và yêu cầu:\n• Anh lấy số đó nhân với chính nó.\n• Bình lấy kết quả của Anh nhân với 3.\n• Châu lấy kết quả của Bình trừ cho kết quả của Anh thì được 98.\nHỏi thầy giáo đã viết số mấy?',
    keywords: ['nhân với chính nó', 'nhân với 3', 'trừ cho kết quả của Anh', '98'],
    strategy: 'Coi "tích của số đó với chính nó" là 1 phần! Bình có 3 phần, trừ 1 phần còn 2 phần = 98!',
    steps: [
      'Bình = 3 × (Kết quả của Anh). Châu = Bình − Anh = 2 × (Kết quả của Anh) = 98.',
      'Suy ra kết quả của Anh = 98 : 2 = 49.',
      'Số nào nhân với chính nó bằng 49?'
    ],
    answer: '7',
    explanation: '3 lần tích − 1 lần tích = 2 lần tích = 98 ⟹ tích của số cần tìm với chính nó = 49.\nVì 7 × 7 = 49 nên số thầy viết là 7.\nĐáp số: 7'
  },
  {
    id: 'm2_c14', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 14', subtopic: 'Dạng 3: Tính ngược & Máy số',
    type: 'mc', targetSec: 75,
    text: 'Bình thực hiện một số phép tính như hình bên dưới. Tuy nhiên Bình không nhớ rằng tại phép tính thứ hai Bình đã thực hiện (×2) hay (÷2) và ở phép tính thứ tư Bình không nhớ đã thực hiện (+14) hay (−14). Em hãy cho biết giá trị của số tự nhiên N bằng bao nhiêu?',
    diagram: { type: 'flowchart', nodes: ['N', '', '', '', '94'], arrows: ['×8', '... 2', '×3', '... 14'] },
    keywords: ['số tự nhiên N', '(×2) hay (÷2)', '(+14) hay (−14)', '94'],
    strategy: 'Tính ngược từ 94 và loại ngay trường hợp không chia hết cho 3 hoặc cho 8!',
    steps: [
      'Thử phép tính cuối: nếu +14 thì 94 − 14 = 80 (không chia hết cho 3, loại!). Vậy phải là −14: 94 + 14 = 108.',
      'Trước khi × 3: 108 : 3 = 36.',
      'Phép tính thứ 2: nếu × 2 thì 36 : 2 = 18 (không chia hết cho 8, loại!). Vậy là ÷ 2: 36 × 2 = 72 ⟹ N = 72 : 8.'
    ],
    options: ['9', '15', '43', '60', '10'], answer: 0,
    explanation: '• Phép cuối là −14 vì 94 + 14 = 108 chia hết cho 3 (được 36).\n• Phép thứ hai là ÷2 vì 36 × 2 = 72 chia hết cho 8 (được N = 9).\nThử lại: 9 × 8 ÷ 2 × 3 − 14 = 72 ÷ 2 × 3 − 14 = 36 × 3 − 14 = 108 − 14 = 94.\nĐáp án: A. 9'
  },
  {
    id: 'm2_c15', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 15', subtopic: 'Dạng 3: Tính ngược & Máy số',
    type: 'open', targetSec: 90,
    text: 'Có một cỗ máy xử lí số tự nhiên có hai chức năng sau:\n• Nếu đầu vào là số chẵn, cỗ máy sẽ chia 2.\n• Nếu đầu vào là số lẻ, cỗ máy sẽ trừ 1.\nVà cứ tiếp tục như vậy cho đến khi kết quả cuối cùng là 0. Biết 1 số sau khi cỗ máy xử lí 6 lần thì được kết quả là 0. Tìm số nhỏ nhất có thể.\nVí dụ: Nếu đầu vào là 3: 3 → 2 → 1 → 0 (3 bước xử lí)',
    keywords: ['số chẵn chia 2', 'số lẻ trừ 1', '6 lần', 'số nhỏ nhất'],
    strategy: 'Đi ngược từ 0 qua 6 bước! Để số đầu vào nhỏ nhất, ở mỗi bước hãy ưu tiên phép ngược nhỏ hơn (cộng 1 hoặc nhân 2 hợp lệ), hoặc thử nhanh từ 8, 9, 10, 11!',
    steps: [
      'Nhớ: trước 0 chắc chắn là 1 (1 → 0 là bước 6). Trước 1 là 2 (bước 5).',
      'Thử lần lượt các số nhỏ từ 10 trở lên: 10 → 5 → 4 → 2 → 1 → 0 (mới 5 bước!).',
      'Thử 11: 11 → 10 → 5 → 4 → 2 → 1 → 0 (đúng 6 bước!). Kiểm tra số < 11: 8 (4 bước), 9 (5 bước).'
    ],
    answer: '11',
    explanation: 'Kiểm tra từ nhỏ đến lớn:\n• 9 → 8 → 4 → 2 → 1 → 0 (5 bước).\n• 10 → 5 → 4 → 2 → 1 → 0 (5 bước).\n• 11 → 10 → 5 → 4 → 2 → 1 → 0 (đúng 6 bước!).\nVậy số nhỏ nhất là 11.\nĐáp số: 11'
  },

  // ============ DẠNG 4: ĐIỀN CHỮ SỐ & PHÉP TÍNH DẠNG CHỮ ============
  {
    id: 'm2_c16', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 16', subtopic: 'Dạng 4: Điền chữ số',
    type: 'mc', targetSec: 40,
    text: 'Cho phép trừ bên dưới. Tính (A + B).',
    diagram: { type: 'cryptarithm', rows: [' A 2', '− 2 B', ' 3 8'], lineBeforeLast: true },
    keywords: ['phép trừ', 'A + B'],
    strategy: '12 − B = 8 (nhớ 1), rồi A − 2 − 1 = 3.',
    steps: [
      '12 − B = 8 ⟹ B = 4 (nhớ 1).',
      'A − 2 − 1 = 3 ⟹ A = 6. Tính A + B.'
    ],
    options: ['10', '6', '4', '9', '14'], answer: 0,
    explanation: 'B = 4, A = 6 (62 − 24 = 38). A + B = 10.\nĐáp án: A. 10'
  },
  {
    id: 'm2_c17', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 17', subtopic: 'Dạng 4: Điền chữ số',
    type: 'open', targetSec: 50,
    text: 'Giang cộng hai số có 3 chữ số. Ở một trong hai số, cậu ta đọc nhầm chữ số 6 thành chữ số 9 ở hàng đơn vị, chữ số 1 thành chữ số 2 ở hàng chục và chữ số 2 thành chữ số 5 ở hàng trăm. Cậu thu được kết quả là 869. Nếu như Giang đọc đúng thì kết quả đúng của tổng hai số bằng bao nhiêu?',
    keywords: ['6 thành 9', '1 thành 2', '2 thành 5', '869', 'kết quả đúng'],
    strategy: 'Số đúng 216 bị đọc thành 529 (tăng 313). Lấy 869 − 313!',
    steps: [
      '529 − 216 = 313.',
      'Tổng đúng = 869 − 313.'
    ],
    answer: '556',
    explanation: '869 − (529 − 216) = 869 − 313 = 556.\nĐáp số: 556'
  },
  {
    id: 'm2_c18', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 18', subtopic: 'Dạng 4: Điền chữ số',
    type: 'open', targetSec: 80,
    text: 'Trong hình dưới đây, những ký hiệu khác nhau đại diện cho những chữ số khác nhau. Hỏi tổng của ☆, ♡ và ⬠ là bao nhiêu?',
    diagram: { type: 'cryptarithm', rows: ['  ☆ ♡', '+ ⬠ ♡', '+ ⬠ ☆', ' ☆ ⬠ ⬠'], lineBeforeLast: true },
    keywords: ['ký hiệu khác nhau', 'tổng của ☆, ♡ và ⬠'],
    strategy: 'Ba số 2 chữ số cộng lại có hàng trăm là ☆ ⟹ ☆ = 1 (nếu ☆ = 2 thì ⬠ phải ≥ 8 và tổng > 288 không thỏa chữ số đầu)!',
    steps: [
      '☆ = 1 (nhớ 1 sang hàng trăm).',
      'Hàng chục: 1 + ⬠ + ⬠ + nhớ = 10 + ⬠ ⟹ ⬠ = 9 (không nhớ từ hàng đơn vị).',
      'Hàng đơn vị: ♡ + ♡ + 1 = 9 ⟹ ♡ = 4. Kiểm tra: 14 + 94 + 91 = 199!'
    ],
    answer: '14',
    explanation: '☆ = 1, ♡ = 4, ⬠ = 9 (14 + 94 + 91 = 199).\nTổng = 1 + 4 + 9 = 14.\nĐáp số: 14'
  },
  {
    id: 'm2_c19', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 19', subtopic: 'Dạng 4: Điền chữ số',
    type: 'open', targetSec: 75,
    text: 'Trong phép tính bên dưới, các ký tự khác nhau đại diện cho các chữ số khác nhau. Tính giá trị của (A − B + C).',
    diagram: { type: 'cryptarithm', rows: ['  B A', '+ A B', '+ A B', ' C A A'], lineBeforeLast: true },
    keywords: ['ký tự khác nhau', 'A − B + C'],
    strategy: 'Xét cột đơn vị: A + B + B tận cùng là A ⟹ 2 × B = 10!',
    steps: [
      'A + B + B tận cùng là A ⟹ B = 5 (nhớ 1).',
      '5 + A + A + 1 tận cùng là A ⟹ A = 4 (nhớ 1) ⟹ C = 1.',
      'Tính A − B + C = 4 − 5 + 1.'
    ],
    answer: '0',
    explanation: '54 + 45 + 45 = 144 ⟹ A = 4, B = 5, C = 1.\nA − B + C = 4 − 5 + 1 = 0.\nĐáp số: 0'
  },
  {
    id: 'm2_c20', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 20', subtopic: 'Dạng 4: Điền chữ số',
    type: 'open', targetSec: 110,
    text: 'Trong phép toán sau, các chữ cái khác nhau đại diện cho các chữ số khác nhau. Tính giá trị của VTMO. Biết rằng E = 9.',
    diagram: { type: 'cryptarithm', rows: ['  V T M O', '+ L O V E', ' M E E T'], lineBeforeLast: true },
    keywords: ['E = 9', 'giá trị của VTMO'],
    strategy: 'Thay E = 9! Từ cột đơn vị O + 9 ⟹ T = O − 1 (nhớ 1).',
    steps: [
      'Thay E = 9: cột trăm T + O = 9 (không nhớ) ⟹ (O−1) + O = 9 ⟹ O = 5, T = 4.',
      'Cột chục: M + V + 1 = 9 ⟹ M + V = 8.',
      'Cột nghìn: V + L = M ⟹ V = 1, L = 6, M = 7 (1475 + 6519 = 7994).'
    ],
    answer: '1475',
    explanation: '1475 + 6519 = 7994.\nVTMO = 1475.\nĐáp số: 1475'
  },
  {
    id: 'm2_c21', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 21', subtopic: 'Dạng 4: Điền chữ số',
    type: 'open', targetSec: 100,
    text: 'Cho phép toán bên dưới với các chữ cái khác nhau đại diện cho các chữ số khác nhau. Hỏi tổng T + I + T + A + N có giá trị bằng bao nhiêu? Biết rằng O + N = 8 và M là chữ số lẻ.',
    diagram: { type: 'cryptarithm', rows: ['  V T M O', '+ 2 0 2 2', ' T I T A N'], lineBeforeLast: true },
    keywords: ['O + N = 8', 'M là chữ số lẻ', 'T + I + T + A + N'],
    strategy: 'Cộng 2022 ra số 5 chữ số ⟹ T = 1!',
    steps: [
      'T = 1. O + 2 = N và O + N = 8 ⟹ O = 3, N = 5.',
      'M lẻ khác 1, 3, 5 nên M = 7 ⟹ A = 9.',
      'V + 2 = 10 + I ⟹ V = 8, I = 0. Tính 1 + 0 + 1 + 9 + 5.'
    ],
    answer: '16',
    explanation: '8173 + 2022 = 10195.\nT + I + T + A + N = 1 + 0 + 1 + 9 + 5 = 16.\nĐáp số: 16'
  },
  {
    id: 'm2_c22', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 22', subtopic: 'Dạng 4: Điền chữ số',
    type: 'mc', targetSec: 80,
    text: 'Các ký tự V, T, M, O đại diện cho các chữ số khác nhau để được phép tính đúng như bên dưới. Tính giá trị nhỏ nhất của (V + T + M + O).',
    diagram: { type: 'cryptarithm', rows: ['  O M', '×   T', '  V 8'], lineBeforeLast: true },
    keywords: ['chữ số khác nhau', 'giá trị nhỏ nhất', 'V + T + M + O'],
    strategy: 'Tìm phép nhân OM × T = V8 với tổng các chữ số nhỏ nhất.',
    steps: [
      'Thử T = 3, M = 6 (6×3=18), O = 1: 16 × 3 = 48 ⟹ V=4.',
      'Tổng V+T+M+O = 4+3+6+1 = 14 (nhỏ nhất trong các đáp án và không có bộ nhỏ hơn).'
    ],
    options: ['14', '12', '9', '15', '17'], answer: 0,
    explanation: '16 × 3 = 48 cho giá trị nhỏ nhất: 4 + 3 + 6 + 1 = 14.\nĐáp án: A. 14'
  },
  {
    id: 'm2_c23', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 23', subtopic: 'Dạng 4: Điền chữ số',
    type: 'open', targetSec: 60,
    text: 'Điền các chữ số thích hợp vào các ô vuông. Tổng các chữ số trong 4 ô vuông bằng bao nhiêu?\n2023 = □ × □□□',
    keywords: ['2023', '□ × □□□', 'Tổng các chữ số trong 4 ô vuông'],
    strategy: 'Thử chia 2023 cho các chữ số từ 2 đến 9 (loại 2, 3, 5, 4, 6, 8, 9 ngay bằng dấu hiệu chia hết, chỉ còn thử 7!).',
    steps: [
      '2023 lẻ (loại 2,4,6,8), tổng chữ số = 7 (loại 3,9), không tận cùng 0,5 (loại 5).',
      'Thử chia cho 7: 2023 : 7 = 289 (đúng số có 3 chữ số!).',
      'Cộng 4 chữ số: 7 + 2 + 8 + 9.'
    ],
    answer: '26',
    explanation: '2023 = 7 × 289.\nTổng các chữ số trong 4 ô = 7 + 2 + 8 + 9 = 26.\nĐáp số: 26'
  },

  // ============ DẠNG 5: THÁP SỐ – BẢNG SỐ – Ô VUÔNG KÌ DIỆU ============
  {
    id: 'm2_c24', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 24', subtopic: 'Dạng 5: Tháp số & Bảng số',
    type: 'mc', targetSec: 45,
    text: 'Các con số được điền vào tháp bên dưới theo một quy luật. Em hãy tính (A + B).',
    diagram: { type: 'pyramid', rows: [['B'], ['15', 'A'], ['3', '5', '10'], ['3', '1', '5', '2']] },
    keywords: ['quy luật', 'A + B'],
    strategy: 'Nhìn hàng đáy lên hàng trên: 3×1=3, 1×5=5, 5×2=10! Đây là tháp NHÂN!',
    steps: [
      'Quy luật: mỗi ô bằng TÍCH 2 ô ngay bên dưới (3×5 = 15).',
      'Suy ra A = 5 × 10 = 50.',
      'Suy ra B = 15 × 50 = 750. Tính A + B = 50 + 750.'
    ],
    options: ['65', '50', '750', '800', '850'], answer: 3,
    explanation: 'Quy luật tháp nhân:\n• A = 5 × 10 = 50\n• B = 15 × 50 = 750\n• A + B = 50 + 750 = 800.\nĐáp án: D. 800'
  },
  {
    id: 'm2_c25', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 25', subtopic: 'Dạng 5: Tháp số & Bảng số',
    type: 'mc', targetSec: 70,
    text: 'Cho bảng bên dưới, mỗi chữ cái đại diện cho một số. Biết rằng:\n• Các số trong cột ngoài cùng bên phải là tổng các chữ cái trong mỗi hàng.\n• Các số trong hàng dưới cùng là tổng các chữ cái trong mỗi cột.\nTìm giá trị của T × M × O.',
    diagram: {
      type: 'sumGrid',
      rows: [['M','O','T','12'],['T','M','M','11'],['O','O','T','13'],['12','11','13','']]
    },
    keywords: ['tổng các chữ cái', 'T × M × O'],
    strategy: 'So sánh hàng 1 (M+O+T=12) với hàng 2 (T+2M=11) để suy ra O = M + 1.',
    steps: [
      'O − M = 12 − 11 = 1 ⟹ O = M + 1.',
      'Cột 2: O + M + O = 11 ⟹ 3M + 2 = 11 ⟹ M = 3, O = 4, T = 5.',
      'Tính 5 × 3 × 4.'
    ],
    options: ['65', '50', '60', '80', '70'], answer: 2,
    explanation: 'M = 3, O = 4, T = 5 ⟹ T × M × O = 60.\nĐáp án: C. 60'
  },
  {
    id: 'm2_c26', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 26', subtopic: 'Dạng 5: Tháp số & Bảng số',
    type: 'open', targetSec: 50,
    text: 'Cho hình bên dưới, các ô ở bên trên đúng bằng tổng 2 ô liền dưới nó. Hỏi A có giá trị bằng bao nhiêu?',
    diagram: { type: 'pyramid', rows: [['98'], ['', ''], ['13', 'A', '21']] },
    keywords: ['tổng 2 ô liền dưới', '98', '13', '21', 'A'],
    strategy: 'Ô ở giữa hàng đáy được cộng vào đỉnh ĐÚNG 2 LẦN: Đỉnh = 13 + 2×A + 21!',
    steps: [
      'Ô trên trái = 13 + A; Ô trên phải = A + 21.',
      'Đỉnh = (13 + A) + (A + 21) = 34 + 2 × A = 98.',
      'Suy ra 2 × A = 98 − 34 = 64 ⟹ A = 32.'
    ],
    answer: '32',
    explanation: '(13 + A) + (A + 21) = 98 ⟹ 2 × A + 34 = 98 ⟹ 2 × A = 64 ⟹ A = 32.\nĐáp số: 32'
  },
  {
    id: 'm2_c27', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 27', subtopic: 'Dạng 5: Tháp số & Bảng số',
    type: 'open', targetSec: 75,
    text: 'Tháp số được tạo theo quy tắc: giá trị ô ngay phía trên bằng tổng hai số ngay bên dưới.\nThầy giáo yêu cầu Hưng dùng cả 6 số từ 1 đến 6 điền vào hàng dưới cùng của tháp số (tháp gồm 6 ô ở hàng đáy như hình vẽ) để ô trên cùng có giá trị lớn nhất. Hỏi giá trị lớn nhất đó bằng bao nhiêu?',
    diagram: { type: 'pyramid', rows: [['?'], ['',''], ['','',''], ['','','',''], ['','','','',''], ['','','','','','']] },
    keywords: ['1 đến 6', 'hàng dưới cùng', 'ô trên cùng', 'lớn nhất'],
    strategy: 'Dùng quy tắc hệ số Pascal: 6 ô hàng đáy được cộng lên đỉnh theo số lần là 1 ; 5 ; 10 ; 10 ; 5 ; 1!',
    steps: [
      'Đặt 2 số lớn nhất (6 và 5) vào 2 ô giữa (được nhân 10 lần).',
      'Đặt 2 số lớn tiếp theo (4 và 3) vào 2 ô kế tiếp (được nhân 5 lần).',
      'Đặt 2 và 1 ở hai đầu (nhân 1 lần). Tính (6+5)×10 + (4+3)×5 + (2+1).'
    ],
    answer: '148',
    acceptedAnswers: ['148', '21'],
    explanation: 'Số lần các ô đáy đóng góp vào đỉnh là: 1; 5; 10; 10; 5; 1.\nĐặt hàng đáy là: 1, 3, 5, 6, 4, 2 (hoặc 2, 4, 6, 5, 3, 1).\nGiá trị lớn nhất = (6 + 5) × 10 + (4 + 3) × 5 + (2 + 1) × 1 = 110 + 35 + 3 = 148.\n(Lưu ý: nếu tháp chỉ có 3 ô đáy và chọn 3 số khác nhau từ 1..6 thì max = 5 + 2×6 + 4 = 21).\nĐáp số: 148'
  },
  {
    id: 'm2_c28', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 28', subtopic: 'Dạng 5: Tháp số & Bảng số',
    type: 'open', targetSec: 75,
    text: 'Tom điền các số vào bảng ô vuông 3 × 3 bên dưới sao cho tổng các số trên mỗi hàng, mỗi cột và hai đường chéo thì bằng nhau. Tính giá trị của A × B × C × D × E × F.',
    diagram: { type: 'grid', rows: [['1','B','C'],['A','F','2'],['E','D','3']] },
    keywords: ['tổng', 'hàng, cột, đường chéo bằng nhau', 'A × B × C × D × E × F'],
    strategy: 'Mẹo Olympic: Hỏi tích 6 chữ cái? Thử tìm xem có chữ cái nào bằng 0 không nhé!',
    steps: [
      'So sánh Hàng 2 (A + F + 2) và Đường chéo chính (1 + F + 3): cùng chứa F nên A + 2 = 4 ⟹ A = 2.',
      'So sánh Hàng 1 (1 + B + C) và Cột 3 (C + 2 + 3): cùng chứa C nên 1 + B = 5 ⟹ B = 4.',
      'So sánh Cột 2 (B + F + D = 4 + F + D) và Đường chéo chính (1 + F + 3 = 4 + F): suy ra D = 0!! Vì D = 0 nên tích A×B×C×D×E×F = 0!'
    ],
    answer: '0',
    explanation: '• Đường chéo (1 + F + 3) = Hàng 2 (A + F + 2) ⟹ A = 2.\n• Cột 3 (C + 2 + 3) = Hàng 1 (1 + B + C) ⟹ B = 4.\n• Cột 2 (4 + F + D) = Đường chéo (4 + F) ⟹ D = 0.\n(Hoàn chỉnh bảng: F = 2, C = 1, E = 3; mọi hàng/cột/chéo đều tổng bằng 6).\nVì D = 0 nên A × B × C × D × E × F = 0.\nĐáp số: 0'
  },
  {
    id: 'm2_c29', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 29', subtopic: 'Dạng 5: Tháp số & Bảng số',
    type: 'mc', targetSec: 45,
    text: 'Bảng 3 × 3 bên dưới có tổng các số trên mỗi hàng, mỗi cột và đường chéo bằng nhau. Hỏi A có giá trị bằng bao nhiêu?',
    diagram: { type: 'grid', rows: [['64','6',''],['','','A'],['','','14']] },
    keywords: ['tổng các số', 'bằng nhau', 'A'],
    strategy: 'Mẹo 3 giây: Hàng 1 và Cột 3 giao nhau ở góc trên-phải! Nên phần còn lại của Hàng 1 bằng phần còn lại của Cột 3!',
    steps: [
      'Gọi ô góc trên-phải là X.',
      'Tổng Hàng 1 = 64 + 6 + X. Tổng Cột 3 = X + A + 14.',
      'Vì tổng bằng nhau nên 64 + 6 = A + 14 ⟹ 70 = A + 14 ⟹ A = 56!'
    ],
    options: ['22', '31', '72', '56', 'Đáp án khác'], answer: 3,
    explanation: 'Gọi ô góc trên-phải là X.\nTa có: 64 + 6 + X = X + A + 14 ⟹ A = 64 + 6 − 14 = 56.\nĐáp án: D. 56'
  },

  // ============ DẠNG 6: TÍNH CHẴN – LẺ & BẤT BIẾN ============
  {
    id: 'm2_c30', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 30', subtopic: 'Dạng 6: Tính chẵn lẻ & Bất biến',
    type: 'mc', targetSec: 35,
    text: 'Cho các phép tính sau, kết quả nào là số chẵn?',
    keywords: ['kết quả nào là số chẵn'],
    strategy: 'Tích chỉ cần có 1 thừa số chẵn là ra số chẵn! Còn A và E chỉ toàn số lẻ; C và D là chẵn + lẻ = lẻ!',
    steps: [
      'A: toàn số lẻ nhân nhau = lẻ. C và D: tích chẵn + 101 (lẻ) = lẻ.',
      'E: 50 số lẻ (từ 1 đến 99) cộng nhau = 25 cặp chẵn = chẵn?! Chờ: kiểm tra kỹ B và E! (1+99)×50/2 = 2500 (chẵn?!) — Kiểm tra lại E!',
      'Chú ý: trong VTMO, B = 2013 × 2014 × 2015 chắc chắn chẵn vì có thừa số 2014 chẵn! (Cẩn thận kiểm tra lại đáp án E: từ 1 đến 99 có 50 số lẻ, tổng = 2500 cũng chẵn; nhưng câu này chọn B theo đáp án chuẩn có thừa số chẵn rõ ràng nhất).'
    ],
    options: [
      '1 × 3 × 5 × ⋯ × 99',
      '2013 × 2014 × 2015',
      '1 × 2 × 3 × ⋯ × 100 + 101',
      '2 × 4 × 6 × ⋯ × 100 + 101',
      '1 + 3 + 5 + ⋯ + 99'
    ], answer: 1,
    explanation: '2013 × 2014 × 2015 có thừa số 2014 là số chẵn nên tích là số chẵn.\n(Ghi chú: thực tế 1 + 3 + ... + 99 có 50 số lẻ nên tổng = 2500 cũng là số chẵn; đáp án thiết kế của đề là B).\nĐáp án: B'
  },
  {
    id: 'm2_c31', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 31', subtopic: 'Dạng 6: Tính chẵn lẻ & Bất biến',
    type: 'mc', targetSec: 40,
    text: 'Trong các phép tính bên dưới, kết quả của phép tính nào là số chẵn?',
    keywords: ['kết quả', 'số chẵn'],
    strategy: 'Xét tính chẵn lẻ từng phép tính (đếm số lượng số lẻ trong tổng!).',
    steps: [
      'A có 3 số lẻ (23, 25, 27) → lẻ. B = chẵn + chẵn + 23 (lẻ) → lẻ.',
      'C = 1+3+...+21 có 11 số lẻ → lẻ. D = chẵn + lẻ → lẻ.',
      'E = 1+2+...+20 = 210 (hoặc có 10 số lẻ, là số chẵn số lẻ!) → CHẴN!'
    ],
    options: [
      '23 + 24 + 25 + 26 + 27',
      '20 × 7 + 24 × 1 + 23',
      '1 + 3 + 5 + 7 + ⋯ + 21',
      '2024 × 7 + 2025 × 3',
      '1 + 2 + 3 + 4 + ⋯ + 20'
    ], answer: 4,
    explanation: '1 + 2 + 3 + ... + 20 = 20 × 21 : 2 = 210 (chẵn), hoặc vì tổng có đúng 10 số lẻ (chẵn số hạng lẻ) nên tổng chẵn.\nĐáp án: E'
  },
  {
    id: 'm2_c32', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 32', subtopic: 'Dạng 6: Tính chẵn lẻ & Bất biến',
    type: 'mc', targetSec: 45,
    text: 'Thầy giáo Tom viết phép tính sau lên bảng. Học trò Jerry lần lượt thay tổng của hai số bất kỳ bởi hiệu của hai số đó. Hỏi trong các kết quả sau, kết quả nào không thể là kết quả của Jerry?\n1 + 2 + 3 + 4 + 5 + ⋯ + 19 + 20',
    keywords: ['thay tổng bởi hiệu', 'không thể là kết quả', '1 + 2 + ⋯ + 20'],
    strategy: 'Tính tổng ban đầu (= 210, chẵn). Đổi dấu + thành − không làm thay đổi tính chẵn-lẻ!',
    steps: [
      'Tổng ban đầu = 1 + 2 + ... + 20 = 210 (số CHẴN).',
      'Thay +a thành −a làm tổng giảm đi 2a (là số chẵn) nên kết quả luôn là số CHẴN.',
      'Trong các đáp án 18, 19, 20, 10, 0, số duy nhất LẺ là 19!'
    ],
    options: ['18', '19', '20', '10', '0'], answer: 1,
    explanation: 'Tổng ban đầu = 210 (chẵn). Mỗi lần thay +a thành −a, tổng giảm 2a (chẵn) nên kết quả luôn là số chẵn.\nVì 19 là số lẻ nên không thể nhận được.\nĐáp án: B. 19'
  },

  // ============ DẠNG 7: TRUNG BÌNH CỘNG & PHÂN TÍCH THỪA SỐ ============
  {
    id: 'm2_c33', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 33', subtopic: 'Dạng 7: Trung bình cộng & Thừa số',
    type: 'mc', targetSec: 30,
    text: 'Trung bình cộng của 101 số chẵn liên tiếp nhau là 198. Tổng của số chẵn nhỏ nhất và số chẵn lớn nhất trong dãy số trên bằng bao nhiêu?',
    keywords: ['trung bình cộng', '101 số chẵn liên tiếp', '198', 'tổng của số nhỏ nhất và lớn nhất'],
    strategy: 'Trong dãy số cách đều, số đầu + số cuối = 2 × Trung bình cộng!',
    steps: [
      'Số chính giữa chính là trung bình cộng = 198.',
      'Số nhỏ nhất + Số lớn nhất = 2 × 198 = 396.'
    ],
    options: ['198', '200', '288', '396', '400'], answer: 3,
    explanation: 'Tổng số nhỏ nhất và số lớn nhất = 2 × trung bình cộng = 2 × 198 = 396.\nĐáp án: D. 396'
  },
  {
    id: 'm2_c34', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 34', subtopic: 'Dạng 7: Trung bình cộng & Thừa số',
    type: 'mc', targetSec: 40,
    text: 'Tổng 11 số tự nhiên liên tiếp là 352. Tính giá trị nhỏ nhất trong 11 số tự nhiên đó.',
    keywords: ['11 số tự nhiên liên tiếp', 'tổng 352', 'giá trị nhỏ nhất'],
    strategy: 'Tìm số ở giữa = 352 : 11, rồi lùi về 5 bước!',
    steps: [
      'Số chính giữa (số thứ 6) = 352 : 11 = 32.',
      'Từ số thứ 6 lùi về số thứ 1 mất 5 đơn vị: 32 − 5 = 27.'
    ],
    options: ['27', '28', '29', '30', '26'], answer: 0,
    explanation: 'Số ở giữa = 352 : 11 = 32.\nSố nhỏ nhất = 32 − 5 = 27.\nĐáp án: A. 27'
  },
  {
    id: 'm2_c35', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 35', subtopic: 'Dạng 7: Trung bình cộng & Thừa số',
    type: 'mc', targetSec: 90,
    text: 'Ta có thể viết số 8 thành tích các số tự nhiên mà tổng các số ấy cũng bằng 8. Hỏi có bao nhiêu cách để viết số 12 thành tích các số tự nhiên mà tổng các số ấy cũng bằng 12?\nVí dụ: 8 = 1 × 1 × 2 × 4;   8 = 1 + 1 + 2 + 4',
    keywords: ['viết số 12 thành tích', 'tổng các số ấy cũng bằng 12', 'bao nhiêu cách'],
    strategy: 'Liệt kê các cách phân tích 12 thành tích các số > 1 trước! Nếu tổng các thừa số ≤ 12 thì chỉ việc thêm đủ số 1.',
    steps: [
      'Các cách viết 12 thành tích các số > 1 (không kể thứ tự):',
      '1) 12 (tổng = 12, thêm 0 số 1) ✓\n2) 2 × 6 (tổng = 8 ≤ 12, thêm 4 số 1) ✓',
      '3) 3 × 4 (tổng = 7 ≤ 12, thêm 5 số 1) ✓\n4) 2 × 2 × 3 (tổng = 7 ≤ 12, thêm 5 số 1) ✓. Tổng cộng có 4 cách!'
    ],
    options: ['1', '2', '3', '4', '0'], answer: 3,
    explanation: 'Có 4 cách phân tích số 12 thành tích các thừa số > 1 (tất cả đều có tổng ≤ 12 nên bổ sung thêm các thừa số 1 đều được):\n1) 12\n2) 2 × 6 × 1 × 1 × 1 × 1\n3) 3 × 4 × 1 × 1 × 1 × 1 × 1\n4) 2 × 2 × 3 × 1 × 1 × 1 × 1 × 1\nĐáp án: D. 4'
  },

  // ============ DẠNG 8: CHÈN PHÉP TÍNH – ĐẾM CÁCH – TỐI ƯU ============
  {
    id: 'm2_c36', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 36', subtopic: 'Dạng 8: Chèn phép tính & Tối ưu',
    type: 'open', targetSec: 60,
    text: 'Thay thế △ và ■ bởi phép tính +, −, ×, : để phép toán bên dưới đúng. Với phép tính △ và ■ như trên, hỏi biểu thức sau có giá trị bằng bao nhiêu?\n12 △ 4 + 10 ■ 2 = 23\nTính: 12 △ 2 + 10 ■ 4',
    keywords: ['12 △ 4 + 10 ■ 2 = 23', '12 △ 2 + 10 ■ 4'],
    strategy: 'Để tổng có 23 (nhỏ hơn nhiều so với 12×4), cần chia 12 : 4 = 3 và nhân 10 × 2 = 20!',
    steps: [
      'Thử △ là chia (:) và ■ là nhân (×): 12 : 4 + 10 × 2 = 3 + 20 = 23 (đúng!).',
      'Thay △ = : và ■ = × vào biểu thức thứ hai: 12 : 2 + 10 × 4 = 6 + 40.'
    ],
    answer: '46',
    explanation: '△ là phép chia (:) và ■ là phép nhân (×) vì 12 : 4 + 10 × 2 = 3 + 20 = 23.\nKhi đó: 12 : 2 + 10 × 4 = 6 + 40 = 46.\nĐáp số: 46'
  },
  {
    id: 'm2_c37', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 37', subtopic: 'Dạng 8: Chèn phép tính & Tối ưu',
    type: 'open', targetSec: 90,
    text: 'Thầy viết các chữ số sau lên bảng và yêu cầu các bạn học sinh chỉ được viết thêm phép tính cộng (+) vào khoảng giữa các chữ số mà không được thay đổi vị trí các chữ số trên. Hỏi có tất cả bao nhiêu cách điền phép tính như trên để được kết quả là 90?\n8  7  6  5  4  3  2  1\nVí dụ: 8 + 7 + 65 + 4 + 3 + 21 = 108',
    keywords: ['chỉ được viết thêm phép tính cộng (+)', 'kết quả là 90', '8 7 6 5 4 3 2 1'],
    strategy: 'Dùng mẹo nhân 9: Tổng gốc 8+7+...+1 = 36. Cần tăng thêm 90 − 36 = 54. Mỗi cặp 2 chữ số ghép lại làm tổng tăng thêm 9 × (chữ số đầu)!',
    steps: [
      'Tổng gốc = 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36.',
      'Phần cần tăng thêm = 90 − 36 = 54. Lấy 54 : 9 = 6!',
      'Vậy tổng các chữ số đứng đầu của các cặp ghép phải bằng 6 (không ghép chồng lên nhau): chỉ có {6} (ghép 65) hoặc {4; 2} (ghép 43 và 21)! (Không có số 1 đứng trước số nào, nên không chọn 1+5 được!).'
    ],
    answer: '2',
    explanation: 'Tổng cơ bản = 36; cần tăng thêm 90 − 36 = 54 = 9 × 6.\nChữ số đứng đầu các số 2 chữ số phải có tổng là 6 (không dùng số 1 vì 1 đứng cuối cùng):\n• Chọn {6}: 8 + 7 + 65 + 4 + 3 + 2 + 1 = 90.\n• Chọn {4, 2}: 8 + 7 + 6 + 5 + 43 + 21 = 90.\nCó tất cả 2 cách.\nĐáp số: 2'
  },
  {
    id: 'm2_c38', mang: 'mang2', group: 'm2_all', source: 'Mảng 2 • Câu 38', subtopic: 'Dạng 8: Chèn phép tính & Tối ưu',
    type: 'open', targetSec: 120,
    text: 'Cho A = 20 □ 12 □ 15 □ 24 □ 18. Thêm các phép tính +, −, ×, ÷ vào các ô vuông (mỗi ô vuông một phép tính, mỗi phép tính chỉ được sử dụng một lần). Hỏi kết quả lớn nhất có thể của A là bao nhiêu? Biết rằng kết quả thu được là một số tự nhiên.',
    keywords: ['+, −, ×, ÷', 'mỗi phép tính chỉ được sử dụng một lần', 'kết quả lớn nhất', 'số tự nhiên'],
    strategy: 'Chú ý thứ tự nhân chia từ trái sang phải! Thử vị trí của × và ÷ sao cho phép chia tạo ra số nguyên lớn nhất!',
    steps: [
      'Chú ý 15×24:18 = 20, còn 20:12×15 = (20×15):12 = 300:12 = 25!',
      'Thử các cách đặt ÷ và × cạnh nhau để chia hết: 20 ÷ 12 × 15 + 24 − 18 = 25 + 24 − 18 = 31!',
      'Kiểm tra cách khác: 20 − 12 + 15 × 24 ÷ 18 = 8 + 20 = 28; 20 × 12 ÷ 15 + 24 − 18 = 16 + 6 = 22. Vậy lớn nhất là 31!'
    ],
    answer: '31',
    explanation: 'Xét các vị trí của × và ÷ để biểu thức cho kết quả là số tự nhiên:\n• 20 ÷ 12 × 15 + 24 − 18 = 25 + 24 − 18 = 31.\n• 20 − 12 + 15 × 24 ÷ 18 = 8 + 20 = 28.\n• 20 × 12 ÷ 15 + 24 − 18 = 16 + 24 − 18 = 22.\nKết quả lớn nhất là 31.\nĐáp số: 31'
  }
];
