// Null Literal — Interview Questions

// Q1: What is the output?
console.log(typeof null);  // "object" — historical bug in JS (since ES1)

// Q2: Why is typeof null "object"?
// A bug from the first version of JS. The type tag for objects was 0,
// and null's type tag was also 0 due to a bug in the original VM.

// Q3: Difference between null and undefined?
let a = null;
let b;
console.log(a == null);   // true
console.log(b === null);  // false (undefined !== null)
console.log(b == null);   // true (loose equality treats null == undefined)

// Q4: What does null represent?
// Intentional absence of an object value.
// Setting a variable to null means "I want this to be empty on purpose."

// Q5: Can you use null in arithmetic?
console.log(null + 1);   // 1  (null coerces to 0)
console.log(null * 5);   // 0  (null coerces to 0)

// Q6: What about comparison?
console.log(null > 0);   // false
console.log(null == 0);  // false (== doesn't coerce null to number)
console.log(null >= 0);  // true  (>= coerces null to 0, so 0 >= 0 is true)

// Q7: How to check if a value is null?
let x = null;
console.log(x === null);  // true — use strict equality
console.log(Object.is(x, null));  // true — Object.is() also works
