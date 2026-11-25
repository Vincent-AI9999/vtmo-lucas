window.VTMO_QUESTIONS_M1 = [
  // ============ MẢNG 1 - TRÊN LỚP (27 CÂU) ============
  {
    id: 'm1_c1', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 1', subtopic: 'Đếm số & Chữ số',
    type: 'mc', targetSec: 45,
    text: 'Có bao nhiêu số chẵn có hai chữ số lớn hơn 19?',
    keywords: ['số chẵn', 'hai chữ số', 'lớn hơn 19'],
    strategy: 'Dãy số cách đều: (Số cuối − Số đầu) : Khoảng cách + 1.',
    steps: [
      'Số chẵn có hai chữ số nhỏ nhất mà lớn hơn 19 là số 20.',
      'Số chẵn có hai chữ số lớn nhất là 98.',
      'Hai số chẵn liên tiếp cách nhau 2 đơn vị. Áp dụng: (98 − 20) : 2 + 1.'
    ],
    options: ['39', '40', '41', '42', '43'], answer: 1,
    explanation: 'Các số chẵn thỏa mãn là: 20, 22, 24, ..., 98.\nSố số hạng = (98 − 20) : 2 + 1 = 40 (số).\nĐáp án: B. 40'
  },
  {
    id: 'm1_c2', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 2', subtopic: 'Làm tròn & Tính nhanh',
    type: 'mc', targetSec: 60,
    text: 'Mèo Tom viết các số 11; 22; 33; 44; 55; 66; 77; 88 lên bảng. Chuột Jerry viết lại các số trên sau khi đã làm tròn đến hàng chục. Vịt Donald cộng các số Jerry đã viết lại với nhau. Hỏi kết quả của Donald bằng bao nhiêu?',
    keywords: ['làm tròn đến hàng chục', '11; 22; 33; 44; 55; 66; 77; 88', 'cộng'],
    strategy: 'Đơn vị 1,2,3,4 làm tròn xuống; 5,6,7,8,9 làm tròn lên. Nhớ ghép cặp đầu-cuối để cộng nhanh!',
    steps: [
      'Làm tròn 11, 22, 33, 44 → 10, 20, 30, 40.',
      'Làm tròn 55, 66, 77, 88 → 60, 70, 80, 90 (chú ý 55 làm tròn lên 60!).',
      'Ghép cặp 100: (10+90) + (20+80) + (30+70) + (40+60) = 400.'
    ],
    options: ['410', '380', '390', '396', '400'], answer: 4,
    explanation: 'Sau khi làm tròn đến hàng chục:\n11 → 10; 22 → 20; 33 → 30; 44 → 40;\n55 → 60; 66 → 70; 77 → 80; 88 → 90.\nTổng = (10 + 90) + (20 + 80) + (30 + 70) + (40 + 60) = 400.\nĐáp án: E. 400'
  },
  {
    id: 'm1_c3', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 3', subtopic: 'Chia hết & Bội chung',
    type: 'mc', targetSec: 60,
    text: 'Hải nghĩ về ba số tự nhiên khác nhau nhưng có cùng những tính chất sau:\n• Là số tự nhiên có hai chữ số.\n• Chia hết cho cả 2, 3 và 5.\nHỏi tổng của ba số này bằng bao nhiêu?',
    keywords: ['ba số tự nhiên khác nhau', 'hai chữ số', 'chia hết cho cả 2, 3 và 5', 'tổng'],
    strategy: 'Chia hết cho 2 và 5 ⟹ tận cùng bằng 0. Kết hợp chia hết cho 3 ⟹ bội của 30.',
    steps: [
      'Chia hết cho 2 và 5 nên chữ số hàng đơn vị phải là 0.',
      'Là số tròn chục có 2 chữ số chia hết cho 3 ⟹ chữ số hàng chục ∈ {3, 6, 9}.',
      'Ba số là 30, 60, 90 ⟹ Tổng = 30 + 60 + 90.'
    ],
    options: ['50', '30', '90', '180', '210'], answer: 3,
    explanation: 'Số có 2 chữ số chia hết cho 2, 3, 5 là số chia hết cho 30: gồm 30, 60, 90.\nTổng = 30 + 60 + 90 = 180.\nĐáp án: D. 180'
  },
  {
    id: 'm1_c4', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 4', subtopic: 'Đếm số & Chữ số',
    type: 'mc', targetSec: 90,
    text: 'Số 123 có tổng các chữ số là 1 + 2 + 3 = 6. Hỏi có tất cả bao nhiêu số có ba chữ số mà tổng ba chữ số bằng 6?',
    keywords: ['số có ba chữ số', 'tổng ba chữ số bằng 6'],
    strategy: 'Chia trường hợp theo chữ số hàng trăm (từ 1 đến 6), dùng mẹo: 2 chữ số có tổng k (k ≤ 9) có k + 1 cách chọn!',
    steps: [
      'Gọi số cần tìm là abc (a ≥ 1, a + b + c = 6). Suy ra a chỉ có thể là 1, 2, 3, 4, 5, 6.',
      'Nếu a = 1 thì b + c = 5 ⟹ có 6 cách (05, 14, 23, 32, 41, 50).',
      'Tương tự: a = 2 có 5 cách; a = 3 có 4 cách; a = 4 có 3 cách; a = 5 có 2 cách; a = 6 có 1 cách.'
    ],
    options: ['12', '16', '18', '20', '21'], answer: 4,
    explanation: 'Xét theo chữ số hàng trăm a:\n• a = 1 ⟹ b + c = 5: có 6 số.\n• a = 2 ⟹ b + c = 4: có 5 số.\n• a = 3 ⟹ 4 số; a = 4 ⟹ 3 số; a = 5 ⟹ 2 số; a = 6 ⟹ 1 số.\nTổng cộng = 6 + 5 + 4 + 3 + 2 + 1 = 21 (số).\nĐáp án: E. 21'
  },
  {
    id: 'm1_c5', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 5', subtopic: 'Tối ưu giá trị số',
    type: 'mc', targetSec: 40,
    text: 'Bình cộng 3 số khác nhau, mỗi số có hai chữ số. Hỏi tổng lớn nhất có thể bằng bao nhiêu?',
    keywords: ['3 số khác nhau', 'hai chữ số', 'tổng lớn nhất'],
    strategy: 'Chọn 3 số hai chữ số lớn nhất đôi một khác nhau!',
    steps: [
      'Số có hai chữ số lớn nhất là 99.',
      'Hai số lớn nhất tiếp theo khác 99 là 98 và 97.',
      'Cộng 99 + 98 + 97 (hoặc tính nhẩm 100×3 − 1 − 2 − 3).'
    ],
    options: ['294', '297', '299', '279', '298'], answer: 0,
    explanation: 'Ba số có hai chữ số lớn nhất và khác nhau là 99, 98, 97.\nTổng = 99 + 98 + 97 = 294.\nĐáp án: A. 294'
  },
  {
    id: 'm1_c6', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 6', subtopic: 'Tối ưu giá trị số',
    type: 'mc', targetSec: 50,
    text: 'Hiệu của hai số có ba chữ số là 217. Hỏi giá trị lớn nhất của tổng hai số này bằng bao nhiêu?',
    keywords: ['hiệu', 'hai số có ba chữ số', '217', 'lớn nhất của tổng'],
    strategy: 'Để tổng lớn nhất khi hiệu cố định, hãy cho số lớn đạt tối đa (999)!',
    steps: [
      'Số lớn − Số bé = 217. Để tổng lớn nhất thì số lớn phải lớn nhất có thể.',
      'Số có ba chữ số lớn nhất là 999.',
      'Suy ra số bé = 999 − 217 = 782. Tính 999 + 782.'
    ],
    options: ['1781', '1757', '782', '770', '1552'], answer: 0,
    explanation: 'Chọn số lớn = 999 ⟹ số bé = 999 − 217 = 782 (đều có 3 chữ số).\nTổng lớn nhất = 999 + 782 = 1781.\nĐáp án: A. 1781'
  },
  {
    id: 'm1_c7', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 7', subtopic: 'Đếm số & Chữ số',
    type: 'open', targetSec: 75,
    text: 'Có một vài số có ba chữ số thỏa mãn các điều kiện sau:\n• Tổng các chữ số bằng 25.\n• Tích các chữ số bằng 567.\nHỏi số lớn nhất có ba chữ số thỏa mãn các điều kiện trên là số nào?',
    keywords: ['ba chữ số', 'tổng các chữ số bằng 25', 'tích các chữ số bằng 567', 'số lớn nhất'],
    strategy: 'Từ 9+9+9=27, bớt đi 2 để tổng bằng 25 ⟹ chỉ có 2 bộ chữ số: {9,9,7} và {9,8,8}.',
    steps: [
      'Tổng 3 chữ số tối đa là 9+9+9 = 27. Để tổng là 25 (kém 2), chỉ có bộ {9, 9, 7} hoặc {9, 8, 8}.',
      'Kiểm tra tích: 9 × 9 × 7 = 81 × 7 = 567 (đúng!), còn 9 × 8 × 8 = 576 (loại).',
      'Xếp các chữ số 9, 9, 7 từ lớn đến bé để được số lớn nhất.'
    ],
    answer: '997',
    explanation: 'Ba chữ số có tổng 25 chỉ có thể là (9, 9, 7) hoặc (9, 8, 8).\nThử tích: 9 × 9 × 7 = 567 (thỏa mãn).\nSố lớn nhất ghép được là 997.\nĐáp số: 997'
  },
  {
    id: 'm1_c8', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 8', subtopic: 'Đếm số & Chữ số',
    type: 'mc', targetSec: 110,
    text: 'Lan sử dụng 3 chữ số cách đều nhau để viết các số có 4 chữ số. Hỏi Lan có thể viết được tất cả bao nhiêu số lớn hơn 2000 và nhỏ hơn 2100 theo quy tắc trên?',
    keywords: ['3 chữ số cách đều nhau', '4 chữ số', 'lớn hơn 2000 và nhỏ hơn 2100'],
    strategy: 'Số nằm giữa 2000 và 2100 có dạng 20ab, nên bộ 3 chữ số bắt buộc chứa 0 và 2!',
    steps: [
      'Số có dạng 20ab nên bộ 3 chữ số cách đều nhau phải chứa chữ số 0 và 2.',
      'Chỉ có 2 bộ thỏa mãn: bộ {0, 1, 2} (cách 1) và bộ {0, 2, 4} (cách 2).',
      'Với mỗi bộ, 2 chữ số a, b phải có mặt chữ số thứ 3 (là 1 hoặc 4): nếu a là số thứ 3 thì b có 3 cách chọn; nếu a là 0 hoặc 2 thì b phải là số thứ 3 (2 cách) ⟹ mỗi bộ có 3 + 2 = 5 số.'
    ],
    options: ['4', '6', '8', '10', '12'], answer: 3,
    explanation: 'Số dạng 20ab phải chứa đủ 3 chữ số cách đều nhau, trong đó đã có 2 và 0:\n• TH1: Bộ {0, 1, 2} → phải dùng số 1 ở a hoặc b: 2010, 2011, 2012, 2001, 2021 (5 số).\n• TH2: Bộ {0, 2, 4} → phải dùng số 4 ở a hoặc b: 2040, 2042, 2044, 2004, 2024 (5 số).\nTổng cộng: 5 + 5 = 10 số.\nĐáp án: D. 10'
  },
  {
    id: 'm1_c9', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 9', subtopic: 'Cấu tạo số & Suy luận',
    type: 'open', targetSec: 120,
    text: 'Cho sáu thẻ bài được đánh số 1, 2, 3, 4, 5 và 6. Anh chọn 1 thẻ, Bình chọn 2 thẻ, Châu chọn 3 thẻ còn lại. Mỗi bạn dùng tất cả các thẻ bài đã chọn của mình để ghép thành một số tự nhiên. Biết rằng tổng hai số của Anh và Bình là 48, tổng hai số của Bình và Châu là 655. Hỏi tổng của ba số mà Anh, Bình, Châu đã tạo thành bằng bao nhiêu?',
    keywords: ['1, 2, 3, 4, 5 và 6', 'Anh + Bình = 48', 'Bình + Châu = 655', 'tổng của ba số'],
    strategy: 'Trừ hai phương trình để tìm hiệu: Châu − Anh = 655 − 48 = 607!',
    steps: [
      'Từ (Bình + Châu) − (Anh + Bình) = 655 − 48 = 607 ⟹ Châu = Anh + 607.',
      'Vì Anh là số 1 chữ số ∈ {1..6}, thử Anh từ 1..6 ⟹ Châu ∈ {608, 609, 610, 611, 612, 613}.',
      'Loại các số có chữ số 0 hoặc lặp chữ số hoặc > 6: chỉ còn Châu = 612 (khi Anh = 5) hoặc 613 (khi Anh = 6). Thử Bình = 48 − Anh: nếu Anh = 5 ⟹ Bình = 43 (đủ 6 thẻ 1,2,3,4,5,6!).'
    ],
    answer: '660',
    explanation: 'Châu − Anh = 655 − 48 = 607 ⟹ Châu = Anh + 607.\nThử các thẻ {1..6} cho Anh:\n• Anh = 5 ⟹ Châu = 612, Bình = 48 − 5 = 43. Bộ thẻ là {5}, {4,3}, {6,1,2} — dùng đúng cả 6 thẻ!\n• Anh = 6 ⟹ Châu = 613 (trùng thẻ 6, loại).\nTổng 3 số = 5 + 43 + 612 = 660 (hoặc 5 + 655 = 660).\nĐáp số: 660'
  },
  {
    id: 'm1_c10', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 10', subtopic: 'Cấu tạo số & Suy luận',
    type: 'open', targetSec: 120,
    text: 'An sử dụng 3 chữ số để tạo thành tất cả các số có một chữ số, hai chữ số và ba chữ số mà trong mỗi số các chữ số đều khác nhau. Khi tính tổng tất cả các số này thì kết quả là 5635. Hỏi tổng các chữ số mà An đã chọn bằng bao nhiêu?',
    keywords: ['3 chữ số', 'một chữ số, hai chữ số và ba chữ số', 'khác nhau', 'tổng tất cả các số', '5635'],
    strategy: 'Nhớ công thức vàng: Tổng các số 1, 2, 3 chữ số khác nhau từ 3 chữ số (≠ 0) luôn bằng 245 × S!',
    steps: [
      'Gọi tổng 3 chữ số là S (nếu có chữ số 0 thì tổng có 1,2,3 chữ số không tạo đủ đối xứng; kiểm tra trường hợp khác 0 trước).',
      '3 số có 1 chữ số có tổng = S. 6 số có 2 chữ số có tổng = 22 × S. 6 số có 3 chữ số có tổng = 222 × S.',
      'Tổng tất cả = (1 + 22 + 222) × S = 245 × S = 5635 ⟹ Chia 5635 cho 245.'
    ],
    answer: '23',
    explanation: 'Với 3 chữ số khác nhau và khác 0 có tổng là S:\n• Tổng các số 1 chữ số: S\n• Tổng các số 2 chữ số: (20 + 2) × S = 22 × S\n• Tổng các số 3 chữ số: (200 + 20 + 2) × S = 222 × S\nTổng tất cả = 245 × S = 5635 ⟹ S = 5635 : 245 = 23 (bộ chữ số 6, 8, 9).\nĐáp số: 23'
  },
  {
    id: 'm1_c11', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 11', subtopic: 'Làm tròn & Tính nhanh',
    type: 'mc', targetSec: 45,
    text: 'Kết quả của phép tính sau có bao nhiêu chữ số?\n4 × 5 × 10 × 15 × 20 × 25',
    keywords: ['bao nhiêu chữ số', '4 × 5 × 10 × 15 × 20 × 25'],
    strategy: 'Ghép cặp tròn trăm: (4 × 25) = 100 và (5 × 20) = 100!',
    steps: [
      'Ghép (4 × 25) = 100.',
      'Ghép (5 × 20) = 100.',
      'Còn lại (10 × 15) = 150. Vậy tích = 100 × 100 × 150 = 1 500 000.'
    ],
    options: ['4', '5', '6', '7', '8'], answer: 3,
    explanation: '4 × 5 × 10 × 15 × 20 × 25 = (4 × 25) × (5 × 20) × (10 × 15) = 100 × 100 × 150 = 1 500 000.\nSố 1 500 000 có 7 chữ số.\nĐáp án: D. 7'
  },
  {
    id: 'm1_c12', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 12', subtopic: 'Đánh số trang sách',
    type: 'mc', targetSec: 90,
    text: 'Pi có một cuốn sách và cần dùng 240 chữ số để đánh số trang toàn bộ cuốn sách, bắt đầu từ trang 1. Pi đã đọc đến hết trang 78 của cuốn sách đó. Hỏi Pi cần đọc bao nhiêu trang nữa để hoàn thành cuốn sách?',
    keywords: ['240 chữ số', 'bắt đầu từ trang 1', 'hết trang 78', 'cần đọc bao nhiêu trang nữa'],
    strategy: 'Nhớ mốc 189 chữ số cho 99 trang đầu! Từ trang 100 trở đi mỗi trang tốn 3 chữ số.',
    steps: [
      'Trang 1 → 9 dùng 9 chữ số; Trang 10 → 99 (90 trang) dùng 180 chữ số ⟹ 99 trang đầu dùng 189 chữ số.',
      'Số chữ số còn lại: 240 − 189 = 51 chữ số ⟹ Số trang có 3 chữ số = 51 : 3 = 17 trang.',
      'Cuốn sách có 99 + 17 = 116 trang. Pi còn phải đọc: 116 − 78.'
    ],
    options: ['36', '37', '38', '39', '40'], answer: 2,
    explanation: '• Trang 1–9: 9 chữ số.\n• Trang 10–99: 90 × 2 = 180 chữ số.\n• Còn lại 240 − 9 − 180 = 51 chữ số cho các trang 3 chữ số ⟹ 51 : 3 = 17 trang.\n• Tổng số trang: 99 + 17 = 116 trang.\n• Pi cần đọc thêm: 116 − 78 = 38 trang.\nĐáp án: C. 38'
  },
  {
    id: 'm1_c13', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 13', subtopic: 'Số nhỏ nhất & Đối xứng',
    type: 'open', targetSec: 60,
    text: 'Số 2364 có tổng các chữ số bằng 2 + 3 + 6 + 4 = 15. Cho số A là số nhỏ nhất có tổng các chữ số bằng 2022. Hỏi số A có bao nhiêu chữ số?',
    keywords: ['số nhỏ nhất', 'tổng các chữ số bằng 2022', 'bao nhiêu chữ số'],
    strategy: 'Muốn ít chữ số nhất (nhỏ nhất), dùng thật nhiều chữ số 9! Chia 2022 cho 9.',
    steps: [
      'Lấy 2022 : 9 được thương 224, dư 6.',
      'Vậy cần 224 chữ số 9 và thêm 1 chữ số 6 đứng đầu (số 6999...9).',
      'Tổng số chữ số = 224 + 1.'
    ],
    answer: '225',
    explanation: '2022 : 9 = 224 (dư 6).\nĐể số A nhỏ nhất thì A gồm chữ số 6 ở đầu và 224 chữ số 9 phía sau.\nSố chữ số của A = 1 + 224 = 225.\nĐáp số: 225'
  },
  {
    id: 'm1_c14', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 14', subtopic: 'Số nhỏ nhất & Đối xứng',
    type: 'open', targetSec: 60,
    text: 'Bác lái xe nhìn vào đồng hồ đo số kilômét xe đã chạy được; đồng hồ hiển thị số 42924. Đây là một số đối xứng: khi đọc từ trái sang phải cũng giống khi đọc từ phải sang trái. Hỏi xe cần chạy thêm ít nhất bao nhiêu kilômét nữa để đồng hồ hiển thị số đối xứng tiếp theo?',
    keywords: ['42924', 'số đối xứng tiếp theo', 'chạy thêm ít nhất'],
    strategy: '42924 có chữ số chính giữa là 9, nên không tăng được hàng trăm — phải tăng hàng nghìn 2 thành 3!',
    steps: [
      'Số đối xứng 5 chữ số có dạng abcba. Hiện tại a=4, b=2, c=9 (42924).',
      'Vì c = 9 đã lớn nhất nên phải tăng b từ 2 lên 3, và cho c về 0.',
      'Số đối xứng tiếp theo là 43034. Tính hiệu 43034 − 42924.'
    ],
    answer: '110',
    explanation: 'Số đối xứng tiếp theo ngay sau 42924 là 43034.\nSố kilômét cần chạy thêm = 43034 − 42924 = 110 (km).\nĐáp số: 110'
  },
  {
    id: 'm1_c15', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 15', subtopic: 'Tính ngược & Đọc nhầm',
    type: 'open', targetSec: 60,
    text: 'Giang cộng hai số có ba chữ số. Ở một trong hai số, bạn đọc nhầm chữ số 6 thành chữ số 9 ở hàng đơn vị, chữ số 1 thành chữ số 2 ở hàng chục và chữ số 2 thành chữ số 5 ở hàng trăm. Bạn thu được kết quả là 869. Nếu Giang đọc đúng thì kết quả đúng của tổng hai số bằng bao nhiêu?',
    keywords: ['6 thành 9 ở hàng đơn vị', '1 thành 2 ở hàng chục', '2 thành 5 ở hàng trăm', '869', 'kết quả đúng'],
    strategy: 'Tìm lượng tăng thêm do đọc nhầm ở từng hàng, rồi lấy tổng sai trừ đi phần tăng thêm!',
    steps: [
      'Hàng trăm 2 → 5: tăng thêm 300.',
      'Hàng chục 1 → 2: tăng thêm 10. Hàng đơn vị 6 → 9: tăng thêm 3.',
      'Tổng đọc nhầm đã tăng thêm 300 + 10 + 3 = 313. Lấy 869 − 313.'
    ],
    answer: '556',
    explanation: 'Số đọc nhầm là 529 thay cho số đúng là 216.\nPhần tăng thêm = 529 − 216 = 313.\nTổng đúng = 869 − 313 = 556.\nĐáp số: 556'
  },
  {
    id: 'm1_c16', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 16', subtopic: 'Phép tính dạng chữ',
    type: 'mc', targetSec: 45,
    text: 'Cho phép trừ dưới đây. Tính A + B.',
    diagram: { type: 'cryptarithm', rows: [' A 2', '− 2 B', ' 3 8'], lineBeforeLast: true },
    keywords: ['phép trừ', 'A + B'],
    strategy: 'Xét từ hàng đơn vị: 2 không trừ được B ⟹ lấy 12 − B = 8, nhớ 1 vào số trừ!',
    steps: [
      'Hàng đơn vị: 12 − B = 8 ⟹ B = 4 (nhớ 1).',
      'Hàng chục: A − 2 − 1 = 3 ⟹ A = 6.',
      'Tính A + B = 6 + 4.'
    ],
    options: ['10', '6', '4', '9', '14'], answer: 0,
    explanation: 'Hàng đơn vị: 12 − B = 8 ⟹ B = 4 (nhớ 1).\nHàng chục: A − 2 − 1 = 3 ⟹ A = 6.\nThử lại: 62 − 24 = 38.\nA + B = 6 + 4 = 10.\nĐáp án: A. 10'
  },
  {
    id: 'm1_c17', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 17', subtopic: 'Phép tính dạng chữ',
    type: 'open', targetSec: 90,
    text: 'Trong phép tính dưới đây, các chữ cái khác nhau đại diện cho các chữ số khác nhau. Tính A − B + C.',
    diagram: { type: 'cryptarithm', rows: ['  B A', '+ A B', '+ A B', ' C A A'], lineBeforeLast: true },
    keywords: ['chữ cái khác nhau', 'chữ số khác nhau', 'A − B + C'],
    strategy: 'Xét cột đơn vị: A + B + B tận cùng là A ⟹ 2 × B tận cùng bằng 0!',
    steps: [
      'Hàng đơn vị: A + B + B có tận cùng là A ⟹ B + B tận cùng là 0. Vì B ≠ 0 nên B = 5 (nhớ 1).',
      'Hàng chục: 5 + A + A + 1 tận cùng là A ⟹ A + 6 = 10 ⟹ A = 4 (nhớ 1).',
      'Hàng trăm: C = 1. Tính A − B + C = 4 − 5 + 1.'
    ],
    answer: '0',
    explanation: 'Hàng đơn vị: A + B + B tận cùng là A ⟹ B = 5 (nhớ 1).\nHàng chục: 5 + A + A + 1 tận cùng là A ⟹ A = 4 (nhớ 1) ⟹ C = 1.\nThử lại: 54 + 45 + 45 = 144.\nA − B + C = 4 − 5 + 1 = 0.\nĐáp số: 0'
  },
  {
    id: 'm1_c18', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 18', subtopic: 'Phép tính dạng chữ',
    type: 'open', targetSec: 120,
    text: 'Trong phép tính dưới đây, các chữ cái khác nhau đại diện cho các chữ số khác nhau. Hỏi T + I + T + A + N bằng bao nhiêu? Biết rằng O + N = 8 và M là chữ số lẻ.',
    diagram: { type: 'cryptarithm', rows: ['  V T M O', '+ 2 0 2 2', ' T I T A N'], lineBeforeLast: true },
    keywords: ['O + N = 8', 'M là chữ số lẻ', 'T + I + T + A + N'],
    strategy: 'Số 4 chữ số + 2022 ra số 5 chữ số ⟹ chữ số đầu T của kết quả chỉ có thể là 1!',
    steps: [
      'VTMO + 2022 ra số 5 chữ số TITAN ⟹ T = 1 (vì tổng tối đa < 12022).',
      'Hàng đơn vị: O + 2 có tận cùng N (hoặc có nhớ). Nếu O + 2 = N và O + N = 8 ⟹ O = 3, N = 5 (không nhớ).',
      'Hàng trăm: T + 0 = T (1 + 0 = 1) nên hàng chục KHÔNG nhớ sang hàng trăm! Nhưng M + 2 = A không nhớ và M lẻ, M ∉ {1,2,3,5} ⟹ M = 7, A = 9! Còn hàng nghìn: V + 2 = 10 + I ⟹ V = 8, I = 0.'
    ],
    answer: '16',
    explanation: '• T = 1 (nhớ sang hàng chục nghìn).\n• O + 2 = N và O + N = 8 ⟹ O = 3, N = 5 (nếu nhớ 1 thì O+2=10+N ⟹ N lẻ và O=8? Không hợp vì N=0 ⟹ O+N=8? Nếu O=9, N=1 trùng T).\n• Hàng trăm 1 + 0 = 1 nên hàng chục không nhớ ⟹ M + 2 = A ≤ 9. M lẻ khác 1,3,5 nên M = 7, A = 9.\n• V + 2 = 10 + I ⟹ V = 8, I = 0.\nThử lại: 8173 + 2022 = 10195.\nT + I + T + A + N = 1 + 0 + 1 + 9 + 5 = 16.\nĐáp số: 16'
  },
  {
    id: 'm1_c19', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 19', subtopic: 'Phép tính dạng chữ',
    type: 'open', targetSec: 120,
    text: 'Các chữ cái khác nhau đại diện cho các chữ số khác nhau. Biết rằng T = 4 và O là chữ số lẻ. Hỏi T + I + T + A + N bằng bao nhiêu?',
    diagram: { type: 'cryptarithm', rows: ['  V T M O', '×       8', ' T I T A N'], lineBeforeLast: true },
    keywords: ['T = 4', 'O là chữ số lẻ', '× 8', 'T + I + T + A + N'],
    strategy: 'Biết T = 4: hàng trăm 4 × 8 = 32 mà ra T = 4 (400 + ...) ⟹ hàng chục nhớ sang hàng trăm tối thiểu 2! Xét V từ hàng nghìn.',
    steps: [
      'Thay T = 4: V4MO × 8 = 4I4AN. Vì V × 8 + nhớ ≈ 40..49 nên V = 5 (5×8 = 40, nhớ 3 thành 43 = 4I ⟹ I = 3).',
      'Hàng trăm: 4 × 8 + nhớ = 32 + nhớ có tận cùng là 4 ⟹ nhớ từ hàng chục phải là 2 (32 + 2 = 34, viết 4 nhớ 3!).',
      'Để M × 8 + nhớ(O×8) nằm trong khoảng 20..29 ⟹ M = 2 (2×8 = 16, nhớ từ O×8 phải từ 4 đến 9). O lẻ ∈ {7, 9}: thử O = 7 (7×8=56, nhớ 5: 16+5=21 ⟹ A=1, N=6; 5427×8 = 43416!).'
    ],
    answer: '18',
    explanation: '• T = 4 ⟹ V = 5, I = 3 (vì 5427 × 8 = 43416).\nKiểm tra: các chữ số V=5, T=4, M=2, O=7 (lẻ), I=3, A=1, N=6 đều khác nhau!\n• T + I + T + A + N = 4 + 3 + 4 + 1 + 6 = 18.\nĐáp số: 18'
  },
  {
    id: 'm1_c20', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 20', subtopic: 'Phép tính dạng chữ',
    type: 'mc', targetSec: 90,
    text: 'Các chữ cái V, T, M, O đại diện cho các chữ số khác nhau để được phép tính đúng dưới đây. Tính giá trị nhỏ nhất của V + T + M + O.',
    diagram: { type: 'cryptarithm', rows: ['  O M', '×   T', '  V 8'], lineBeforeLast: true },
    keywords: ['chữ số khác nhau', 'giá trị nhỏ nhất', 'V + T + M + O'],
    strategy: 'Xét tích M × T tận cùng bằng 8 và tích OM × T < 100!',
    steps: [
      'Các cặp (M, T) có tích tận cùng là 8: (2,4), (2,9), (4,7), (6,3), (6,8), (1,8), (3,6)...',
      'Thử T nhỏ để OM × T < 100 và tổng nhỏ: với T = 3, M = 6 (6×3=18) và O = 1 ⟹ 16 × 3 = 48 (V = 4)!',
      'Kiểm tra tổng: V+T+M+O = 4+3+6+1 = 14. Thử T = 2: 34×2=68 (3+4+2+6=15); 19×2=38 (1+9+2+3=15).'
    ],
    options: ['14', '12', '9', '15', '17'], answer: 0,
    explanation: 'Thử các phép nhân OM × T = V8 (các chữ số khác nhau):\n• 16 × 3 = 48 ⟹ V+T+M+O = 4+3+6+1 = 14.\n• 34 × 2 = 68 ⟹ tổng 15.\n• 19 × 2 = 38 ⟹ tổng 15.\nGiá trị nhỏ nhất là 14.\nĐáp án: A. 14'
  },
  {
    id: 'm1_c21', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 21', subtopic: 'Phép tính dạng chữ',
    type: 'open', targetSec: 75,
    text: 'Thay các chữ cái khác nhau bởi các chữ số khác nhau sao cho kết quả phép tính dưới đây đạt giá trị lớn nhất. Tính T + I + T + A + N.',
    diagram: { type: 'cryptarithm', rows: ['  V I E T N A M', '+     T I T A N', '+       M A T H', '  ? ? ? ? ? ? ?'], lineBeforeLast: true },
    keywords: ['giá trị lớn nhất', 'T + I + T + A + N'],
    strategy: 'Không cần cộng thử! Muốn tổng lớn nhất, chữ cái ở hàng càng cao càng phải nhận chữ số lớn nhất (9, 8, 7, 6...)!',
    steps: [
      'Xếp thứ tự độ quan trọng của các hàng (từ hàng triệu xuống hàng đơn vị):',
      'Hàng triệu: V = 9. Hàng trăm nghìn: I = 8. Hàng chục nghìn: T + E → T xuất hiện nhiều hơn ở hàng nghìn nên T = 7, E = 6.',
      'Còn {5, 4, 3, 2} cho M, A, N, H: M đứng hàng nghìn (M=5), A đứng hàng trăm (A=4), N đứng hàng trăm + đơn vị (N=3), H=2. Tính T+I+T+A+N.'
    ],
    answer: '29',
    explanation: 'Để tổng lớn nhất, gán các chữ số lớn nhất theo thứ tự hàng từ trái sang phải:\nV = 9, I = 8, T = 7, E = 6, M = 5, A = 4, N = 3, H = 2.\n(9867345 + 78743 + 5472 = 9 951 560).\nT + I + T + A + N = 7 + 8 + 7 + 4 + 3 = 29.\nĐáp số: 29'
  },
  {
    id: 'm1_c22', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 22', subtopic: 'Bảng số & Ma trận',
    type: 'open', targetSec: 90,
    text: 'Các số tự nhiên từ 1 đến 9 được điền vào bảng 3 × 3 dưới đây, mỗi số dùng đúng một lần. Hỏi ô chính giữa của bảng là số mấy?\n• Số 1, 8 và 6 được điền ở hàng trên cùng.\n• Số 8, 3, 5, 1, 9 và 4 không nằm ở cột bên phải.\n• Số 9, 4, 2 nằm ở hàng dưới cùng.\n• Số 6, 4, 3, 1, 7 và 2 không nằm ở cột bên trái.',
    diagram: { type: 'grid', rows: [['','',''],['','?',''],['','','']] },
    keywords: ['1 đến 9', 'ô chính giữa', 'hàng trên cùng', 'không nằm ở cột bên phải', 'hàng dưới cùng', 'không nằm ở cột bên trái'],
    strategy: 'Tìm xem 3 số nào nằm ở hàng giữa trước! Sau đó dùng điều kiện "không nằm ở cột phải/trái" để loại trừ.',
    steps: [
      'Hàng trên: {1, 8, 6}. Hàng dưới: {9, 4, 2}. Vậy hàng giữa chắc chắn là 3 số còn lại: {3, 5, 7}.',
      'Số 3 và 5 KHÔNG ở cột bên phải ⟹ trong hàng giữa chỉ còn số 7 ở cột bên phải!',
      'Số 3 và 7 KHÔNG ở cột bên trái ⟹ trong hàng giữa chỉ còn số 5 ở cột bên trái! Vậy ô chính giữa là số còn lại.'
    ],
    answer: '3',
    explanation: '• Hàng trên: {1, 8, 6}; Hàng dưới: {9, 4, 2} ⟹ Hàng giữa: {3, 5, 7}.\n• Cột phải không có 3, 5 nên ô giữa-phải là 7.\n• Cột trái không có 3, 7 nên ô giữa-trái là 5.\n• Vậy ô chính giữa là 3!\nĐáp số: 3'
  },
  {
    id: 'm1_c23', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 23', subtopic: 'Bảng số & Ma trận',
    type: 'open', targetSec: 90,
    text: 'Cho hình vuông kỳ diệu dưới đây. Các số tự nhiên từ 2 đến 10 được điền vào bảng, mỗi số dùng đúng một lần, sao cho tổng các số trên mỗi hàng, mỗi cột và mỗi đường chéo đều bằng nhau. Hỏi x bằng bao nhiêu?',
    diagram: { type: 'grid', rows: [['9','','7'],['4','',''],['','10','x']] },
    keywords: ['2 đến 10', 'tổng', 'bằng nhau', 'x'],
    strategy: 'Tính tổng tất cả 9 số rồi chia 3 để ra tổng mỗi hàng (= 18)!',
    steps: [
      'Tổng 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 54 ⟹ Tổng mỗi hàng/cột/đường chéo = 54 : 3 = 18.',
      'Hàng 1: 9 + ? + 7 = 18 ⟹ ô trên-giữa là 2. Cột 2: 2 + ô_giữa + 10 = 18 ⟹ ô chính giữa = 6.',
      'Đường chéo chính: 9 + 6 + x = 18 ⟹ x = 3!'
    ],
    answer: '3',
    explanation: 'Tổng 9 số từ 2 đến 10 là (2 + 10) × 9 : 2 = 54.\nTổng mỗi hàng/cột/đường chéo = 54 : 3 = 18.\n• Hàng 1: 9 + ? + 7 = 18 ⟹ ô trên giữa = 2.\n• Cột 2: 2 + ô giữa + 10 = 18 ⟹ ô giữa = 6.\n• Đường chéo: 9 + 6 + x = 18 ⟹ x = 3.\nĐáp số: 3'
  },
  {
    id: 'm1_c24', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 24', subtopic: 'Bảng số & Ma trận',
    type: 'mc', targetSec: 75,
    text: 'Cho bảng dưới đây, mỗi chữ cái đại diện cho một số. Các số trong cột ngoài cùng bên phải là tổng các số ở mỗi hàng; các số trong hàng dưới cùng là tổng các số ở mỗi cột. Tìm T × M × O.',
    diagram: {
      type: 'sumGrid',
      rows: [
        ['M','O','T','12'],
        ['T','M','M','11'],
        ['O','O','T','13'],
        ['12','11','13','']
      ]
    },
    keywords: ['tổng các số ở mỗi hàng', 'tổng các số ở mỗi cột', 'T × M × O'],
    strategy: 'So sánh hàng 2 (T + 2M = 11) và cột 2 (M + 2O = 11) hoặc dùng M + O + T = 12!',
    steps: [
      'Hàng 1: M + O + T = 12. Hàng 2: T + M + M = 11. Lấy Hàng 1 − Hàng 2 ⟹ O − M = 1 (O lớn hơn M 1 đơn vị).',
      'Cột 2: O + M + O = 11 ⟹ M + 2O = 11. Thay O = M + 1 ⟹ 3M + 2 = 11 ⟹ M = 3.',
      'Suy ra O = 4, T = 12 − 3 − 4 = 5. Tính T × M × O = 5 × 3 × 4.'
    ],
    options: ['65', '50', '60', '80', '70'], answer: 2,
    explanation: 'Hàng 1: M + O + T = 12; Hàng 2: T + 2M = 11 ⟹ O − M = 1.\nCột 2: M + 2O = 11 ⟹ 3M + 2 = 11 ⟹ M = 3, O = 4, T = 5.\nT × M × O = 5 × 3 × 4 = 60.\nĐáp án: C. 60'
  },
  {
    id: 'm1_c25', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 25', subtopic: 'Cấu tạo số & Suy luận',
    type: 'open', targetSec: 40,
    text: 'Tích của 13 số tự nhiên bằng 13. Hỏi tổng của 13 số tự nhiên đó bằng bao nhiêu?',
    keywords: ['tích của 13 số tự nhiên', 'bằng 13', 'tổng'],
    strategy: '13 là số nguyên tố! Chỉ phân tích được thành 13 × 1 × 1 × ... × 1.',
    steps: [
      'Vì 13 là số nguyên tố, tích của 13 số tự nhiên bằng 13 thì phải có một số bằng 13 và 12 số còn lại bằng 1.',
      'Tổng của 13 số đó = 13 + 12 × 1.'
    ],
    answer: '25',
    explanation: '13 = 13 × 1 × 1 × ... × 1 (12 thừa số 1).\nTổng = 13 + 12 = 25.\nĐáp số: 25'
  },
  {
    id: 'm1_c26', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 26', subtopic: 'Chia hết & Bội chung',
    type: 'open', targetSec: 90,
    text: 'Hạnh viết các số tự nhiên liên tiếp 11, 12, 13, 14, ... và sẽ dừng lại khi “tổng của 5 số cuối cùng là một số lẻ chia hết cho 7”. Hỏi số cuối cùng mà Hạnh đã viết là số nào?',
    keywords: ['11, 12, 13, 14, ...', 'tổng của 5 số cuối cùng', 'số lẻ chia hết cho 7', 'số cuối cùng'],
    strategy: 'Tổng 5 số liên tiếp luôn bằng 5 × (số ở chính giữa)!',
    steps: [
      'Tổng 5 số liên tiếp = 5 × (số giữa). Muốn tổng lẻ và chia hết cho 7 thì số ở giữa phải là số LẺ chia hết cho 7.',
      'Các số lẻ chia hết cho 7: 7, 21, 35... Vì dãy bắt đầu từ 11 nên số giữa nhỏ nhất ≥ 13 là 21!',
      'Nếu số giữa của 5 số cuối là 21, thì 5 số cuối là: 19, 20, 21, 22, 23 ⟹ số cuối cùng là 23!'
    ],
    answer: '23',
    explanation: 'Tổng 5 số liên tiếp = 5 × (số giữa).\nĐể tổng lẻ và chia hết cho 7 thì số giữa là số lẻ chia hết cho 7.\nVì viết từ 11 trở đi nên số giữa nhỏ nhất thỏa mãn là 21.\nNăm số cuối là 19, 20, 21, 22, 23 (tổng = 105, lẻ và chia hết cho 7).\nSố cuối cùng Hạnh viết là 23.\nĐáp số: 23'
  },
  {
    id: 'm1_c27', mang: 'mang1', group: 'm1_class', source: 'Mảng 1 • Câu 27', subtopic: 'Tối ưu giá trị số',
    type: 'open', targetSec: 150,
    text: 'Nam viết 6 số tự nhiên bất kỳ lớn hơn 0 lên bảng. Biết rằng hiệu của hai số bất kỳ mà Nam đã viết không bằng nhau. Hỏi tổng nhỏ nhất có thể của 6 số mà Nam đã viết là bao nhiêu?',
    keywords: ['6 số tự nhiên', 'lớn hơn 0', 'hiệu của hai số bất kỳ', 'không bằng nhau', 'tổng nhỏ nhất'],
    strategy: 'Chọn các số từ nhỏ nhất (1, 2, 4, ...) sao cho khoảng cách giữa số mới và các số cũ không trùng bất kỳ hiệu nào đã có!',
    steps: [
      'Chọn a₁ = 1, a₂ = 2 (hiệu = 1). Số thứ 3 nhỏ nhất không tạo hiệu 1 là a₃ = 4 (hiệu mới: 2, 3).',
      'Các hiệu đã có: {1, 2, 3}. Số thứ 4 nhỏ nhất tạo hiệu mới: thử 7 (7−4=3 trùng), thử 8 (8−4=4, 8−2=6, 8−1=7; nhưng nếu chọn 9 thì sau sẽ tiết kiệm hơn? Thử cả 8 và 9!).',
      'Với {1, 2, 4, 8}: hiệu có {1,2,3,4,6,7} → tiếp theo là 13 (13−8=5, 13−4=9, 13−2=11, 13−1=12) và 21 (tổng 49).\nVới {1, 2, 4, 9}: hiệu có {1,2,3,5,7,8} → thêm 13 (hiệu 4,9,11,12) và 19 (hiệu 6,10,15,17,18) ⟹ tổng 1+2+4+9+13+19 = 48!'
    ],
    answer: '48',
    explanation: 'Cần 6 số có tất cả 15 hiệu đôi một khác nhau.\nBộ 6 số có tổng nhỏ nhất là: 1, 2, 4, 9, 13, 19.\nKiểm tra 15 hiệu: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 17, 18 (đều khác nhau).\nTổng nhỏ nhất = 1 + 2 + 4 + 9 + 13 + 19 = 48.\nĐáp số: 48'
  },

  // ============ BTVN MẢNG 1 (27 CÂU) ============
  {
    id: 'b1_c1', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 1', subtopic: 'Đếm số & Chữ số',
    type: 'mc', targetSec: 40,
    text: 'Có bao nhiêu số có hai chữ số chia hết cho 5?',
    keywords: ['hai chữ số', 'chia hết cho 5'],
    strategy: 'Dãy số cách đều 5: từ 10 đến 95.',
    steps: [
      'Số có hai chữ số nhỏ nhất chia hết cho 5 là 10; lớn nhất là 95.',
      'Số số hạng = (95 − 10) : 5 + 1.'
    ],
    options: ['17', '18', '19', '20', '21'], answer: 1,
    explanation: 'Các số là: 10, 15, 20, ..., 95.\nSố lượng = (95 − 10) : 5 + 1 = 18 (số).\nĐáp án: B. 18'
  },
  {
    id: 'b1_c2', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 2', subtopic: 'Đếm số & Chữ số',
    type: 'mc', targetSec: 75,
    text: 'Có bao nhiêu số có hai chữ số mà chữ số hàng đơn vị không nhỏ hơn chữ số hàng chục?',
    keywords: ['hai chữ số', 'hàng đơn vị không nhỏ hơn hàng chục'],
    strategy: 'Không nhỏ hơn nghĩa là lớn hơn HOẶC bằng! Đếm theo hàng chục từ 1 đến 9.',
    steps: [
      'Hàng chục = 1: hàng đơn vị ∈ {1..9} → 9 số.',
      'Hàng chục = 2: hàng đơn vị ∈ {2..9} → 8 số. ... Hàng chục = 9: {9} → 1 số.',
      'Tổng = 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = (9 + 1) × 9 : 2.'
    ],
    options: ['24', '35', '36', '45', '54'], answer: 3,
    explanation: 'Hàng chục 1 có 9 số; hàng chục 2 có 8 số; ...; hàng chục 9 có 1 số.\nTổng = 9 + 8 + ... + 1 = 45 (số).\nĐáp án: D. 45'
  },
  {
    id: 'b1_c3', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 3', subtopic: 'Chia hết & Bội chung',
    type: 'mc', targetSec: 50,
    text: 'Hai người viết hai số tự nhiên khác nhau nhưng có cùng những tính chất sau:\n• Là số tự nhiên có hai chữ số giống nhau.\n• Không chia hết cho 2, không chia hết cho 3 và không chia hết cho 5.\nHỏi tổng của hai số này bằng bao nhiêu?',
    keywords: ['hai chữ số giống nhau', 'không chia hết cho 2, 3, 5', 'tổng'],
    strategy: 'Viết nhanh 9 số có 2 chữ số giống nhau rồi gạch bỏ các số chẵn, số chia hết 3, số chia hết 5.',
    steps: [
      'Số 2 chữ số giống nhau: 11, 22, 33, 44, 55, 66, 77, 88, 99.',
      'Không chia hết 2 ⟹ còn 11, 33, 55, 77, 99. Không chia hết 5 ⟹ bỏ 55. Không chia hết 3 ⟹ bỏ 33, 99.',
      'Chỉ còn 11 và 77! Cộng 11 + 77.'
    ],
    options: ['33', '44', '55', '66', '88'], answer: 4,
    explanation: 'Các số có 2 chữ số giống nhau: 11, 22, 33, 44, 55, 66, 77, 88, 99.\nLoại chia hết 2, 3, 5 chỉ còn 11 và 77.\nTổng = 11 + 77 = 88.\nĐáp án: E. 88'
  },
  {
    id: 'b1_c4', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 4', subtopic: 'Làm tròn & Tính nhanh',
    type: 'open', targetSec: 50,
    text: 'Làm tròn các số 16; 24; 35; 48; 53; 67; 72; 89 đến hàng chục, rồi tính tổng các số sau khi làm tròn.',
    keywords: ['16; 24; 35; 48; 53; 67; 72; 89', 'làm tròn', 'hàng chục', 'tổng'],
    strategy: 'Làm tròn từng số (đơn vị ≥ 5 làm tròn lên), rồi ghép cặp 100!',
    steps: [
      '16 → 20; 24 → 20; 35 → 40; 48 → 50.',
      '53 → 50; 67 → 70; 72 → 70; 89 → 90.',
      'Tổng = (20+20+40+50) + (50+70+70+90) = 130 + 280.'
    ],
    answer: '410',
    explanation: 'Các số sau làm tròn: 20, 20, 40, 50, 50, 70, 70, 90.\nTổng = 20 + 20 + 40 + 50 + 50 + 70 + 70 + 90 = 410.\nĐáp số: 410'
  },
  {
    id: 'b1_c5', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 5', subtopic: 'Tối ưu giá trị số',
    type: 'open', targetSec: 45,
    text: 'Hiệu của hai số có ba chữ số là 328. Hỏi giá trị lớn nhất của tổng hai số này bằng bao nhiêu?',
    keywords: ['hiệu', 'hai số có ba chữ số', '328', 'giá trị lớn nhất của tổng'],
    strategy: 'Chọn số lớn = 999 để tổng lớn nhất!',
    steps: [
      'Số lớn nhất có 3 chữ số là 999.',
      'Số bé = 999 − 328 = 671.',
      'Tổng lớn nhất = 999 + 671.'
    ],
    answer: '1670',
    explanation: 'Số lớn = 999 ⟹ số bé = 999 − 328 = 671.\nTổng lớn nhất = 999 + 671 = 1670.\nĐáp số: 1670'
  },
  {
    id: 'b1_c6', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 6', subtopic: 'Đếm số & Chữ số',
    type: 'mc', targetSec: 90,
    text: 'Hỏi có tất cả bao nhiêu số có các chữ số khác nhau mà tích các chữ số bằng 12? Ví dụ: 34, 216, …',
    keywords: ['chữ số khác nhau', 'tích các chữ số bằng 12'],
    strategy: 'Tách 12 thành tích các chữ số KHÁC NHAU (có 2 chữ số hoặc 3 chữ số; không thể có 4 chữ số vì 1×2×2×3 bị lặp số 2!).',
    steps: [
      'Nhóm 2 chữ số khác nhau: {3, 4} (2 số: 34, 43) và {2, 6} (2 số: 26, 62) → 4 số.',
      'Nhóm 3 chữ số khác nhau: {1, 3, 4} (3×2×1 = 6 số) và {1, 2, 6} (6 số) → 12 số.',
      'Có nhóm 4 chữ số không? 1×2×2×3 bị lặp số 2 nên không có! Cộng 4 + 12.'
    ],
    options: ['4', '10', '12', '16', '20'], answer: 3,
    explanation: '• Có 2 chữ số khác nhau: từ {3,4} và {2,6} lập được 2 + 2 = 4 số.\n• Có 3 chữ số khác nhau: từ {1,3,4} và {1,2,6} lập được 6 + 6 = 12 số.\nTổng = 4 + 12 = 16 số.\nĐáp án: D. 16'
  },
  {
    id: 'b1_c7', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 7', subtopic: 'Đếm số & Chữ số',
    type: 'open_multi', targetSec: 75,
    text: 'Dùng đúng ba chữ số 0, 2, 4 để viết các số có bốn chữ số lớn hơn 2000 và nhỏ hơn 2100. Mỗi số phải có đủ cả ba chữ số đã cho. Hỏi viết được bao nhiêu số? Trong các số đó, số lớn nhất là số nào?',
    keywords: ['0, 2, 4', 'bốn chữ số', '2000', '2100', 'đủ cả ba chữ số'],
    strategy: 'Số dạng 20ab, đã có 2 và 0 nên bắt buộc phải dùng chữ số 4 ở hàng chục hoặc hàng đơn vị!',
    steps: [
      'Số có dạng 20ab với a, b ∈ {0, 2, 4} và phải có ít nhất một chữ số 4.',
      'Nếu a = 4: b ∈ {0, 2, 4} → 3 số (2040, 2042, 2044).',
      'Nếu a ∈ {0, 2}: b phải là 4 → 2 số (2004, 2024). Tổng = 5 số, lớn nhất là 2044.'
    ],
    inputs: [
      { label: 'Số lượng viết được:', answer: '5' },
      { label: 'Số lớn nhất là:', answer: '2044' }
    ],
    explanation: 'Các số dạng 20ab dùng đủ {0, 2, 4} là: 2004, 2024, 2040, 2042, 2044.\nVậy viết được 5 số, số lớn nhất là 2044.'
  },
  {
    id: 'b1_c8', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 8', subtopic: 'Cấu tạo số & Suy luận',
    type: 'open', targetSec: 110,
    text: 'Cho sáu thẻ bài được đánh số 1, 2, 3, 4, 5, 6. An lấy một thẻ, Bình lấy hai thẻ, Châu lấy ba thẻ còn lại. Mỗi bạn ghép tất cả thẻ của mình thành một số. Tổng hai số của An và Bình là 44; tổng hai số của Bình và Châu là 603. Hỏi tổng ba số bằng bao nhiêu?',
    keywords: ['An + Bình = 44', 'Bình + Châu = 603', 'tổng ba số'],
    strategy: 'Trừ 2 phương trình: Châu − An = 603 − 44 = 559!',
    steps: [
      'Châu − An = 603 − 44 = 559 ⟹ Châu = An + 559.',
      'Thử An ∈ {1..6}: An=1→560(loại 0); An=2→561; An=3→562; An=4→563; An=5→564; An=6→565(lặp 5).',
      'Với An = 3: Châu = 562, Bình = 44 − 3 = 41. Đủ 6 thẻ 1,2,3,4,5,6! Tổng = 3 + 603.'
    ],
    answer: '606',
    explanation: 'Châu − An = 603 − 44 = 559.\nThử An = 3 ⟹ Châu = 562, Bình = 41 (6 thẻ {3}, {4,1}, {5,6,2} đúng 1..6!).\nTổng ba số = 3 + 41 + 562 = 606.\nĐáp số: 606'
  },
  {
    id: 'b1_c9', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 9', subtopic: 'Cấu tạo số & Suy luận',
    type: 'open', targetSec: 75,
    text: 'An chọn ba chữ số khác nhau và khác 0. Bạn lập tất cả các số có một chữ số, hai chữ số và ba chữ số từ bộ chữ số đó; trong mỗi số không lặp chữ số. Tổng tất cả các số lập được là 1470. Tính tổng ba chữ số đã chọn.',
    keywords: ['ba chữ số khác nhau và khác 0', 'tổng tất cả các số', '1470', 'tổng ba chữ số'],
    strategy: 'Dùng công thức 245 × S = Tổng tất cả các số!',
    steps: [
      'Tổng tất cả các số 1, 2, 3 chữ số khác nhau lập từ 3 chữ số khác 0 là (1 + 22 + 222) × S = 245 × S.',
      'Ta có 245 × S = 1470 ⟹ Tính 1470 : 245.'
    ],
    answer: '6',
    explanation: '245 × S = 1470 ⟹ S = 1470 : 245 = 6 (3 chữ số là 1, 2, 3).\nĐáp số: 6'
  },
  {
    id: 'b1_c10', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 10', subtopic: 'Làm tròn & Tính nhanh',
    type: 'open', targetSec: 40,
    text: 'Kết quả của phép tính sau có bao nhiêu chữ số?\n2 × 5 × 10 × 20 × 25',
    keywords: ['bao nhiêu chữ số', '2 × 5 × 10 × 20 × 25'],
    strategy: 'Nhóm các cặp ra 10 và 100!',
    steps: [
      '(2 × 5) = 10; (20 × 25) = 500; còn thừa số 10.',
      'Tích = 10 × 10 × 500 = 50 000.'
    ],
    answer: '5',
    explanation: '2 × 5 × 10 × 20 × 25 = (2 × 5) × 10 × (20 × 25) = 10 × 10 × 500 = 50 000.\nSố 50 000 có 5 chữ số.\nĐáp số: 5'
  },
  {
    id: 'b1_c11', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 11', subtopic: 'Số nhỏ nhất & Đối xứng',
    type: 'open', targetSec: 60,
    text: 'Một số được gọi là số đối xứng khi đọc từ trái sang phải hoặc từ phải sang trái đều giống nhau. Ví dụ, 2023202 là một số đối xứng có bảy chữ số.\n• Anh viết một số đối xứng có bảy chữ số lớn hơn 2023202.\n• Bình viết một số đối xứng có bảy chữ số nhỏ hơn 2023202.\nHỏi hiệu nhỏ nhất có thể của số mà Anh và Bình đã viết bằng bao nhiêu?',
    keywords: ['2023202', 'lớn hơn', 'nhỏ hơn', 'hiệu nhỏ nhất'],
    strategy: 'Để hiệu nhỏ nhất, chọn số của Anh ngay sau 2023202 và số của Bình ngay trước 2023202!',
    steps: [
      'Thay chữ số chính giữa (số 3 ở hàng nghìn) thành 4 và 2:',
      'Số đối xứng lớn hơn gần nhất: 2024202. Số đối xứng nhỏ hơn gần nhất: 2022202.',
      'Hiệu nhỏ nhất = 2024202 − 2022202.'
    ],
    answer: '2000',
    explanation: 'Số của Anh nhỏ nhất > 2023202 là 2024202.\nSố của Bình lớn nhất < 2023202 là 2022202.\nHiệu nhỏ nhất = 2024202 − 2022202 = 2000.\nĐáp số: 2000'
  },
  {
    id: 'b1_c12', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 12', subtopic: 'Đánh số trang sách',
    type: 'open', targetSec: 75,
    text: 'Một quyển sách được đánh số trang từ 1 và dùng hết 384 chữ số. An đã đọc hết trang 120. Hỏi An còn phải đọc bao nhiêu trang nữa để hoàn thành quyển sách?',
    keywords: ['384 chữ số', 'hết trang 120', 'còn phải đọc bao nhiêu trang'],
    strategy: 'Trừ ngay 189 chữ số của 99 trang đầu, phần dư chia cho 3!',
    steps: [
      '99 trang đầu dùng 189 chữ số. Số chữ số còn lại: 384 − 189 = 195 chữ số.',
      'Số trang có 3 chữ số: 195 : 3 = 65 trang ⟹ Tổng số trang = 99 + 65 = 164 trang.',
      'Số trang An còn phải đọc: 164 − 120.'
    ],
    answer: '44',
    explanation: '• Trang 1–99 dùng 9 + 180 = 189 chữ số.\n• Trang có 3 chữ số: (384 − 189) : 3 = 195 : 3 = 65 trang.\n• Sách có 99 + 65 = 164 trang.\n• An còn phải đọc: 164 − 120 = 44 trang.\nĐáp số: 44'
  },
  {
    id: 'b1_c13', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 13', subtopic: 'Số nhỏ nhất & Đối xứng',
    type: 'open', targetSec: 40,
    text: 'Gọi A là số nhỏ nhất có tổng các chữ số bằng 100. Hỏi A có bao nhiêu chữ số?',
    keywords: ['số nhỏ nhất', 'tổng các chữ số bằng 100', 'bao nhiêu chữ số'],
    strategy: 'Chia 100 cho 9 để dùng nhiều chữ số 9 nhất.',
    steps: [
      '100 : 9 = 11 (dư 1).',
      'Số A gồm 1 chữ số 1 ở đầu và 11 chữ số 9 (199999999999).'
    ],
    answer: '12',
    explanation: '100 = 1 + 11 × 9 ⟹ A có 1 + 11 = 12 chữ số.\nĐáp số: 12'
  },
  {
    id: 'b1_c14', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 14', subtopic: 'Tính ngược & Đọc nhầm',
    type: 'open', targetSec: 50,
    text: 'Giang cộng hai số có ba chữ số. Trong một số, bạn đọc nhầm chữ số hàng trăm từ 3 thành 5, hàng chục từ 4 thành 7, hàng đơn vị từ 2 thành 8 và tính được tổng là 976. Hỏi tổng đúng của hai số bằng bao nhiêu?',
    keywords: ['3 thành 5', '4 thành 7', '2 thành 8', '976', 'tổng đúng'],
    strategy: 'Số đúng là 342 bị đọc nhầm thành 578! Tính độ lệch 578 − 342.',
    steps: [
      'Số đúng 342 đã bị đọc nhầm thành 578.',
      'Tổng đã tăng thêm: 578 − 342 = 236.',
      'Tổng đúng = 976 − 236.'
    ],
    answer: '740',
    explanation: 'Đọc nhầm 342 thành 578 làm tổng tăng thêm 578 − 342 = 236.\nTổng đúng = 976 − 236 = 740.\nĐáp số: 740'
  },
  {
    id: 'b1_c15', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 15', subtopic: 'Phép tính dạng chữ',
    type: 'open', targetSec: 40,
    text: 'Trong phép trừ dưới đây, A và B là các chữ số. Tính A + B.',
    diagram: { type: 'cryptarithm', rows: [' A 3', '− 3 B', ' 4 7'], lineBeforeLast: true },
    keywords: ['phép trừ', 'A + B'],
    strategy: 'Xét từ hàng đơn vị: 13 − B = 7 (nhớ 1).',
    steps: [
      'Hàng đơn vị: 13 − B = 7 ⟹ B = 6 (nhớ 1).',
      'Hàng chục: A − 3 − 1 = 4 ⟹ A = 8.',
      'Tính A + B = 8 + 6.'
    ],
    answer: '14',
    explanation: '13 − B = 7 ⟹ B = 6 (nhớ 1).\nA − 3 − 1 = 4 ⟹ A = 8.\nThử lại: 83 − 36 = 47.\nA + B = 8 + 6 = 14.\nĐáp số: 14'
  },
  {
    id: 'b1_c16', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 16', subtopic: 'Phép tính dạng chữ',
    type: 'open', targetSec: 90,
    text: 'Trong hình dưới đây, những kí hiệu khác nhau đại diện cho những chữ số khác nhau. Hỏi tổng giá trị của ngôi sao (☆), trái tim (♡) và hình ngũ giác (⬠) bằng bao nhiêu?',
    diagram: { type: 'cryptarithm', rows: ['  ☆ ♡', '+ ⬠ ♡', '+ ⬠ ☆', ' ☆ ⬠ ⬠'], lineBeforeLast: true },
    keywords: ['kí hiệu khác nhau', 'tổng giá trị'],
    strategy: 'Số có 3 số 2 chữ số cộng lại chỉ ra tối đa 297, nên chữ số hàng trăm ☆ chỉ có thể là 1 hoặc 2!',
    steps: [
      'Vì ☆ ở hàng trăm nên ☆ = 1 hoặc 2. Xét hàng đơn vị: ♡ + ♡ + ☆ có tận cùng là ⬠.',
      'Nếu ☆ = 1: hàng trăm nhớ 1, vậy ở hàng chục 1 + ⬠ + ⬠ + nhớ = 10 + ⬠ ⟹ ⬠ = 9 (nếu nhớ 0) hoặc 8 (nếu nhớ 1).',
      'Thử ☆ = 1, ⬠ = 9: 1♡ + 9♡ + 91 = 199 ⟹ hàng đơn vị 2×♡ + 1 = 9 ⟹ ♡ = 4! (14 + 94 + 91 = 199!).'
    ],
    answer: '14',
    explanation: '☆ = 1, ⬠ = 9, ♡ = 4 (thử lại: 14 + 94 + 91 = 199, thỏa mãn!).\nTổng = 1 + 4 + 9 = 14.\nĐáp số: 14'
  },
  {
    id: 'b1_c17', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 17', subtopic: 'Phép tính dạng chữ',
    type: 'open', targetSec: 120,
    text: 'Trong phép tính sau, các chữ cái khác nhau đại diện cho các chữ số khác nhau. Tính giá trị của số VTMO. Biết rằng E = 9.',
    diagram: { type: 'cryptarithm', rows: ['  V T M O', '+ L O V E', ' M E E T'], lineBeforeLast: true },
    keywords: ['E = 9', 'số VTMO'],
    strategy: 'Thay E = 9 vào phép tính rồi phân tích từ hàng đơn vị và hàng trăm!',
    steps: [
      'Hàng đơn vị: O + 9 cho tận cùng T ⟹ T = O − 1 (nhớ 1 sang hàng chục).',
      'Hàng chục: M + V + 1 cho tận cùng là 9. Hàng trăm: T + O + nhớ = 9 hoặc 19. Vì T = O − 1 nên (O − 1) + O + nhớ = 9 ⟹ 2×O + nhớ = 10 ⟹ nhớ = 0, O = 5, T = 4!',
      'Thay O = 5, T = 4: hàng chục M + V + 1 = 9 ⟹ M + V = 8. Hàng nghìn: V + L = M, mà V ≥ 1, L ≥ 1 ⟹ V = 1, L = 6, M = 7 (1+6=7, 7+1=8!).'
    ],
    answer: '1475',
    explanation: 'Thay E = 9:\n• Hàng đơn vị O + 9 nhớ 1 ⟹ T = O − 1.\n• Hàng trăm: T + O = 9 (không nhớ vì T=O−1 lẻ) ⟹ O = 5, T = 4.\n• Hàng chục: M + V + 1 = 9 ⟹ M + V = 8.\n• Hàng nghìn: V + L = M ⟹ V = 1, L = 6, M = 7.\nThử lại: 1475 + 6519 = 7994.\nĐáp số: 1475'
  },
  {
    id: 'b1_c18', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 18', subtopic: 'Phép tính dạng chữ',
    type: 'open', targetSec: 110,
    text: 'Trong phép tính dưới đây, các chữ cái khác nhau đại diện cho các chữ số khác nhau. Tìm T + I + T + A + N. Biết rằng SCHOOL = 639007.',
    diagram: { type: 'cryptarithm', rows: ['    T I T A N', '+ T A L E N T', '  S C H O O L'], lineBeforeLast: true },
    keywords: ['SCHOOL = 639007', 'T + I + T + A + N'],
    strategy: 'Thay ngay S=6, C=3, H=9, O=0, L=7 vào phép tính và nhìn hàng trăm nghìn T + nhớ = S = 6!',
    steps: [
      'Các chữ số đã dùng: 0(O), 3(C), 6(S), 7(L), 9(H). Còn lại {1, 2, 4, 5, 8} cho T, I, A, E, N.',
      'Hàng trăm nghìn: T + nhớ = 6 ⟹ T = 5 (nhớ 1 từ T + A = 13!). Suy ra A = 8 (5 + 8 = 13, nhớ 1).',
      'Còn {1, 2, 4} cho I, E, N: hàng đơn vị N + 5 = 7 ⟹ N = 2. Hàng chục 8 + E = 10 ⟹ E = 2? Chú ý nhớ! Hàng chục A(8) + N(2) = 10 (viết 0 nhớ 1) ⟹ N = 2, L = 7 ⟹ N+T = 2+5=7 (không nhớ)! Còn {1, 4} cho I, E: hàng trăm T(5)+E+1 = 10 ⟹ E = 4, I = 1 (1+7+1=9=H!).'
    ],
    answer: '21',
    explanation: 'S=6, C=3, H=9, O=0, L=7.\nTừ cột hàng trăm nghìn & chục nghìn: T = 5, A = 8.\nCột đơn vị: N + 5 = 7 ⟹ N = 2.\nCột chục: 8 + 2 = 10 (nhớ 1).\nCột trăm: 5 + E + 1 = 10 ⟹ E = 4.\nCột nghìn: I + 7 + 1 = 9 ⟹ I = 1.\nThử lại: 51582 + 587425 = 639007.\nT + I + T + A + N = 5 + 1 + 5 + 8 + 2 = 21.\nĐáp số: 21'
  },
  {
    id: 'b1_c19', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 19', subtopic: 'Phép tính dạng chữ',
    type: 'open', targetSec: 90,
    text: 'Trong phép tính sau, các chữ cái khác nhau thay thế cho các chữ số khác nhau. Hãy tìm số có bốn chữ số SEED.',
    diagram: { type: 'cryptarithm', rows: ['  B E E', '×     4', ' S E E D'], lineBeforeLast: true },
    keywords: ['BEE × 4 = SEED', 'số có bốn chữ số SEED'],
    strategy: 'Thử chữ số E! E × 4 = _D và (10E + E)×4 hoặc xét E×4 + nhớ ở hàng chục tận cùng là E!',
    steps: [
      'Gọi số là BEE. Để khi nhân 4 vẫn giữ được hai chữ số E ở giữa (S E E D), thử E từ hàng chục: E × 4 + nhớ có tận cùng bằng E.',
      'Nhớ từ E × 4 là 0, 1, 2, 3. Thử từng giá trị: nếu E = 9 ⟹ E×4 = 36 (nhớ 3, D = 6). Hàng chục: 9×4 + 3 = 39 (tận cùng là 9 = E, nhớ 3!).',
      'Hàng trăm: B × 4 + 3 = SE ⟹ B × 4 + 3 phải tận cùng là 9 ⟹ B × 4 tận cùng là 6 ⟹ B = 4 (4×4+3 = 19, S = 1!).'
    ],
    answer: '1996',
    explanation: 'Thử E = 9 ⟹ 9 × 4 = 36 (D = 6, nhớ 3).\nHàng chục: 9 × 4 + 3 = 39 (viết 9, nhớ 3).\nHàng trăm: B × 4 + 3 tận cùng là 9 ⟹ B = 4 (4×4 + 3 = 19, S = 1).\nThử lại: 499 × 4 = 1996.\nĐáp số: 1996'
  },
  {
    id: 'b1_c20', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 20', subtopic: 'Tối ưu giá trị số',
    type: 'mc', targetSec: 75,
    text: 'Cho các chữ số 2, 3, 4, 5, 6, 7 và 8. Mỗi chữ số được sử dụng đúng một lần để tạo thành các số UVW, XY và MN. Hỏi giá trị nhỏ nhất của biểu thức dưới đây bằng bao nhiêu?\nUVW − (XY + MN)',
    keywords: ['2, 3, 4, 5, 6, 7 và 8', 'giá trị nhỏ nhất', 'UVW − (XY + MN)'],
    strategy: 'Muốn hiệu nhỏ nhất: làm cho UVW nhỏ nhất (đầu nhỏ) và làm cho (XY + MN) lớn nhất (đầu lớn)!',
    steps: [
      'Gán 3 chữ số nhỏ nhất {2, 3, 4} cho UVW ⟹ UVW nhỏ nhất = 234.',
      'Gán 4 chữ số lớn nhất {5, 6, 7, 8} cho XY + MN: 8 và 7 ở hàng chục; 6 và 5 ở hàng đơn vị.',
      'Tổng XY + MN lớn nhất = 86 + 75 = 161. Tính 234 − 161.'
    ],
    options: ['70', '73', '82', '172', '165'], answer: 1,
    explanation: 'Để UVW − (XY + MN) nhỏ nhất:\n• UVW nhỏ nhất = 234.\n• XY + MN lớn nhất = 86 + 75 = 161.\nGiá trị nhỏ nhất = 234 − 161 = 73.\nĐáp án: B. 73'
  },
  {
    id: 'b1_c21', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 21', subtopic: 'Phép tính dạng chữ',
    type: 'open', targetSec: 90,
    text: 'Trong phép tính dưới đây, các chữ cái khác nhau biểu thị các chữ số khác nhau. Tìm giá trị nhỏ nhất của A + B + C + D.',
    diagram: { type: 'cryptarithm', rows: ['  A B', '×   C', '  D 6'], lineBeforeLast: true },
    keywords: ['giá trị nhỏ nhất', 'A + B + C + D'],
    strategy: 'B × C tận cùng là 6 và C ≥ 2 (nếu C=1 thì AB×1=AB ≠ D6!). Thử C = 2, 3, 4...',
    steps: [
      'C = 1 loại vì A=D, B=6 (lặp chữ số). Xét C = 2: B × 2 tận cùng là 6 ⟹ B = 3 hoặc B = 8.',
      'Nếu C = 2, B = 3: A3 × 2 = D6. Chọn A nhỏ nhất khác 2,3,6 ⟹ A = 4 ⟹ 43 × 2 = 86 (D=8). Tổng = 4+3+2+8 = 17.',
      'Thử B = 8, C = 2: A8 × 2 = D6. Chọn A = 1 ⟹ 18 × 2 = 36 (D = 3)! Tổng = 1 + 8 + 2 + 3 = 14!'
    ],
    answer: '14',
    explanation: 'Các cặp thỏa mãn (A, B, C, D) khác nhau:\n• 18 × 2 = 36 ⟹ 1 + 8 + 2 + 3 = 14.\n• 43 × 2 = 86 ⟹ 4 + 3 + 2 + 8 = 17.\n• 38 × 2 = 76 ⟹ 20.\nGiá trị nhỏ nhất là 14.\nĐáp số: 14'
  },
  {
    id: 'b1_c22', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 22', subtopic: 'Bảng số & Ma trận',
    type: 'open', targetSec: 75,
    text: 'Điền các số 1 đến 9 vào bảng 3 × 3, mỗi số dùng một lần. Hỏi ô chính giữa là số mấy?\n• Hàng trên cùng gồm các số 1, 5, 9.\n• Hàng dưới cùng gồm các số 2, 6, 7.\n• Cột bên trái gồm các số 3, 5, 7.\n• Cột bên phải gồm các số 1, 4, 6.',
    diagram: { type: 'grid', rows: [['','',''],['','?',''],['','','']] },
    keywords: ['ô chính giữa', 'hàng trên cùng', 'hàng dưới cùng', 'cột bên trái', 'cột bên phải'],
    strategy: 'Tìm 3 số của hàng giữa, rồi xem số nào không nằm ở cột trái hay cột phải!',
    steps: [
      'Hàng trên: {1, 5, 9}; Hàng dưới: {2, 6, 7} ⟹ Hàng giữa gồm 3 số còn lại: {3, 4, 8}.',
      'Cột trái gồm {3, 5, 7} ⟹ số ở giữa-trái là 3.',
      'Cột phải gồm {1, 4, 6} ⟹ số ở giữa-phải là 4. Vậy ô chính giữa là 8!'
    ],
    answer: '8',
    explanation: 'Hàng giữa gồm {3, 4, 8}.\n• 3 nằm ở cột trái; 4 nằm ở cột phải.\n• Suy ra ô chính giữa là số 8.\nĐáp số: 8'
  },
  {
    id: 'b1_c23', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 23', subtopic: 'Bảng số & Ma trận',
    type: 'open', targetSec: 60,
    text: 'Điền các số 1 đến 9 vào ô vuông kỳ diệu dưới đây, mỗi số dùng một lần, sao cho tổng mỗi hàng, mỗi cột và mỗi đường chéo bằng nhau. Tìm x.',
    diagram: { type: 'grid', rows: [['8','1','6'],['3','',''],['','9','x']] },
    keywords: ['1 đến 9', 'tổng', 'bằng nhau', 'Tìm x'],
    strategy: 'Tổng hàng 1 đã biết: 8 + 1 + 6 = 15! Tính tiếp cột 2 hoặc ô giữa.',
    steps: [
      'Tổng mỗi hàng/cột/đường chéo = 8 + 1 + 6 = 15.',
      'Cột 2: 1 + ô_giữa + 9 = 15 ⟹ ô giữa = 5.',
      'Đường chéo chính: 8 + 5 + x = 15 ⟹ x = 2.'
    ],
    answer: '2',
    explanation: 'Tổng chung = 8 + 1 + 6 = 15.\nÔ giữa = 15 − 1 − 9 = 5.\nĐường chéo chính: 8 + 5 + x = 15 ⟹ x = 2.\nĐáp số: 2'
  },
  {
    id: 'b1_c24', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 24', subtopic: 'Bảng số & Ma trận',
    type: 'open', targetSec: 75,
    text: 'Mỗi chữ trong bảng dưới đây biểu thị một số. Cột cuối là tổng từng hàng, hàng cuối là tổng từng cột. Tìm A × B × C.',
    diagram: {
      type: 'sumGrid',
      rows: [
        ['A','B','C','9'],
        ['B','C','C','11'],
        ['A','A','B','7'],
        ['7','9','11','']
      ]
    },
    keywords: ['tổng từng hàng', 'tổng từng cột', 'A × B × C'],
    strategy: 'Từ hàng 3: 2A + B = 7 và hàng 1: A + B + C = 9; hàng 2: B + 2C = 11. Thử A = 1, 2, 3!',
    steps: [
      'Từ 2A + B = 7 với A, B nguyên dương ⟹ A ∈ {1, 2, 3}.',
      '• Nếu A = 2 ⟹ B = 3 ⟹ C = 9 − 2 − 3 = 4 (kiểm tra: 3 + 2×4 = 11 đúng!) ⟹ A × B × C = 2 × 3 × 4 = 24.',
      '• Nếu A = 1 ⟹ B = 5, C = 3 (1×5×3 = 15) hoặc A = 3, B = 1, C = 5 (15) — tùy chọn bộ (2, 3, 4) hoặc (1, 5, 3) đều thỏa mãn bảng!'
    ],
    answer: '24',
    acceptedAnswers: ['24', '15'],
    explanation: 'Với 2A + B = 7, A + B + C = 9, B + 2C = 11:\n• Nếu A = 2, B = 3, C = 4 ⟹ A × B × C = 24.\n• Nếu A = 1, B = 5, C = 3 (hoặc 3, 1, 5) ⟹ A × B × C = 15.\n(Chấp nhận cả hai đáp án 24 và 15).'
  },
  {
    id: 'b1_c25', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 25', subtopic: 'Cấu tạo số & Suy luận',
    type: 'open', targetSec: 35,
    text: 'Tích của 11 số tự nhiên bằng 11. Hỏi tổng của 11 số đó bằng bao nhiêu?',
    keywords: ['tích của 11 số tự nhiên', 'bằng 11', 'tổng'],
    strategy: '11 là số nguyên tố ⟹ gồm một số 11 và mười số 1.',
    steps: [
      '11 = 11 × 1 × 1 × ... × 1 (10 số 1).',
      'Tổng = 11 + 10 = 21.'
    ],
    answer: '21',
    explanation: '11 số đó gồm một số 11 và 10 số 1.\nTổng = 11 + 10 = 21.\nĐáp số: 21'
  },
  {
    id: 'b1_c26', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 26', subtopic: 'Chia hết & Bội chung',
    type: 'open', targetSec: 75,
    text: 'Hạnh viết các số tự nhiên liên tiếp 20, 21, 22, ... và dừng khi tổng của năm số cuối cùng là số lẻ chia hết cho 7. Hỏi số cuối cùng Hạnh viết là số nào?',
    keywords: ['20, 21, 22, ...', 'tổng của năm số cuối cùng', 'số lẻ chia hết cho 7', 'số cuối cùng'],
    strategy: 'Tổng 5 số liên tiếp = 5 × (số giữa). Tìm số giữa là số lẻ chia hết cho 7 và ≥ 22!',
    steps: [
      'Tổng 5 số = 5 × (số giữa) phải lẻ và chia hết cho 7 ⟹ số giữa lẻ và chia hết cho 7.',
      'Các số lẻ chia hết cho 7: 7, 21, 35... Vì dãy bắt đầu từ 20 nên số giữa của 5 số đầu tiên ít nhất là 22 ⟹ bỏ 21, chọn 35!',
      '5 số cuối có số giữa 35 là: 33, 34, 35, 36, 37 ⟹ số cuối là 37.'
    ],
    answer: '37',
    explanation: 'Số giữa phải là số lẻ chia hết cho 7 và ≥ 22 ⟹ số giữa = 35.\nNăm số cuối là 33, 34, 35, 36, 37 (tổng 175, lẻ và chia hết cho 7).\nSố cuối cùng Hạnh viết là 37.\nĐáp số: 37'
  },
  {
    id: 'b1_c27', mang: 'mang1', group: 'm1_hw', source: 'BTVN M1 • Câu 27', subtopic: 'Tối ưu giá trị số',
    type: 'open', targetSec: 90,
    text: 'Viết bốn số tự nhiên khác nhau và lớn hơn 0. Với mỗi cặp số, lấy số lớn trừ số bé, được sáu hiệu đôi một khác nhau. Tìm tổng nhỏ nhất của bốn số đó.',
    keywords: ['bốn số tự nhiên', 'lớn hơn 0', 'sáu hiệu đôi một khác nhau', 'tổng nhỏ nhất'],
    strategy: 'Thử chọn từng số nhỏ nhất: 1, 2, 4, ... sao cho hiệu không lặp!',
    steps: [
      'Chọn số thứ nhất = 1, số thứ hai = 2 (hiệu = 1).',
      'Số thứ ba = 3 thì 3−2 = 1 (trùng), nên chọn 4 (hiệu mới: 2, 3).',
      'Số thứ tư thử 5, 6, 7 đều trùng hiệu {1,2,3}; thử 8 ⟹ hiệu mới: 4, 6, 7 (đủ 6 hiệu khác nhau!). Tổng = 1+2+4+8.'
    ],
    answer: '15',
    explanation: 'Bộ 4 số nhỏ nhất là 1, 2, 4, 8.\nSáu hiệu tạo thành: 1, 2, 3, 4, 6, 7 (đều khác nhau).\nTổng nhỏ nhất = 1 + 2 + 4 + 8 = 15.\nĐáp số: 15'
  }
];
