let hv1 = "Trường";
let hv2 = "Huy";
let hv3 = "Bảo";
let hv4 = "Vũ";

// Khai báo mảng (array): [ truyền cac phần tử vào đây ]
let danhSachSv = [hv1, hv2, hv3];
// làm sao biết được tống số sv trong lớp
console.log(danhSachSv.length);
console.log("danhSachSv truoc khi them moi", danhSachSv);
// làm sao biết được người đứng đầu lớp là ai?

let hv5 = "Tri";
// thêm học viên mới vào mảng
danhSachSv.push(hv5);
console.log("danhSachSv sau khi them moi", danhSachSv);

// kiểm tra lại số lượng học viên trong lớp
console.log(danhSachSv.length);

// lấy ra học viên đứng đầu lớp
console.log(danhSachSv[0]);
// lấy ra học viên ở vị trí index = 2
console.log(danhSachSv[2]);
// lấy ra học viên ở vị trí index = 100
console.log(danhSachSv[100]);

// Lấy danh sách sinh viên cuối cùng trong mảng
// không dùng danhSachSv[3]
console.log(danhSachSv[danhSachSv.length - 1]);

// Lấy danh sách sinh viên cuối cùng trong mảng
console.log(danhSachSv.at(-1));
// Lấy sinh viên ở index = 2;
console.log(danhSachSv.at(2));


// Xoá giá trị ở vị trí index = 1;
delete danhSachSv[1];
console.log("danhSachSv sau khi xoa", danhSachSv);

// Thay đổi giá trị ở vị trí index = 1;
danhSachSv[1] = "Vũ";
console.log("danhSachSv sau khi cập nhật vị trí index = 1", danhSachSv);

console.log("danhSachSv truoc khi cập nhật", danhSachSv);
// Cập nhật lại vị trí Trường sẽ là vị trí cuối cùng
danhSachSv[danhSachSv.length - 1] = hv1;
// Cập nhật lại "Trí" ở vị trí đầu tiên
danhSachSv[0] = hv5;

console.log("danhSachSv sau khi cập nhật", danhSachSv);

/**
 * 1. Khai báo mảng danhSachSv
 * 2. Thêm học viên mới vào mảng
 * 3. Lấy ra học viên
 * 3.1 Lấy ra học viên đứng đầu lớp
 * 3.2 Lấy ra học viên ở vị trí index bất kỳ
 * 3.3 Lấy ra học viên cuối cùng trong lớp
 * 4. Xoá học viên ở vị trí index bất kỳ
 * 5. Cập nhật học viên ở vị trí index bất kỳ
 * 6. Kiểm tra số lượng học viên trong lớp
 * 
 * 7. Duyệt qua từng phần tử của mảng
 * 8. Thêm học viên mới vào mảng
 * 8.1 Thêm học viên vào vị trí cuối cùng
 * 8.2 Thêm học viên vào vị trí index bất kỳ
 * 8.3 Thêm học viên vào vị trí đầu tiên
 * 
 * ** Lưu ý **
 * - Mảng trong javascript có thể chứa nhiều kiểu dữ liệu khác nhau
 * - index trong mảng bắt đầu từ 0
 * - dùng index để truy cập vào phần tử trong mảng
 * - xoá thì chỉ xoá giá trị, không cập nhật lại chiều dài của mảng
 * 
 * 
 */



// 7. Duyệt qua từng phần tử của mảng
for (let i = 0; i <= danhSachSv.length - 1; i++) {
    // cứ mỗi lần i tăng lên, lấy ra 1 phần tử trong mảng
    // i: 0, 1, 2, 3, 4
    console.log(danhSachSv[i]);

    // Kiểm tra xem phần tử đó có phải là Trường không
    if (danhSachSv[i] === hv1) {
        console.log("Trường đứng ta vị trí index = ", i);
    }
}
// Lấy ra vị trí index của thằng Trường

// 8. Thêm học viên mới vào mảng
// 8.1 Thêm học viên vào vị trí cuối cùng
console.log("[PUSH] danhSachSv truoc khi them vao cuoi mang", danhSachSv);
danhSachSv.push("Khoa");
danhSachSv.push("1");
danhSachSv.push("2");
console.log("[PUSH] danhSachSv sau khi them vao cuoi mang", danhSachSv);
// 8.2 Thêm vào vị trí đầu mảng

console.log("[unshift] danhSachSv truoc khi them vao dau mang", danhSachSv);
danhSachSv.unshift("Kiệt");
danhSachSv.unshift("3");
danhSachSv.unshift("4");
console.log("[unshift] danhSachSv sau khi them vao dau mang", danhSachSv);


// -------------------------------
// -------------------------------
let danhSachTodo = [
    "Hoàn thành bài tập 1",
    "Hoàn thành bài tập 2",
    "Hoàn thành bài tập 3",
];

// render danh sách lên giao diện
// 1. Duyệt qua từng phần tử của mảng.
// 2. Tạo ra tất cả thẻ li ứng với từng giá trị của mảng
/**
 * `<li>Hoàn thành bài tập 1</li>
 * <li>Hoàn thành bài tập 2</li>
 * <li>Hoàn thành bài tập 3</li>
 * `
 */
