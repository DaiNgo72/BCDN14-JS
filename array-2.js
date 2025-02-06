/**
 * Ứng dụng:
 * - Lưu danh sách sinh viên
 * - Danh sách tất cả quyển sách đã đọc
 * - Danh sách các công việc cần làm để chuẩn bị tết
 */

/**
 * 1. Khai báo (v)
 * 1.1 Dùng ngoặc [] để khởi tạo
 * 1.2 Có thể khởi tạo với mảng rỗng
 * 1.3 Có thể khởi tạo với mảng có giá trị
 *
 * 2. Kiểm tra độ dài, số lượng phần tử (v)
 *
 * 3. Lấy ra phần tử của mảng (v)
 *
 * 4. Thêm vào mảng (v)
 *
 * 5. Xoá khỏi mảng (v)
 *
 * 6. Cập nhật lại giá trị (v)
 *
 * 7. Duyệt qua từng phần tử của mảng (v)
 */
/**
 * array trong js dùng để lưu nhiều giá trị
 */

// let lopHoc = [];
let lopHoc = ["Bao", "Huy", "Truong", "Tri"];
console.log("lop hoc", lopHoc);

console.log("So luong hoc vien", lopHoc.length);

// Để lấy giá trị của một phần tử trong mảng thì chúng ta sẽ dùng,
// mang[index_can_lay]
console.log("Phần tử đầu tiên trong mảng là", lopHoc[0]);
console.log("Phần tử thứ 2 trong mảng là", lopHoc[1]);
console.log("Phần tử thứ 3 trong mảng là", lopHoc[3 - 1]);
console.log("Phần tử index = 50 trong mảng là", lopHoc[50]);

console.log("Phần tử cuối cùng trong mảng", lopHoc[lopHoc.length - 1]);

// ------------
// Thêm vào cuối mảng
console.log("Mảng trước khi thêm vào cuối", lopHoc);
lopHoc.push("Vu");
console.log("Mảng sau khi thêm vào cuối", lopHoc);
// Thêm vào đầu mảng
console.log("Mảng trước khi thêm vào đầu", lopHoc);
lopHoc.unshift("Khoa");
console.log("Mảng sau khi thêm vào đầu", lopHoc);
// Thêm vào bất kỳ vị trí nào cũng được
console.log("Mảng trước khi thêm vào vị trí index = 3", lopHoc);
// lopHoc.unshift("Khoa");
lopHoc.splice(3, 0, "Kiet");
console.log("Mảng sau khi thêm vào vị trí index = 3", lopHoc);

console.log("Số lượng phần tử trong mảng sau khi thêm xong", lopHoc.length);
// -------------
// Xoá đầu
console.log("Lop hoc truoc khi xoa dau", lopHoc);
lopHoc.shift();
console.log("Lop hoc sau khi xoa dau", lopHoc);
// Xoá cuối
console.log("Lop hoc truoc khi xoa cuoi", lopHoc);
lopHoc.pop();
console.log("Lop hoc truoc khi xoa cuoi", lopHoc);
// Xoá bất kỳ
console.log("Lop hoc truoc khi xoa index=2", lopHoc);
lopHoc.splice(2, 1);
console.log("Lop hoc truoc khi xoa index=2", lopHoc);

// ------------
console.log("[splice] truoc", lopHoc);
lopHoc.splice(2, 1, "Kiet");
console.log("[splice] sau", lopHoc);
// ----------
lopHoc.splice(2, 2);
console.log("[splice] 2,2", lopHoc);

// ------
lopHoc[0] = "Vu";
console.log("Update", lopHoc);

// ------
lopHoc = ["Vu", "Huy", "Bao", "Truong"];

// for(let i=0; i <= lopHoc.length - 1; i++) {
for (let i = 0; i < lopHoc.length; i++) {
    let item = lopHoc[i];

    console.log(item);
}

// ---------
// Bài tập
let numbers = [1, 2, 3, 4, 5, 6, 7];

let index = -1;
// tìm vị trí index của giá trị 4 trong mảng
for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i];

    console.log(item);

    if (item === 4) {
        index = i;
    }
}

if (index === -1) {
    console.log("Không có giá trị 4 trong mảng");
} else {
    console.log("Mảng", numbers);
    console.log("Vị trí index của giá trị 4 là", index);
}

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// Thêm số 9 vào vị trí phần tử có giá trị 3
// [1, 2, 9, 3, 4, 5, 6, 7];

{
    let index = -1;

    for (let i = 0; i < numbers.length; i++) {
        let item = numbers[i];

        if (item === 3) {
            index = i;
            break;
        }

    }

    if (index === -1) {
        console.log("không tìm thấy giá trị 3 trong mảng", numbers);
    } else {
        // Thêm số 9 vào trí index của giá trị 3
        numbers.splice(index, 0, 9);

        console.log("Numbers", numbers);
    }
}


// ------------
let todos = [];
let doneTodoList = [
    "css",
    "html"
];

/**
 * innerHTML
 */
