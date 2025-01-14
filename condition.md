---
---

# == vs ===

```js
console.log(1 === "1"); // false
console.log(1 === 1); // true
```

# &&, ||

- &&: nó sẽ lấy giá trị của sai đầu tiên hoặc là kết quả đúng cuối cùng

```js
console.log(null && "" && 0); // null
console.log(100 && "   " && 20); // 20
```

- ||: nó sẽ lấy giá trị của đúng đầu tiên hoặc là kết quả sai cuối cùng

```js
console.log(null || ("" && 0)); // 0
console.log(100 || "   " || 20); // 100
```

```js
console.log(3 > 5 || 5 < 7); // true
console.log(3 > 5 && 5 < 7); // false

console.log(3 > 5 || 7 <= 7); // true
```

# Falsy, Truthy

- falsy: 0, "", null, undefined
- trythy: những trường hợp còn lại

```js
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("      ")); // true
```

```js
console.log("" && 3 < 5); // false
console.log("" || 10); // 10
```

# &, |

- toán tử bit