// 3. .innerHTML = stringHTML

function generateLiDanhSachTodo() {
    let content = "";

    for (let i = 0; i < danhSachTodo.length; i++) {
        console.log(danhSachTodo[i]);
        // let li = "<li>" + danhSachTodo[i] + "</li>"

        let li = `<li> ${danhSachTodo[i]} </li>`
        content += li;
    }

    return content;
}

let ulEle = document.getElementById('list');

function renderDanhSachTodo() {
    let content = generateLiDanhSachTodo();

    ulEle.innerHTML = content;
}

renderDanhSachTodo();

/**
 * Bổ sung code thiếu
 */
// thêm công việc: "học array trong js" vào cuối mảng todo
danhSachTodo.push("học array trong js");
console.log("danhSachTodo:::", danhSachTodo);
// Hiển thị ra giao diện
renderDanhSachTodo();
// ...
// ...

/**
 * Mong muốn
 * thêm công việc ưu tiên: "Dọn dẹp bàn học" vào đầu mảng
 */

danhSachTodo.unshift("Dọn dẹp bàn học");
// ....
renderDanhSachTodo();

function handleAddTodo() {
    console.log("click");

    let todoInp = document.getElementById('input');
    let todo = todoInp.value;

    if (todo.trim().length === 0) {
        alert("Không được để trống ô input");
        return;
    }


    // Thêm todo vào mảng
    danhSachTodo.unshift(todo);

    // Render lại giao diện (re-render)
    renderDanhSachTodo();


    /**
     * Sau khi add xong thì
     * - xoá đi giá trị trong ô input
     * - focus lại ô input
     */

    todoInp.value = "";
    // Focus vào todo input
    todoInp.focus();
}

// Khi keydown gọi thì có truyền cho mình 1 tham số event
// Cho lắng nghe sự kiện keydown của người dùng cho ô input
document.getElementById('input').onkeydown = function (event) {
    console.log("event:::", event);

    // Nếu người dùng nhấn enter thì add todo vào
    if (event.key === "Enter") {
        handleAddTodo();
    }

}


// Làm sao để xoá đi phần tử cuối mảng
let numbers = [1, 2, 3, 4, 5, 6, 7];
// delete numbers[numbers.length - 1]
// console.log(numbers.length); // ??? 3

// Xoá cuối
numbers.pop();
console.log('danh sach numbers sau khi xoa cuoi', numbers);

// Xoá đầu
numbers.shift(); // shift dịch chuyển đi, xoá
console.log('danh sach numbers sau khi xoa dau', numbers);

// --------------------------
numbers = [1, 2, 3, 4, 5, 6, 7];
console.log('numbers :::', numbers);
// splice
// tham số 1: vị trí index bắt đầu mình muốn xoá,
// tham số 2: số phần tử mình muốn xoá từ vị trí bắt đầu
numbers.splice(2, 3);
console.log("numbers sau khi dung splice(2,3)", numbers);

// -------------------------
numbers = [1, 2, 3, 4, 5, 6, 7];
console.log('numbers :::', numbers);

// mong muốn xoá số 5 và 6
numbers.splice(4, 2)
console.log("numbers sau khi dung splice(4,2)", numbers);

// ------------------------
numbers = [1, 2, 3, 4, 5, 6, 4, 7];
console.log('numbers :::', numbers);

// xoá phần tử có giá trị là 4

// 1. tìm vị trí của giá trị 4
// mình không biết giá trị 4 ở vị trí nào hết, phải for duyệt từ đầu đến cuối

let indexOf4 = -1;

// lấy index của phần tử tìm thấy đầu tiên.
for (let i = 0; i < numbers.length; i++) {

    console.log(numbers[i]);

    if (numbers[i] === 4) {
        indexOf4 = i;

        // Sau khi tìm thấy xong thì dừng luôn vòng lặp
        break;
    }

}


// 2. .splice để xoá
// Nếu như khác -1 có nghĩa là đã tìm thấy giá trị index
if (indexOf4 !== -1) {
    numbers.splice(indexOf4, 1);
}

console.log("numbers sau khi xoa gia tri 4 :::", numbers);

// --------------------
numbers = [1,2,3,4,5,6,7];
console.log('numbers truoc', numbers);

// [1,2,3,9,4,5,6,7]
// Tại vị trí index = 3, không xoá, mà chỉ thêm vào giá trị 9
numbers.splice(3, 0, 9);

console.log("numbers sau", numbers);


// --------------------
numbers = [1,2,3,4,5,6,7];
console.log('numbers truoc', numbers);

// [1,2,3,4,5,6,9,7]
numbers.splice(6,0,9);
console.log("numbers sau", numbers);



// --------------------
numbers = [1,2,3,4,5,6,7];
console.log('numbers truoc', numbers);

// [1,2,9,3,4,5,6,7]
// Thêm số 9 vào vị trí phần tử có giá trị 3
let idx = -1;

for(let i=0; i<numbers.length; i++){
    let item = numbers[i];

    if(item === 3){
        idx = i;
        break;
    }

}

if(idx !== -1) {
    numbers.splice(idx, 0, 9);
}


