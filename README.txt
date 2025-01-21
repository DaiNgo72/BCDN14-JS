# Javascript
- dành cho web
- chạy trên web
# Thẻ script: <script></script>
- Đặt ở cuối file html

# Cách khai báo biến
- dùng từ khóa: let, ...
- kiểu đặt tên biến: camelCase, snake_case, ...
- hằng số thì dùng từ khóa: "const" để khai báo: UPPER_SNAKE_CASE, SCREAMING_SNAKE_CASING.

# `=` trong lập trình
- là phép gán giá trị. ✅
- không phải là phép so sánh trong toán học. ❌

# Cách trình duyệt thực hiện
- Đọc 1 file từ trên xuống dưới. 1->2->3->4...-> dòng cuối file.
- Biểu thức: thực hiện từ trái sang phải. Tương tự toán học.

- Bỏ qua không thực thi những dòng chú thích.

- B1: kiểm tra syntax. ✅
- B2: thực thi.

# Dấu `;`
- Không bắt buộc.
- Không cần dùng `;` để kết thúc một câu lệnh.
- Nhưng vẫn nên dùng để thân thuộc với những ngôn ngữ khác.

# Function
- Khi gặp function thì vào function thực hiện hết tất cả câu lệnh, xong mới thoát khỏi function và đi đến câu lệnh tiếp theo
## Tham số
- Giúp function có thể tái sử dụng.
- Linh động hơn.

## Return
- Giá trị trả về của function
- Chỉ được phép return về 1 giá trị duy nhất

## Trường hợp sử dụng
- Tách ra từng khối nhỏ.
- Tách nhỏ logic để tái sử dụng.


# Scope
- local: function
- global: ở ngoài function

# getElementById
- lấy 1 element trên HTML bằng JS
- lấy để tương tác: đổi thuộc tính gì đó, hoặc là thêm event

# Lấy giá trị người dùng nhập vào ô input thông qua .value

# Mọi giá trị lấy từ trên giao diện về luôn luôn là string

# Select - Option
- Nếu như option không có attr là value thì nó sẽ lấy giá trị là nội dung của option

- Nếu như option có attr value thì nó sẽ lấy giá trị attr value của option

# Để lấy được giá trị của bất kỳ thuộc tính nào của element
let pEle = document.getElementById('p-1')
let pComputed = window.getComputedStyle(pEle);

pComputed.getPropertyValue('font-size');

# Cứ thấy dấu {}
- Một block, một scope mới.

# So sánh chuỗi
- So sánh từng ký tự 1.
- Dựa vào bảng mã ASCII (https://www.ascii-code.com/)

# Kết hợp điều kiện
- 8 <= diem <= 10: ❌
- 8 <= diem && diem <= 10: ✅
- &&: tất cả cùng đúng thì mới đúng
- ||: chỉ cần 1 cái đúng thì đúng

- &: toán tử bit
- |: toán tử bit

# So sanh ==. (Không nên dùng)
- B1: Nếu khác kiểu thì chuyển về cùng kiểu. (ép kiểu ngầm)
- B2: So sánh.

# So sanh ===. (Dùng để code an toàn hơn)
- B1: Nếu khác kiểu thì sai, cùng kiểu thì tiếp tục.
- B2: So sánh.

# Break
- Giúp dừng lại không chạy xuống những case khác trong switch case

# If Else
- Khoảng giá trị

# Switch Case
- So sánh bằng

# Return Function
- Khi function có return rồi hay là đã biết giá trị của function là gì rồi. Thì nó sẽ không xử lý những đoạn logic bên dưới nữa.

# Đệ quy
- function gọi function
- phải có điều dừng
- function chỉ dừng khi nó tìm thấy giá trị của nó hay còn gọi là có return

# Vòng lặp
- Lặp đi lặp lại 1 việc gì đó
- Đến khi dk lặp bị sai thì dừng

## while
## do while
## for


# Cộng string rớt xuống dòng
- "\n" giống như thể br để rớt dòng


# continue
- skip qua những dòng phía dưới và chạy vòng lặp tiếp theo

# break
- lặp: thoát khỏi vòng lặp

# return

# Khai báo biến?
| 2 Cách
- let
- const

# Biến dùng để làm gì?
- lưu giữ giá trị

# Những kiểu dữ liệu nào mình có thể lưu được trong biến
- number, string, boolean, null, undefined, function 

# Biến đang lưu trữ
- lưu trữ được 1 giá trị duy nhất

# Array
- lấy số lượng phần tử
    + .length
- lấy tại vị trí index nào đó
    + [ index ]
- lấy tại vị trí cuối cùng trong mảng
    + [.length - 1]
    + .at(-1)
- Xoá 1 phần tử
    + delete
- Cập nhật giá trị tại vị trí index
    + mang[index] = giá trị mới