let ulList = document.getElementById('list');
function renderTodo() {

    let content = "";

    for (let i = 0; i < todos.length; i++) {
        let item = todos[i];

        content += `
            <li> 
                ${item} 
                <button onclick="handleDone( '${item}' )">✅</button>
            </li>
        `

    }
    ulList.innerHTML = content;
}

// --------------------
let doneUlList = document.getElementById("done");

function renderDone() {
    let content = "";

    function handle(done) {
        content += `
        <li>
            ${done}

            <button onclick="handleDelete( '${done}' )">x</button>
        </li>`
    }

    doneTodoList.forEach(
        handle
    )

    doneUlList.innerHTML = content;
}

renderDone();
// --------------------


let todoEle = document.getElementById("input");

function handleAddTodo() {
    // 1. Thêm vào mảng
    let todoValue = todoEle.value;

    if (todoValue.trim().length === 0) {
        alert("Không được bỏ trống.")
        return;
    }

    todos.push(todoValue);
    // 2. Render ra giao diện

    renderTodo();

    // reset ô input
    todoEle.value = "";

    todoEle.focus();
}

todoEle.onkeydown = function (event) {
    if (event.key === "Enter") {
        handleAddTodo();
    }
}

// -------------------
function handleDelete(task) {
    console.log("Xóa task:", task);


    // Cách 1: dùng filter
    // let newArr = doneTodoList.filter(
    //     function (item) {
    //         // cách 1
    //         {
    //             if (item === task) return false;

    //             return true;
    //         }

    //         // cách 2
    //         {
    //             return item !== task;
    //         }
    //     }
    // )

    // console.log(newArr);

    // doneTodoList = newArr;

    // // Render lại giao diện
    // renderDone();

    // Cách 2: dùng splice

    let idx = doneTodoList.findIndex(
        function (item) {
            if (item === task) return true;

            return false;
        }
    )

    // console.log("idx:", idx);

    doneTodoList.splice(
        idx, 1
    )

    // Render lại giao diện
    renderDone();
}

function handleDone(task) {
    {
        // Xóa trên todo
        let newArr = todos.filter(
            function(item) {
                if(item === task) return false;

                return true;
            }
        )

        todos = newArr;

        renderTodo();
    }


    {
        // Thêm vào done list
        doneTodoList.unshift(task);

        renderDone();
    }

}



// -------------------
// let books = [];

// books.push("Chi Pheo");
// books.push("Tat Den");

// books.length;

// for (let i = 0; i < books.length; i++) {
//     console.log(books[i]);
// }

// console.log(books[0])
// console.log(books[1])
// books[books.length - 1]
// books.at(-1)

// -----------------------------
console.clear();

let books = ["Chi Pheo", "Tat Den", "Truyen Kieu", "Chi lam trai", "Hich tuong si"];

function findIndex(key, arr) {

    let index = -1;

    forEach(
        arr,
        function (item, idx) {
            if (item === key) {
                index = idx
            }
        }
    )

    // --------------
    return index;
}

console.log(findIndex("Chi Pheo", books)) // 0
console.log(findIndex("Tat Den", books)) // 1
console.log(findIndex("So Do", books)) // -1

// -----------------
function map(arr, fn) {
    let newArr = [];

    forEach(
        arr,
        function (item) {
            let newItem = fn(item);

            newArr.push(newItem)
        }
    )

    // for (let i = 0; i < arr.length; i++) {
    //     let item = arr[i];

    //     let newItem = fn(item);

    //     newArr.push(newItem)
    // }

    return newArr;
}

// // Khi nao Chi Pheo thi moi them ***
// console.log(map(books, " ***", "Chi Pheo")) // ["Chi Pheo ***", "Tat Den", "Truyen Kieu", "Chi lam trai", "Hich tuong si"]

// // Khi nao Tat Den thi moi them AAA
// console.log(map(books, " AAA", "Tat Den")) // ["Chi Pheo", "Tat Den AAA", "Truyen Kieu", "Chi lam trai", "Hich tuong si"]

const rs = map(books, function (book) {
    return 1;

    if (book === "Chi Pheo") {
        return book + "***"
    }

    return book
})

console.log(rs);

console.log(
    // Map methods của array
    books.map(function (i) {
        return i + " AAA"
    })
)


// ----------------
function filter(arr, fn) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        if (fn(item)) {
            newArr.push(item);
        }
    }

    return newArr;
}

const rs_1 = filter(books, function (i) {
    if (i === "Chi Pheo" || i == "Tat Den") return false;

    return true;
})



const rs_2 = books.filter(
    function (i) {
        if (i === "Chi Pheo" || i == "Tat Den") return false;

        return true;
    }
)

// ----------------
console.log(rs_2);

function forEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        fn(item, i);
    }
}

books.forEach(
    function (item) {
        console.log(item);
    }
)

forEach(
    books,
    function (i) {
        console.log(i);
    }
)

forEach(
    todos,
    function (todo, index) {
        console.log(todo);
    }
)