// All Types of Number Literals in JavaScript

// 1. Integer (Decimal)
let int = 42;

// 2. Floating Point
let float = 3.14;
let scientific = 1.5e3;   // 1.5 × 10³ = 1500
let negativeExp = 1.5e-3; // 1.5 × 10⁻³ = 0.0015

// 3. Hexadecimal (base 16) — prefix 0x
let hex = 0xFF;    // 255
let hex2 = 0x1A;   // 26

// 4. Binary (base 2) — prefix 0b
let binary = 0b1010;   // 10
let binary2 = 0b1111;  // 15

// 5. Octal (base 8) — prefix 0o
let octal = 0o77;   // 63
let octal2 = 0o10;  // 8

// 6. Special Number Values
let infinity = Infinity;           // positive infinity
let negativeInf = -Infinity;       // negative infinity
let notANumber = NaN;              // Not a Number
let maxNum = Number.MAX_VALUE;     // largest possible number
let minNum = Number.MIN_VALUE;     // smallest positive number
let maxSafeInt = Number.MAX_SAFE_INTEGER;  // 9007199254740991
let minSafeInt = Number.MIN_SAFE_INTEGER;  // -9007199254740991

// 7. Number with Separators (ES2021) — _ for readability
let withSep = 1_000_000;      // 1000000
let withSep2 = 1_234.56;      // 1234.56

// 8. Negative Numbers
let negative = -10;
let negativeFloat = -3.14;

console.log(int, float, scientific, hex, binary, octal);
console.log(infinity, negativeInf, notANumber);
console.log(maxSafeInt, withSep);
