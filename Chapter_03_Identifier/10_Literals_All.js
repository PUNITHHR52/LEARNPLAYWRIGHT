// All Types of Literals in JavaScript

// 1. String Literal
let str1 = "Hello";       // double quotes
let str2 = 'World';       // single quotes
let str3 = `Template`;    // backticks (template literal)

// 2. Number Literal
let int = 42;             // integer
let float = 3.14;         // floating point
let hex = 0xFF;           // hexadecimal
let binary = 0b1010;      // binary
let octal = 0o77;         // octal
let scientific = 1.5e3;   // scientific notation (1500)

// 3. BigInt Literal
let big = 1234567890123456789012345678901234567890n;  // BigInt (n suffix)

// 4. Boolean Literal
let isTrue = true;
let isFalse = false;

// 5. Null Literal
let empty = null;         // intentionally empty

// 6. Undefined Literal
let notDefined = undefined;  // no value assigned

// 7. Object Literal
let person = {
    name: "Alice",
    age: 30
};

// 8. Array Literal
let fruits = ["Apple", "Banana", "Mango"];

// 9. Function Literal
let greet = function() {
    return "Hi!";
};

// 10. Regular Expression Literal
let pattern = /hello/i;   // regex between slashes, i = case insensitive
