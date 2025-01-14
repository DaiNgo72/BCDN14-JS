// câu lệnh: hiển thị dòng chữ "hello world" ở cửa sổ console
console.log("hello world");

// Dòng lỗi ❌
// console.log(;
// throw new Error("!!!!!!!!!!");

/**
 * Một mảnh đất có chiều dài = 20m và chiều rộng = 5m. Hãy tính diện tích của nó.
 **/
// Diện tích = chiều dài * chiều rộng = 20 * 5 = 100 (m2)

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

/**
 * Cho vận tốc 60(km/h) và khoảng cách (km) từ Đà Nẵng ra Huế là 90km. Hãy tính thời gian di chuyển (giờ).
 */

// 1. Tóm tắt
let vanToc = 60;
let khoangCach = 90;

// 2. Công thức
let thoiGian = khoangCach / vanToc;

function tinhThoiGian(khoangCach, vanToc) {
    // let khoangCach, vanToc;

    let thoiGian = khoangCach / vanToc;

    return thoiGian;
}

let time = tinhThoiGian(khoangCach, vanToc);

console.log(time);

console.log(thoiGian);

/** 
 * dùng để note nhiều dòng
 */

/**
 * BT1: Cho nhiệt độ 24℃. Hãy chuyển đổi nó sang Fahrenheit với công thức: F = C * 9/5 + 32
 */
let doC = 24;

let doF = doC * 9 / 5 + 32;

// Hiển thị nhiều giá trị bằng 1 dòng console
console.log(doC, "Độ C là = ", doF, "Độ F");

// Nối các giá trị lại với nhau
let ketQua = doC + " Độ C là = " + doF + " Độ F.";

console.log(ketQua);

function chuyenDoFSangC(doF) {
    let doC = (doF - 32) / (9 / 5);

    return doC;
}

console.log(chuyenDoFSangC(100));

/**
 * BT2: 4 giờ là bao nhiều phút?
 */

let gio = 8;

// constant: bất di bất dịch
const MOT_GIO_PHUT = 60;

let phut = gio * MOT_GIO_PHUT;

let ketQua2 = gio + " Giờ = " + phut + " Phút.";

console.log(ketQua2);

//--------------------------
let ten = "Abc";
let ho = "Nguyen";
let tenLot = "Van";

// In ra đầy đủ họ tên

let hoVaTen = ho + " " + tenLot + " " + ten;

console.log(hoVaTen);


// -------------------------
/**
 * Kiểu dữ liệu: Data Types, Data Values
 * - Number: 1,2,3,4,23523453,523452345,2345235234523
 * - String: "ababà", "fádfád", 'fádfádf', 'ffádfád', .....
 *  + dùng dấu " " hoặc ' '.
 * 
 * 
 * -> "20", '30', ...
 * -> 32
 * 
 * -> sdt: "0912345678"
 * "000000000000000000001"
 */
// -------------------------
/**
 * let vs const:
 * - let: 
 *  + có thể thay đổi giá trị hay gán lại giá trị mới cho biến đó.
 * 
 * - const:
 *  + không thể thay đổi giá trị của biến đó.
 * 
 * 
 * **Note:
 * - Không khai báo trùng tên biến.
 * - JS phân biệt biến có chữ hoa và chữ thường.
 */

let age = 20;
age = 21;

// Hiển thị ra giá trị của biến age
console.log(age);
// -------------------------
// -------------------------
const age2 = 20;
// age2 = 21; // ❌

// let age2;// ❌

let x1;
let X1;
// -------------------------
/**
 * BT: Tính chu vi hình tròn có bán kính là 5cm.
 * 
 * 2 * pi * r
 */

const PI = 3.14159;

let r = 5;
let chuVi = 2 * PI * r;

// let ketQua3 = "Chu vi hình tròn có bán kính 5cm = " + chuVi + "cm";
// console.log(ketQua3);

console.log("Chu vi hình tròn có bán kính 5cm = " + chuVi + "cm");

/**
 * Phòng Elon Musk có diện tích 10(m²) và chiều dài là 2m. Một viên gạch hình vuông có cạnh 50cm. Hãy tính số lượng viên gạch cần thiết cho phòng Musk.
 * 
 * 1m       100cm
 * 0.5m     50cm
 */

let canhVienGach = 0.5
let dienTichVienGach = canhVienGach * canhVienGach;
let dienTichCanPhong = 10;

let soVienGachCanThiet = dienTichCanPhong / dienTichVienGach;

console.log(soVienGachCanThiet);

// -----------------------------
/**
 * Số_nhà 
 * Tên_đường
 * Thành_phố
 * 
 * địa chỉ: nhà số <Số_Nhà>, đường <Tên_đường>, Thành Phố <Thành_phố>.
 */

let soNha = "26-50";
let tenDuong = "Tống Phước Phổ";
let thanhPho = "Đà Nẵng";

let diaChi = "nhà số " + soNha + ", đường " + tenDuong + ", Thành Phố " + thanhPho + ".";

console.log(diaChi);
// -----------------------------
// typeof để kiểm tra kiểu dữ liệu
console.log(typeof diaChi);
console.log(typeof soVienGachCanThiet);

console.log(typeof (5 + ""))// ? number hay string
/**
 * number + string => string
 */

// -----------------------------
console.log("tong 3 + 5 = " + 3 + 5);
console.log(3 + 5 + " = 3 + 5");
// -----------------------------

let a = 10;
let b = 15;
let tb = (a + b) / 2;
// let tb = a + b / 2;

console.log(tb);
// -----------------------------
/**
 * ép kiểu dữ liệu
 * 
 * ---------------
 * 5 + ""
 * String(5);
 */
let x = "5"; // chuyển này về kiểu number

// câu lệnh: gán lại giá trị của biến x
// bằng giá trị của Number(x) ép kiểu của x
x = Number(x); // chuyển thành số 5.
let y = 2;

console.log(typeof x);
console.log(x + y);
