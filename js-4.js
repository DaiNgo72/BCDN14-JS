function checkNumber() {
    let inpEle = document.getElementById('number');
    let numberValue = inpEle.value; // string
    let number = Number(numberValue); // number

    // Chia lấy dư
    let rs = number % 2;

    if (rs == 0) {
        let pEle = document.getElementById('kq');
        pEle.textContent = "Số Chẵn";
    }

    if (rs == 1) {
        let pEle = document.getElementById('kq');
        pEle.textContent = "Số Lẻ";
    }

}

// -------------------------------
/**
 * <button onclick="checkNumber()">Kiểm tra</button>
 */
// JS làm gán sự kiện giúp cho chúng ta
// let buttonEle = document.getElementById('btn-check-number');
// function handle() {
//     checkNumber();
// }
// buttonEle.onclick = handle;


// -------------------------------
/**
 * Kiểu dữ liệu boolean
 * Chỉ có 2 giá trị: true hoặc false
 * 
 * Kiểu dữ liệu number: nhiều giá trị
 * Kiểu dữ liệu string: nhiều giá trị
 */


// // dieu_kien: là kiểu dữ liệu boolean
// if (dieu_kien) {
//     // Nếu như điều kiện đúng thì thực hiện code trong này
// } else {
//     // Nêu như điều kiện sai thì thực hiện code trong này
// }


let dk = true;

if (dk) {
    console.log('1111111');
} else {
    console.log('2222222');
}

let dk2 = 3 > 5; // false

if (dk2) {
    console.log('3333333');
} else {
    console.log('4444444');
}

// -------------------------------
// So sánh: >, <, >=, <=, ==, !=
/**
 * >: lớn hơn
 * <: nhỏ hơn
 * >=: lớn hơn hoặc bằng, chỉ cần 1 trong 2 điều kiện đúng thì có giá trị true
 * <=: nhỏ hơn hoặc bằng, chỉ cần 1 trong 2 điều kiện đúng thì có giá trị true
 * ==: so sánh giá trị
 * !=: khác giá trị
 */


function compareNumber() {
    let inpEle1 = document.getElementById('number1');
    let inpEle2 = document.getElementById('number2');

    let numberValue1 = inpEle1.value;
    let numberValue2 = inpEle2.value;

    let number1 = Number(numberValue1);
    let number2 = Number(numberValue2);

    let pEle = document.getElementById('kq2');

    if (number1 == number2) {
        pEle.textContent = "Bằng nhau";
    } else {
        pEle.textContent = "Khác nhau";
    }
}

let addr = "Da Nang";
function abc() {
    let addr = "Hue";
    console.log(addr); // 1 "Hue"

    if (true) {
        let addr = "Quang Nam";
        addr = "Quang Ngai";
        console.log(addr); // 2 "Quang Ngai"
    }

    console.log(addr); // 3 "Hue"
}
console.log(addr); // 4 "Da Nang"
abc(); // ✅
console.log(addr); // 5 "Da Nang"

let rs = 5 <= 5; // false

console.log(5 <= 5);

console.log(7 >= 8); // true | false

console.log("5" >= "7"); // false | true

console.log("abce" >= "abda"); // false | true


let a = "a";
let b = 10;

if (typeof a == "string" && typeof b == "string") {
    console.log(a > b);
} else {
    console.log("Không thể so sánh");
}

let c = "20";
let d = 20; // "20"

console.log(c === d); // true | false


function handleChangeLocation() {
    let selectEle = document.getElementById("location");

    let location = selectEle.value; // dn


    let textEle = document.querySelector("#text-location");

    if (location === "") {
        textEle.textContent = "";
    } else if (location === "dn") {
        textEle.textContent = "Đà Nẵng";
    } else if (location === "hue") {
        textEle.textContent = "Huế";
    } else if (location === 'qn') {
        textEle.textContent = "Quảng Nam";
    } else {
        textEle.textContent = "Không xác định";
    }

    switch (location) {
        case "": {
            console.log('1');

            break;
        }
        case "dn": {
            console.log('2');

            break;
        }
        case "hue": {
            console.log('3');

            break;
        }
        case "qn": {
            console.log('4');

            break;
        }
        default: {
            // Nếu như không vào case nào hết thì sẽ vào default
            console.log('5');
        }
    }
}

// if (true) {
//     console.log('1');
// } else if (false) {
//     console.log('2')
// } else {
//     console.log('3');
//     if (true) {
//         console.log('4');
//     } else {
//         console.log('5');
//     }
// }


/**
 * giỏi: 8 - 10
 * khá: 6.5 - 7.9
 * trung bình: 5 - 6.4
 * yếu: 0 - 4.9
 */

function handleXetHocLuc() {
    let toanEle = document.querySelector("#toan")
    let lyEle = document.querySelector("#ly")
    let hoaEle = document.querySelector("#hoa")
    // 0

    let toanValue = toanEle.value;
    let lyValue = lyEle.value;
    let hoaValue = hoaEle.value;
    // 1
    if (toanValue === "") {
        alert("Vui lòng nhập điểm toán");

        // Dừng tại đây, không chạy tiếp nữa
        return;
    }
    if (lyValue === "") {
        alert("Vui lòng nhập điểm lý");

        // Dừng tại đây, không chạy tiếp nữa
        return;
    }
    if (hoaValue === "") {
        alert("Vui lòng nhập điểm hóa");

        // Dừng tại đây, không chạy tiếp nữa
        return;
    }

    let toan = Number(toanValue);
    let ly = Number(lyValue);
    let hoa = Number(hoaValue);
    // 2

    if (toan > 10 || toan < 0) {
        alert("Vui lòng nhập điểm toán từ 0 - 10");
        return;
    }

    if (ly > 10 || ly < 0) {
        alert("Vui lòng nhập điểm lý từ 0 - 10");
        return;
    }

    if (hoa > 10 || hoa < 0) {
        alert("Vui lòng nhập điểm hóa từ 0 - 10");
        return;
    }

    // Kiểm tra người dùng có nhập số hay không
    let dtb = (toan + ly + hoa) / 3;

    console.log(dtb);

    // let hocLucEle = document.getElementById("hoc-luc");

    // 8 <= dtb <= 10
    if (dtb >= 8 && dtb <= 10) {
        // hocLucEle.textContent = "Giỏi";
        renderHocLuc("Giỏi")
    } else if (dtb >= 6.5 && dtb < 8) {
        // hocLucEle.textContent = "Khá";
        renderHocLuc("Khá")

    } else if (dtb >= 5 && dtb < 6.5) {
        // hocLucEle.textContent = "Trung Bình";
        renderHocLuc("Trung Bình")

    } else if (dtb >= 0 && dtb < 5) {
        // hocLucEle.textContent = "Yếu";
        renderHocLuc("Yếu")
    }
}

function renderHocLuc(hocLuc) {
    let hocLucEle = document.getElementById("hoc-luc");

    hocLucEle.textContent = hocLuc;
}


function sum(a, b) {
    return a + b;

    if (3 < 5) {
        console.log(1)
    } else {
        console.log(2)
    }
}

