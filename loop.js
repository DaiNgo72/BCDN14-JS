
/**
 * 

Function Đệ quy: Function gọi chính nó

let count = 0;
function a(){
    if(count === 10) return;

    count += 1;
    a();
}

a();


*/

let count = 0;

function a() {
    if (count === 2) return;

    count += 1;
    a();
}

a();

/**
 * Tính tổng từ 1 -> n = 1 + 2 + 3 + ... + (n-1) + n
 */

function sum(n) {
    if (n === 1) return 1;

    return n + sum(n - 1);
}

console.log(sum(10))

/**
 * tính giai thừa n: ( 1 * 2 * 3 * 4 * .... * (n-1) ) * n
 * 
 * 
 * tính giai thừa 5: 4! * 5
 * tính giai thừa 4: 3! * 4
 * tính giai thừa 3: 2! * 3
 * tính giai thừa 2: 1! * 2
 */

function giaiThua(n) {
    if (n === 1) return 1;

    return giaiThua(n - 1) * n
}

console.log(giaiThua(5));


/**
 * Tính lũy thừa: 3 ^ 5 = 3 * 3 * 3 * 3 * 3 = 3^4 * 3^1 = 3^5
 * => n^(m-1) * n^1
 * 
 * 3^2 = 3^1 * 3^1
 */

function power(n, m) {
    if (m === 1) return n;

    return n * power(n, m - 1);
}

console.log(
    power(3, 5) === 3 ** 5,
    power(3, 5) === Math.pow(3, 5)
)

// ----------------------------------------
// ----------------------------------------

/**
 * Viết function log ra số từ 1 đến n
 */

function printN(n) {
    if (n === 0) return;

    printN(n - 1);

    console.log(n);
}

printN(5);
// 1 2 3 4 5


/**
 * in ra màn hình 100 dòng console.log('hello world');
 */

function printHello(n) {
    if (n === 0) return;

    console.log("hello world");
    printHello(n - 1);
}

printHello(3)

// ----------------------

/**
    while(<dieu_kien_chay_vong_lap>){
        // nếu điều kiện đúng thì chạy code bên trong này
        // nếu điều kiện sai thì không chạy code bên trong này

        // sau khi chạy xong thì ra kiểm tra điều kiện lại

        // nếu điều kiện đúng thì chạy code bên trong này
        // nếu điều kiện sai thì không chạy code bên trong này

        // sau khi chạy xong thì ra kiểm tra điều kiện lại

        // nếu điều kiện đúng thì chạy code bên trong này
        // nếu điều kiện sai thì không chạy code bên trong này
    }
*/

// 1. Biến đếm
let count_2 = 0;

// 2. Điều kiện để thực hiện vòng lặp, có liên quan đến biến đếm
while (count_2 < 4) {
    console.log('haha');


    // 3. Tăng biến đếm, để làm điều sai đi để dừng lòng lặp
    count_2 += 1;
}

/**
 * Tính tổng từ 1 -> n = 1 + 2 + 3 + ... + (n-1) + n
 */

function sum_2(n) {
    let total = 0;

    // 1.
    let count = 0;

    // 2.
    while (count <= n) {
        // 4. logic
        total += count;
        // 4. logic

        // 3.
        count += 1;
    }

    return total;
}

console.log(sum_2(4));


/**
 * tính giai thừa n: ( 1 * 2 * 3 * 4 * .... * (n-1) ) * n
 */

function giaiThua_2(n) {
    let rs = 1;

    let count = 1;

    while (count <= n) {
        rs *= count;

        count++;
    }

    return rs;
}

console.log(
    giaiThua_2(5)
)

/**
 * Tính lũy thừa: 3 ^ 5 = 3 * 3 * 3 * 3 * 3 = 3^4 * 3^1 = 3^5
 */

function power_2(n, m) {
    let rs = 1;

    // 1.
    let count = m;

    // 2.
    while (count >= 1) {
        rs *= n;

        // 3.
        count--;
    }

    return rs;
}

console.log(power_2(3, 5));


/**
 * do while
 */

/**
 * 

 do {
    
 } while(dk)

 */

do {
    console.log('hello world');
} while (false);


// 1. Biến đếm
let count_3 = 0;

// log ra 4 lần
do {
    // -----------
    console.log('hello world'); // 1 2 3 4
    // -----------


    // 2. Tăng biến đếm
    count_3++;

    // 3. Điều kiện để thực hiện vòng lặp
} while (count_3 < 4)

/**
 * Viết function log ra số từ 1 đến n
 */
function printN_2(n) {
    let count = n;

    do {
        console.log(count);

        count--;
    } while (count >= 1)


}

printN_2(5)
/**
 * tính giai thừa n: ( 1 * 2 * 3 * 4 * .... * (n-1) ) * n
 */

function giaiThua_3(n) {
    let rs = 1;

    let count = 1;

    do {
        rs *= count;

        count++;
    } while (count <= n)

    return rs;
}

giaiThua_3(5);

/**
 * for
 */

// 10 * 10 = 100
for (let count = 0; count < 10; count++) {

    for (let count = 0; count < 10; count++) {
        console.log(count);
    }

}


/**
 * Step 1. Tạo biến đếm (1)
 * 
 * Step 2. kiểm tra điều kiện (2)
 * 
 * Step 3: 
 *      - Nếu dk đúng thì thực hiện code trong (4)
 *      - Sai thì không thực thi
 * 
 * Step 4: 
 *      - Sau khi thực hiện code trong (4) xong thì tăng biến đếm
 * 
 * Step 5: quay lại Step 2
 */

/**
 * In ra các số chẵn từ 1 -> 100
 */

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

/**
 * tính tổng từ 1 -> n
 */

function sum_3(n) {
    let rs = 0;

    for (let i = 0; i <= n; i++) {
        rs += i;
    }

    return rs;
}

sum_3(100);