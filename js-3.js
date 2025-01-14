// Viết một hàm chuyển đổi từ giờ sang phút

function hourToMinute1() {
    let hour = 6;
    let rate = 60;
    let minute = hour * rate;

    console.log(minute);
}

// hour: tham số của function
// giúp người dùng truyền giá trị từ bên ngoài vào bên trong function
// đặt tên gì cũng được
function hourToMinute2(hour) {
    let rate = 60;
    let minute = hour * rate;

    console.log(minute);
}


function hourToMinute3(hour) {
    let rate = 60;
    let minute = hour * rate;

    // Giá trị của function là kết quả return
    // return gia_tri_cua_function
    return minute;
}

// // chuyển đổi 6h
// hourToMinute1();

// // chuyển đổi 5h
// hourToMinute1();

// // chuyển đổi 3h
// hourToMinute1();

// // chuyển đổi 6h
// hourToMinute2(6); // hour = 6
// console.log("Từ h chuyển sang phút là:", 360)

// // chuyển đổi 5h
// hourToMinute2(5); // hour = 5
// console.log("Số phút là:", 300)

// // chuyển đổi 3h
// hourToMinute2(3); // hour = 3
// console.log("Phút:", 180)


// chuyển đổi 6h

let hour = 6;
// Câu lệnh: tạo biến rs1 có giá trị là giá trị của function
let rs1 = hourToMinute3(6); // 360
console.log("Từ h chuyển sang phút là:", rs1)

// chuyển đổi 5h
let rs2 = hourToMinute3(5); // hour = 5
console.log("Số phút là:", rs2)

// chuyển đổi 3h
let rs3 = hourToMinute3(3); // hour = 3
console.log("Phút:", rs3)


// -------------------
// tạo 1 function tính tổng 2 số

function tinhTong2So(a, b) {
    return a + b;
}

console.log(
    // a=3; b=5
    tinhTong2So(3, 5)
)

console.log(
    // a=5; b=9
    tinhTong2So(5, 9)
)

// Lấy button trên giao diện
const btn1 = document.getElementById('btn-1');

// Gán sự kiện onclick cho btn1
function handleTinhTong() {
    let aElement = document.getElementById('a');
    let bElement = document.getElementById('b');

    // Lấy giá trị người dùng nhập vào ô input thông qua .value
    let aValue = aElement.value;
    let bValue = bElement.value;

    // Ép kiểu, chuyển từ kiểu dữ liệu string -> number
    let a = Number(aValue);
    let b = Number(bValue);


    let kq = tinhTong2So(a, b);// tinhTong2So(10, 20); // 30

    // ---------
    let kqElement = document.getElementById('kq-1');

    // "Tổng 2 số là: " + 
    kqElement.textContent = kq;
}

btn1.onclick = handleTinhTong;

// -------------------------

function getImgById(id) {
    return "https://picsum.photos/id/" + id + "/200/200";
}

function timKiemAnh() {
    let inputEle = document.getElementById('id-img');

    // Lấy giá trị ô input do người dùng nhập vào
    let id = inputEle.value; // 211

    let src = getImgById(id);

    let imgEle = document.getElementById('src-img');

    // thay đổi attr của img bằng giá trị của biến src
    imgEle.src = src;
}

function handleHidden() {
    let passwordEle = document.getElementById('password');
    passwordEle.type = "password";
}

function handleShow() {
    let passwordEle = document.getElementById('password');
    passwordEle.type = "text";
}

// --------------------

function render(count) {
    let countEle = document.getElementById('count');
    countEle.textContent = count;
}


function handleIncre() {
    // làm sao biết giá trị hiện tại
    let countEle = document.getElementById('count');
    let countValue = countEle.textContent;
    let count = Number(countValue);

    render(count + 1);
}

function handleReset() {
    render(0);
}

function handleIncreByStep() {
    let countEle = document.getElementById('count');
    let countValue = countEle.textContent;
    let count = Number(countValue);

    let inpEle = document.getElementById('step');
    let inpValue = inpEle.value;
    let step = Number(inpValue);

    render(count + step);
}

function handleIncreByStep2() {
    let countEle = document.getElementById('count');
    let countValue = countEle.textContent;
    let count = Number(countValue);


    // --- lấy giá trị của element select ---
    let selectEle = document.getElementById('select');
    let selectValue = selectEle.value;
    let step = Number(selectValue);

    render(count + step);
}

// ----------------------------------
function renderTangGiamFontSize(fontSize) {
    let pEle = document.getElementById('p-1');

    pEle.style.fontSize = fontSize + 'px';
}


// Tạo biến fontSize ở global, không tạo bên trong function, vì mỗi lần gọi function thì sẽ tạo lại tất cả. Nên mình phải tạo biến global để không bị ảnh hưởng khi gọi function.
let fontSize = 16;

function handleTangFontSize() {
    // Gán lại giá trị fontSize global = fontSize hiện tại + thêm 1 đơn vị
    fontSize = fontSize + 1;

    renderTangGiamFontSize(fontSize);
}

function handleGiamFontSize() {
    fontSize = fontSize - 1;

    renderTangGiamFontSize(fontSize);
}

// Để lấy được giá trị của bất kỳ thuộc tính nào của element
let pEle = document.getElementById('p-1')
let pComputed = window.getComputedStyle(pEle);

pComputed.getPropertyValue('font-size');

// ----------------------------------------------------------


// age = age + 1;
// age += 1;
// age++; // tăng 1 đơn vị
// ++age; // tăng 1 đơn vị

// age = age - 1;
// age -= 1;
// age--;
// --age;

// age = age * 2;
// age *= 2;

let age = 20;

let rs_1 = age++; // lấy giá trị hiện tại của age 
// age mới tăng 1
console.log("rs_1: ", rs_1)
console.log("age: ", age)

let rs_2 = ++age; // tăng ngay tại dòng này luôn
console.log("rs_2: ", rs_2)
console.log("age: ", age)



