// Null literal — intentionally means "empty" or "nothing"
let value = null;  // null: explicitly set by the programmer to indicate no value

// Undefined literal — means "not yet assigned"
let a;  // undefined: declared but no value assigned (implicit)
let b = undefined;  // undefined: explicitly set (not common practice)

console.log(a);  // Output: undefined — variable exists but has no value
console.log(value);  // Output: null — variable intentionally set to empty

// Key differences:
console.log(null == undefined);   // Output: true  (loose equality)
console.log(null === undefined);  // Output: false (strict equality — different types)
console.log(typeof null);         // Output: "object" (historical JS bug)
console.log(typeof undefined);    // Output: "undefined"
