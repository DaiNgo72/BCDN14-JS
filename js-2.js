console.log("hello world");

// ----------------------------------------------
/**
 * 1. Cách lấy 1 element trong HTML
 * 1.1 Bằng id: document.getElementById(<id>);
 * - Nếu tìm thấy thì trả về element;
 * - Nếu không tìm thấy thì trả về null;
 * (*) null là 1 giá trị trong js.
 */

// Đổi thẻ h2 thành chữ "Hello World"

// b1: Lấy element h2
let h2Ele = document.getElementById('h2');
console.log(h2Ele);

// b2: Thay đổi nội dung của element đó

// lấy ra nội dung của thẻ h2
// Câu lệnh: gán giá trị của h2Ele.textContent cho biến h2Content
let h2Content = h2Ele.textContent;
console.log(h2Content);


// thay đổi nội dung của thẻ h2
// Câu lệnh: gán giá trị "Hello World" cho h2Ele.textContent
h2Ele.textContent = "Hello World";

// ----------------------------------------------
let age_1 = 20;
// Câu lệnh: gán giá trị của biến age_1 cho biến age_2
let age_2 = age_1;

// Câu lệnh: gán giá trị 30 cho biến age_1
age_1 = 30;

// ----------------------------------------------
/**
 * Bài tập 1:
 * 1. Gắn sự kiện click cho element
 * - lấy element
 * - gắn sự kiện
 */

let box1Ele = document.getElementById('box-1');
let box2Ele = document.getElementById('box-2');
let box3Ele = document.getElementById('box-3');
let box4Ele = document.getElementById('box-4');

// Sau khi lấy element từ trên giao diện xong, phải kiểm tra xem có lấy được hay không.
console.log(box1Ele);
console.log(box2Ele);
console.log(box3Ele);
console.log(box4Ele);

// Tiếp tục xử lý

// Tạo 1 hàm xử lý sự kiện click cho box1Ele
function handleClickBox1() {
    let bgc = "#a4373a";
    let text = "Access";

    let changeBx = document.getElementById('change-box');

    changeBx.style.backgroundColor = bgc;

    // changeBx.style.color = 'white';
    // changeBx.style.fontSize = "50px";
}

box1Ele.onclick = handleClickBox1;
// gắn cho các box còn lại

function handleClickBox2() {
    let bgc = "#0078d4";
    let text = "Exchange";

    // Nếu muốn thay đổi hay tương tác với 1 element nào đó bất kỳ thì phải lấy được element đó ra.
    // 1. Lấy ra element
    let changeBox = document.getElementById('change-box');
    console.log(changeBox);

    // 2. Thay đổi nội dung của element đó
    changeBox.textContent = text;

    // 3. Thay đổi màu nền của element đó
    // css: background-color
    // js: backgroundColor

    // Câu lệnh: gán giá trị của biến bgc cho -> changeBox.style.backgroundColor
    changeBox.style.backgroundColor = bgc;
    // Câu lệnh: gán giá trị "red" cho -> changeBox.style.color
    changeBox.style.color = "red";
}

box2Ele.onclick = handleClickBox;

function handleClickBox3() {
    let bgc = "#217346";
    let text = "Excel";

    // Nếu muốn thay đổi hay tương tác với 1 element nào đó bất kỳ thì phải lấy được element đó ra.
    // 1. Lấy ra element
    let changeBox = document.getElementById('change-box');
    console.log(changeBox);

    // 2. Thay đổi nội dung của element đó
    changeBox.textContent = text;

    // 3. Thay đổi màu nền của element đó
    // css: background-color
    // js: backgroundColor

    // Câu lệnh: gán giá trị của biến bgc cho -> changeBox.style.backgroundColor
    changeBox.style.backgroundColor = bgc;
    // Câu lệnh: gán giá trị "red" cho -> changeBox.style.color
    changeBox.style.color = "red";
}

box3Ele.onclick = handleClickBox;
box4Ele.onclick = handleClickBox;


