window.VTMO_THEORY = {
  mang1: {
    title: 'Mảng 1: Số học & Chữ số',
    subtitle: 'Tóm tắt phương pháp và mẹo giải nhanh từ Buổi 1',
    sections: [
      {
        title: '1. Đếm số theo dãy cách đều & điều kiện chữ số',
        bullets: [
          'Số số hạng của dãy cách đều = (Số cuối − Số đầu) : Khoảng cách + 1.',
          'Chia hết cho 2: tận cùng chẵn (0, 2, 4, 6, 8).',
          'Chia hết cho 5: tận cùng là 0 hoặc 5.',
          'Chia hết cho 3 (hoặc 9): tổng các chữ số chia hết cho 3 (hoặc 9).',
          'Chia hết cho cả 2, 3 và 5 ⟹ chia hết cho 30 (tận cùng là 0 và tổng chữ số chia hết cho 3).'
        ],
        example: {
          title: 'Ví dụ mẫu (Câu 1 & Câu 4 Mảng 1)',
          text: '• Số chẵn có 2 chữ số lớn hơn 19: bắt đầu từ 20 đến 98, khoảng cách 2.\n  Số số hạng = (98 − 20) : 2 + 1 = 40 (số).\n• Số có 3 chữ số mà tổng các chữ số bằng 6:\n  Hàng trăm = 1 ⟹ 2 chữ số sau tổng là 5 (có 5 + 1 = 6 số).\n  Hàng trăm = 2 ⟹ 5 số; ... Hàng trăm = 6 ⟹ 1 số.\n  Tổng = 6 + 5 + 4 + 3 + 2 + 1 = 21 (số).'
        }
      },
      {
        title: '2. Làm tròn số & Đánh số trang sách',
        bullets: [
          'Quy tắc làm tròn đến hàng chục: chữ số hàng đơn vị là 1, 2, 3, 4 thì giữ nguyên hàng chục; là 5, 6, 7, 8, 9 thì cộng thêm 1 vào hàng chục.',
          'Đánh số trang từ 1:\n  - Trang 1 → 9: 9 trang × 1 chữ số = 9 chữ số.\n  - Trang 10 → 99: 90 trang × 2 chữ số = 180 chữ số (tổng cộng 189 chữ số).\n  - Từ trang 100 trở đi: mỗi trang dùng 3 chữ số.'
        ],
        example: {
          title: 'Ví dụ mẫu (Câu 12 Mảng 1)',
          text: 'Dùng 240 chữ số để đánh số trang từ trang 1:\n• Trang 1–99 dùng: 9 + 180 = 189 chữ số.\n• Số chữ số còn lại cho trang 3 chữ số: 240 − 189 = 51 chữ số.\n• Số trang có 3 chữ số: 51 : 3 = 17 trang.\n• Cuốn sách có: 99 + 17 = 116 trang.'
        }
      },
      {
        title: '3. Số nhỏ nhất có tổng chữ số lớn & Số đối xứng',
        bullets: [
          'Muốn số có ít chữ số nhất (nhỏ nhất) khi biết tổng chữ số S: dùng tối đa các chữ số 9 ở các hàng bên phải, phần dư đặt ở chữ số đầu tiên.',
          'Số đối xứng (Palindrome): đọc xuôi và ngược giống nhau (vd: 42924). Muốn tìm số đối xứng tiếp theo, giữ phần bên trái và tăng chữ số ở chính giữa trước.'
        ],
        example: {
          title: 'Ví dụ mẫu (Câu 13 Mảng 1)',
          text: 'Số nhỏ nhất có tổng các chữ số bằng 2022:\n2022 : 9 = 224 (dư 6).\nVậy số đó gồm chữ số 6 đứng đầu và 224 chữ số 9 theo sau ⟹ có 225 chữ số.'
        }
      },
      {
        title: '4. Lập số từ 3 chữ số & Tổng cấu tạo thập phân',
        bullets: [
          'Với 3 chữ số khác nhau khác 0 (có tổng là S):',
          '• Có 3 số có 1 chữ số: tổng = S.',
          '• Có 6 số có 2 chữ số khác nhau: mỗi chữ số đứng ở hàng chục 2 lần, hàng đơn vị 2 lần ⟹ tổng = (20 + 2) × S = 22 × S.',
          '• Có 6 số có 3 chữ số khác nhau: mỗi chữ số đứng ở hàng trăm, chục, đơn vị 2 lần ⟹ tổng = 222 × S.',
          '• Tổng tất cả các số lập được = (1 + 22 + 222) × S = 245 × S.'
        ],
        example: {
          title: 'Ví dụ mẫu (Câu 10 Mảng 1)',
          text: 'Tổng tất cả các số có 1, 2, 3 chữ số khác nhau lập từ 3 chữ số là 5635.\nTa có: 245 × S = 5635 ⟹ S = 5635 : 245 = 23.'
        }
      },
      {
        title: '5. Phép tính dạng chữ (Cryptarithm) & Hình vuông kỳ diệu',
        bullets: [
          'Các chữ cái khác nhau đại diện cho chữ số khác nhau; chữ số đứng đầu một số khác 0.',
          'Xét từ hàng đơn vị rồi theo dõi phần nhớ / mượn; với phép tính lớn nhất, ưu tiên đặt chữ số lớn nhất (9, 8, 7...) vào chữ cái ở hàng cao nhất.',
          'Hình vuông kỳ diệu 3 × 3 gồm 9 số liên tiếp: Tổng 1 hàng = (Tổng 9 số) : 3, và ô chính giữa luôn bằng trung bình cộng (Tổng 1 hàng : 3).'
        ],
        example: {
          title: 'Ví dụ mẫu (Câu 23 Mảng 1)',
          text: 'Điền các số từ 2 đến 10 vào hình vuông kỳ diệu 3 × 3:\nTổng 9 số = (2 + 10) × 9 : 2 = 54.\nTổng mỗi hàng/cột/đường chéo = 54 : 3 = 18; ô chính giữa = 18 : 3 = 6.'
        }
      }
    ]
  },
  mang2: {
    title: 'Mảng 2: Phép tính & Tính toán thông minh',
    subtitle: '8 dạng trọng tâm và 14 ví dụ mẫu từ Buổi 2',
    sections: [
      {
        title: 'Dạng 1. Thứ tự phép tính và biểu thức',
        bullets: [
          'Thực hiện phép tính trong ngoặc trước; sau đó nhân, chia theo thứ tự từ trái sang phải; cuối cùng cộng, trừ theo thứ tự từ trái sang phải.',
          'Khi biểu thức có nhiều phép tính, kiểm tra thứ tự thực hiện và tìm các nhóm số có thể tính gọn trước.'
        ]
      },
      {
        title: 'Dạng 2. Tính nhanh – Ghép cặp – Tích và thương nhiều bước',
        bullets: [
          'Có thể nhóm các số hạng không đứng cạnh nhau, nhưng phải giữ đúng dấu cộng, dấu trừ của chúng.',
          'Đặt thừa số chung: a × c + b × c = (a + b) × c;  a × c − b × c = (a − b) × c.',
          'Đổi 1 + 1/n = (n + 1)/n để rút gọn các tích phân số nối tiếp (tử và mẫu triệt tiêu).'
        ],
        example: {
          title: 'Ví dụ 1, 2, 3 (Tài liệu Mảng 2)',
          text: '• Ví dụ 1: 29 × 42 + 71 × 42 − 38 × 17 + 38 × 67\n  = (29 + 71) × 42 + 38 × (67 − 17) = 100 × 42 + 38 × 50 = 4200 + 1900 = 6100.\n• Ví dụ 2: S = 385/1 + 385/5 + 385/7 + 385/11 + 385/35 + 385/55 + 385/77 + 385/385\n  Vì 385 = 5 × 7 × 11 nên S = (5 + 1) × (7 + 1) × (11 + 1) = 6 × 8 × 12 = 576.\n• Ví dụ 3: P = 360 × (1 + 1/3) × (1 + 1/4) × ... × (1 + 1/8)\n  = 360 × 4/3 × 5/4 × 6/5 × 7/6 × 8/7 × 9/8 = 360 × 9/3 = 1080.'
        }
      },
      {
        title: 'Dạng 3. Tính ngược và máy xử lí số',
        bullets: [
          'Từ kết quả cuối, thực hiện các phép tính ngược trở lại; nếu có dấu chưa biết, phải xét đủ các khả năng đề cho và loại trường hợp không chia hết (không ra số tự nhiên).',
          'Khi một số nhân với chính nó, xem tích này như một lượng chung để tìm ra giá trị mà không cần dùng ẩn phức tạp.',
          'Với máy số, ghi lần lượt từng bước sau mỗi lần xử lí và đếm đúng số mũi tên.'
        ],
        example: {
          title: 'Ví dụ 4, 5, 6 (Tài liệu Mảng 2)',
          text: '• Ví dụ 4 (Tính ngược): Bình nghĩ số tự nhiên, × 6, rồi (× 2 hoặc : 2), × 3, rồi (+ 15 hoặc − 15) được 60.\n  Thử +15: 60 − 15 = 45; 45 : 3 = 15. Vì 15 không chia hết cho 2 nên trước đó phải là : 2 ⟹ 15 × 2 = 30 ⟹ số ban đầu = 30 : 6 = 5.\n• Ví dụ 5: Số tự nhiên × chính nó rồi × 5 trừ đi chính tích ấy = 196.\n  5 lần tích − 1 lần tích = 4 lần tích ⟹ tích = 196 : 4 = 49 = 7 × 7 ⟹ số đó là 7.\n• Ví dụ 6 (Máy số): chẵn chia 2, lẻ trừ 1. Số 2 chữ số nhỏ nhất cần 7 lần xử lí về 0:\n  15 → 14 → 7 → 6 → 3 → 2 → 1 → 0 (7 lần) ⟹ Đáp số: 15.'
        }
      },
      {
        title: 'Dạng 4. Điền chữ số và phép tính dạng chữ',
        bullets: [
          'Một chữ cái luôn đại diện cho cùng một chữ số; các chữ khác nhau nhận chữ số khác nhau nếu đề yêu cầu.',
          'Xét từ hàng đơn vị, theo dõi số nhớ hoặc mượn sang các hàng tiếp theo; chữ số đầu ≠ 0.'
        ],
        example: {
          title: 'Ví dụ 7: AB + AB + BA = CAA',
          text: 'Hàng đơn vị: B + B + A tận cùng là A ⟹ B + B = 10 ⟹ B = 5, nhớ 1.\nHàng chục: A + A + 5 + 1 tận cùng là A ⟹ A + 6 = 10 ⟹ A = 4, nhớ 1 ⟹ C = 1.\nThử lại: 45 + 45 + 54 = 144.'
        }
      },
      {
        title: 'Dạng 5. Tháp số – Bảng số – Ô vuông kì diệu',
        bullets: [
          'Trong tháp cộng 6 tầng: 6 ô hàng đáy được tính vào đỉnh theo hệ số Pascal: 1 ; 5 ; 10 ; 10 ; 5 ; 1. Muốn đỉnh lớn nhất, đặt 2 số lớn nhất vào 2 ô giữa!',
          'Trong tháp nhân, nhân hai ô liền dưới. Với ô vuông kì diệu, dựa vào tổng chung của hàng, cột và đường chéo.'
        ],
        example: {
          title: 'Ví dụ 8 & 9 (Tài liệu Mảng 2)',
          text: '• Ví dụ 8 (Tháp cộng 6 đáy dùng 1..6): (6 + 5) × 10 + (4 + 3) × 5 + (2 + 1) = 110 + 35 + 3 = 148.\n• Ví dụ 9 (Tháp nhân đáy 2, 3, 2, 4): tầng 2 là 6, 6, 8; tầng 3 là 36, 48; đỉnh = 36 × 48 = 1728. A + B = 48 + 1728 = 1776.'
        }
      },
      {
        title: 'Dạng 6. Tính chẵn – lẻ và tính bất biến',
        bullets: [
          'Tổng hoặc hiệu của hai số cùng tính chẵn – lẻ là số chẵn. Tích có ít nhất một thừa số chẵn là số chẵn.',
          'Khi đổi dấu +a thành −a, tổng giảm đi 2 × a (là số chẵn) nên tính chẵn – lẻ của tổng KHÔNG ĐỔI.'
        ],
        example: {
          title: 'Ví dụ 10: 1 + 2 + ... + 20 đổi một số dấu + thành −',
          text: 'Tổng đầu = (1 + 20) × 20 : 2 = 210 (chẵn).\nMọi kết quả tạo ra đều phải chẵn ⟹ trong {11, 12, 13, 14, 15} chỉ có 12 và 14 là có thể (210 − 2×99 = 12; 210 − 2×98 = 14).'
        }
      },
      {
        title: 'Dạng 7. Trung bình cộng và phân tích thừa số',
        bullets: [
          'Dãy số cách đều có số lượng lẻ thì số chính giữa = trung bình cộng; hai số đối xứng có tổng = 2 × trung bình cộng.',
          'Đếm cách viết N thành tích có tổng thừa số bằng N: phân tích N thành tích các thừa số > 1 theo thứ tự tăng dần, rồi bổ sung đủ số 1 để tổng bằng N.'
        ],
        example: {
          title: 'Ví dụ 11 & 12 (Tài liệu Mảng 2)',
          text: '• Ví dụ 11: TBC 15 số chẵn liên tiếp là 84 ⟹ mỗi cặp đối xứng tổng 168 ⟹ 3 đầu + 3 cuối = 168 × 3 = 504.\n• Ví dụ 12 (Số 24): Các tích > 1 là 24; 2×12; 3×8; 4×6; 2×2×6; 2×3×4; 2×2×2×3 (tổng lần lượt 24, 14, 11, 10, 10, 9, 9) ⟹ bổ sung các số 1 ⟹ có 7 cách.'
        }
      },
      {
        title: 'Dạng 8. Chèn phép tính – Đếm cách – Tối ưu',
        bullets: [
          'Khi chỉ chèn dấu + giữa các chữ số, ghép 2 chữ số a và b thành ab làm tổng TĂNG thêm 9 × a so với a + b!',
          'Dựa vào lượng cần tăng thêm chia cho 9 để tìm tổng các chữ số đứng đầu của các cặp được ghép.',
          'Khi điền đủ 4 dấu +, −, ×, : (không ngoặc), chú ý nhân chia làm trước và chọn tích lớn, thương nhỏ.'
        ],
        example: {
          title: 'Ví dụ 13 & 14 (Tài liệu Mảng 2)',
          text: '• Ví dụ 13 (1 2 3 4 5 6 7 tổng = 82): Tổng gốc = 28, cần tăng 54 = 9 × 6.\n  Tổng chữ số đầu của các cặp ghép = 6 ⟹ chọn {6}, {1;5}, {2;4} ⟹ 3 cách.\n• Ví dụ 14 (24 □ 6 □ 12 □ 3 □ 8 lớn nhất): 24 × 6 − 12 : 3 + 8 = 148.'
        }
      }
    ]
  },
  mang3: {
    title: 'Mảng 3: Dãy số – Quy luật – Chia hết – Số dư',
    subtitle: '9 dạng trọng tâm và 12 ví dụ mẫu từ Buổi 3',
    sections: [
      {
        title: 'Dạng 1. Dãy số cách đều – Truy hồi',
        bullets: [
          'Số hạng thứ n = số đầu + (n − 1) × d.',
          'Số số hạng = (số cuối − số đầu) : d + 1; Tổng dãy = (số đầu + số cuối) × số số hạng : 2.',
          'Khi biết số đầu, số cuối và một số ở giữa, tìm khoảng cách d chung rồi loại d làm xuất hiện số bị cấm.',
          'Dãy truy hồi (Fibonacci): xét tính chẵn – lẻ để thấy chu kỳ lặp mà không cần tính số quá lớn.'
        ],
        example: {
          title: 'Ví dụ 1 & 2 (Tài liệu Mảng 3)',
          text: '• Ví dụ 1: Dãy từ 7 đến 52, có 34, không có 22. Hiệu 34−7=27, 52−34=18 ⟹ d ∈ {1, 3, 9}.\n  22−7=15 chia hết cho 1, 3 nên loại d=1,3 ⟹ chọn d=9 ⟹ Dãy: 7, 16, 25, 34, 43, 52 ⟹ Tổng = 177.\n• Ví dụ 2: Bắt đầu 2, 5 (chẵn, lẻ, lẻ; chẵn, lẻ, lẻ... chu kỳ 3). Trong 91 số: 91 : 3 = 30 dư 1 ⟹ có 30 + 1 = 31 số chẵn.'
        }
      },
      {
        title: 'Dạng 2. Chu kỳ chữ số – Bảng số – Vòng tròn',
        bullets: [
          'Xếp số theo đường zích zắc: xét trọn một lượt đi và về để tìm chu kỳ (ví dụ 7 cột ⟹ chu kỳ 14; 8 cột ⟹ chu kỳ 16).',
          'Với dãy chữ lặp độ dài k, lấy vị trí chia cho k tìm số dư để suy ra chữ cái.',
          'Nếu 2 quy luật lặp cùng xảy ra (ví dụ chia hết 4 và chia hết 3), gộp thành chia hết cho BCNN (chia hết 12).'
        ],
        example: {
          title: 'Ví dụ 3: Xếp zích zắc vào 8 cột A..H, tìm cột của số 149',
          text: 'Một lượt đi và về có 8 × 2 = 16 số.\n149 : 16 = 9 (dư 5) ⟹ cùng cột với số 5 ⟹ Cột E.'
        }
      },
      {
        title: 'Dạng 3. Dãy hình – Que diêm – Tăng trưởng',
        bullets: [
          'Đếm 3–4 hình đầu để tìm công thức theo n (số ô, số que diêm, chu vi). Nếu các ô chung cạnh, không đếm trùng cạnh chung!',
          'Tam giác đều cạnh n ghép từ tam giác cạnh 1 có n × n tam giác nhỏ; chu vi P = 3 × n.',
          'Hình vuông cạnh m ghép từ ô cạnh 1 có m × m ô vuông; chu vi P = 4 × m.'
        ],
        example: {
          title: 'Ví dụ 4 & 5 (Tài liệu Mảng 3)',
          text: 'Tam giác cạnh n và hình vuông cạnh m có tổng chu vi 62 cm.\nMuốn nhiều tam giác nhất ⟹ cạnh hình vuông m nhỏ nhất sao cho (62 − 4m) chia hết cho 3.\nThử m=1 (58, loại); m=2 (54 chia hết 3 ⟹ n = 18) ⟹ có nhiều nhất 18 × 18 = 324 tam giác.'
        }
      },
      {
        title: 'Dạng 4 & 5 & 6. Quy luật chữ số – Hoán đổi – Máy biến đổi',
        bullets: [
          'Xóa nhiều nhất để giữ tổng cho trước ⟹ giữ lại ít chữ số nhất (ưu tiên giữ các chữ số lớn nhất).',
          'Hoán đổi 2 vật kề nhau để xếp xen kẽ: tính tổng khoảng dịch chuyển của từng vật đen đến vị trí mục tiêu (1,3,5... hoặc 2,4,6...), chọn cách ít lượt hơn.',
          'Máy thay (a, b, c) bằng 2(a+b), 2(b+c), 2(a+c): sau MỖI lượt, hiệu giữa số lớn nhất và số nhỏ nhất GẤP ĐÔI!'
        ],
        example: {
          title: 'Ví dụ 6, 7, 8 (Tài liệu Mảng 3)',
          text: '• Ví dụ 6 (2024 lặp 20 lần = 80 chữ số, tổng còn 34): giữ 8 số 4 và 1 số 2 = 9 chữ số ⟹ xóa 80 − 9 = 71 chữ số.\n• Ví dụ 7 (5 đen rồi 5 trắng): đưa đen về vị trí 1,3,5,7,9 tốn 0+1+2+3+4 = 10 lượt.\n• Ví dụ 8 ({1, 4, 8} qua 5 lượt): hiệu đầu = 7 ⟹ sau 5 lượt = 7 × 2⁵ = 224.'
        }
      },
      {
        title: 'Dạng 7, 8, 9. Chia hết – Ước bội – Phép chia có dư',
        bullets: [
          'Chia hết cho 4: xét 2 chữ số cuối. Chia hết cho 8: xét 3 chữ số cuối.',
          'Chia đều vào túi: tổng số = số túi × số đồ/túi ⟹ liệt kê các cặp tích.',
          'Bài toán xếp hàng có dư: "thêm vào ít bạn để hàng cuối vừa đủ" giúp đưa 2 cách xếp về cùng chia hết hoặc dùng phần dư: Số bị chia = Số chia × Thương + Số dư (0 ≤ dư < số chia).'
        ],
        example: {
          title: 'Ví dụ 9, 10, 11, 12 (Tài liệu Mảng 3)',
          text: '• Ví dụ 9: 7A4B chia hết 8 và 9 ⟹ A+B ∈ {7, 16}, B chẵn, 4B chia hết 4 ⟹ thử tìm được 7344 (A=3, B=4).\n• Ví dụ 11: 180 viên bi chia đều (túi ≥ 2, mỗi túi ≥ 3 bi) ⟹ 15 cách.\n• Ví dụ 12 (Xếp hàng 10 dư 7, xếp 14 dư 11, ít hơn 2 hàng): Thêm 3 bạn thì đủ cả hai ⟹ chênh 2 hàng = 20 bạn ⟹ số hàng 14 là 20 : (14−10) = 5 hàng ⟹ 14 × 5 − 3 = 67 bạn.'
        }
      }
    ]
  }
};
