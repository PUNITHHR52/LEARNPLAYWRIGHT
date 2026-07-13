## JavaScript Basics

### 1. Hello World - `console.log()`

```js
console.log("Hello World!");
```

- **`console.log()`** is used to print/output data to the browser console or terminal.
- Takes one or more arguments and displays them.
- Commonly used for debugging and checking values during development.

---

### 2. `let` Keyword

```js
let a = 10;
console.log(a);         // Output: 10

for (let a = 0; a < 5; a++) {
    console.log(a);     // Output: 0 1 2 3 4
}
```

- **`let`** declares a **block-scoped** variable.
- The `a` inside the `for` loop is a **different variable** than the `a = 10` outside — each has its own scope.
- Block scope = limited to `{}` (curly braces).

---

### Key Takeaways

| Concept | Description |
|---------|-------------|
| `console.log()` | Output data to console |
| `let` | Block-scoped variable declaration |
| Variable Shadowing | Inner `let a` in loop doesn't affect outer `let a` |