function handleClickBox(event) {
    // event.target: lấy ra element mà đã gắn sự kiện
    // element mà mình click vào
    console.log(event.target);

    let ele = event.target;

    let bgc = ele.style.backgroundColor; // #0078d4
    let text = ele.textContent; // Exchange

    // ----------------------------------------------

    // Nếu muốn thay đổi hay tương tác với 1 element nào đó bất kỳ thì phải lấy được element đó ra.
    // 1. Lấy ra element
    let changeBox = document.getElementById('change-box');
    console.log(changeBox);

    // 2. Thay đổi nội dung của element đó
    changeBox.textContent = text;

    // 3. Thay đổi màu nền của element đó
    // css: background-color
    // js: backgroundColor

    // Câu lệnh: gán giá trị của biến bgc cho -> changeBox.style.backgroundColor
    changeBox.style.backgroundColor = bgc;
    // Câu lệnh: gán giá trị "red" cho -> changeBox.style.color
    changeBox.style.color = "red";
}

let changeBx = document.getElementById('change-box');

changeBx.style.backgroundColor = "blue";
changeBx.style.color = 'white';
changeBx.style.fontSize = "50px";

// ----------------------------------------------
// https://picsum.photos/id/300/500

let btnRandom = document.getElementById('btn-random');

function handleClickRandom() {
    // random 1 số từ 0 -> 1 
    // 0 <= rand < 1
    // 0 * 400 <= x < 401
    // 0 -> 400
    let rand = Math.random() * 301;
    let randInt = Math.floor(rand);

    let imgEle = document.getElementById('img');

    let src = "https://picsum.photos/id/" + randInt + "/500";
    // https://picsum.photos/id/ 300 /500
    imgEle.src = src;
}

// btnRandom.onclick = handleClickRandom;

// câu lệnh: chạy function handleClickRandom sau 5s. Chạy 1 lần duy nhất.
setTimeout(handleClickRandom, 5 * 1000); // 5s = 5000ms

// câu lệnh: chạy function handleClickRandom sau mỗi 5s. Chạy liên tục.
setInterval(handleClickRandom, 5 * 1000);

// ----------------------------------------------
/**
 * # function 
 */

/**
 * 1. Khai báo function
 * Cú pháp:
 * function <tên_function>() {
 *    // code xử lý
 * }
 * 
 * - từ khoá function
 * - tên_function: tên của function
 * - (): nơi truyền tham số
 * - {}: nơi chứa code xử lý
 * 
 * 
 * 2. Gọi function
 * - Cú pháp: <tên_function>();
 */

function tinhDienTich() {
    //   1. Tóm tắt
    // câu lệnh: tạo một biến tên chieuDai gán cho nó giá trị 20;
    let chieuDai = 20;
    let chieuRong = 5;
    //   2. Công thức
    /** 
     * câu lệnh: 
     * - tạo một biến tên dienTich có giá trị là bằng kết quả của phép tính: chieuDai * chieuRong
     * - tính toán vế phải trước. Có kết quả gán cho vé trái
     * */

    let dienTich = chieuDai * chieuRong; // 20 * 5 => 100

    console.log(dienTich);
}

// Khai báo function tên là tính vận tốc.
function tinhVanToc() {
    // 1. Tóm tắt
    let vanToc = 60;
    let khoangCach = 90;

    // 2. Công thức
    let thoiGian = khoangCach / vanToc;

    console.log(thoiGian);
}

function print() {
    console.log("--------------------");
    console.log("--------------------");
}

// Gọi function
// thực thi function tinhDienTich
// execute function tinhDienTich
// chạy function tinhDienTich  
tinhVanToc();

print();

tinhDienTich();

print();

tinhDienTich();

print();

// ----------------------------------------------
/**
 * scope (phạm vi) của biến
 * - global scope: biến được khai báo ngoài function
 *      + có thể sử dụng ở mọi nơi trong file js
 * - local scope: biến được khai báo trong function
 *      + chỉ được sử dụng bên trong function đó
 */

// global scope
let fullName = "Nguyen Van A";
let age = 30;

function f() {
    // local scope
    let age = 20;

    console.log("[local]", age); // 1
    console.log("[local]", fullName); // 2
}

f();


// console.log('[global]', age); // ❌ error, tại vì biến age được khai báo trong function f nên nó là local scope, chỉ sử dụng được trong function f
console.log('[global]', fullName); // 3



// ----------------------------------------------
function f2() {
    console.log('4')
    console.log('5')
    console.log('6')
}

console.log('1')
console.log('2')
f2();
console.log('3')

// ----------------------------------------------
let addr = "Ha Noi";
function f3() {
    console.log(addr); // "Ha Noi"
    addr = "HCM";
    console.log(addr); // 1 ???
}
f3();
console.log(addr); // 2 ???

const PI = 3.14;