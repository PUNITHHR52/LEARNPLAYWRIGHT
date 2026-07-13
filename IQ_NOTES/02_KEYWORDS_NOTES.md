## JavaScript Keywords

Keywords are **reserved words** in JavaScript that have special meaning. You cannot use them as variable names, function names, or identifiers.

---

### All JavaScript Reserved Keywords

#### Variable Declaration
| Keyword | Description |
|---------|-------------|
| `var` | Declares a variable (function-scoped) |
| `let` | Declares a block-scoped variable |
| `const` | Declares a block-scoped constant (cannot be reassigned) |

#### Control Flow
| Keyword | Description |
|---------|-------------|
| `if` | Executes block if condition is true |
| `else` | Executes block if condition is false |
| `switch` | Evaluates expression and matches cases |
| `case` | A specific match case in switch |
| `break` | Exits a loop or switch statement |
| `continue` | Skips to next iteration of a loop |
| `default` | Default case in switch statement |

#### Loop
| Keyword | Description |
|---------|-------------|
| `for` | Loops with initialization, condition, increment |
| `while` | Loops while condition is true |
| `do` | Executes block once, then loops while condition is true |
| `in` | Iterates over object properties (`for...in`) |
| `of` | Iterates over iterable values (`for...of`) |

#### Function & Object
| Keyword | Description |
|---------|-------------|
| `function` | Declares a function |
| `return` | Returns a value from a function |
| `class` | Declares a class |
| `new` | Creates an instance of an object/class |
| `this` | Refers to the current object |
| `super` | Calls parent class methods |
| `extends` | Inherits from a parent class |
| `static` | Defines static methods/properties |
| `get` | Binds object property to a getter function |
| `set` | Binds object property to a setter function |
| `yield` | Pauses/resumes a generator function |
| `async` | Declares an async function |
| `await` | Waits for a Promise to resolve |

#### Error Handling
| Keyword | Description |
|---------|-------------|
| `try` | Defines a block to test for errors |
| `catch` | Handles errors from try block |
| `finally` | Executes after try/catch regardless of result |
| `throw` | Throws a custom error |

#### Boolean & Null
| Keyword | Description |
|---------|-------------|
| `true` | Boolean true value |
| `false` | Boolean false value |
| `null` | Represents an empty/unknown value |
| `undefined` | Represents an uninitialized value |

#### Module (ES6)
| Keyword | Description |
|---------|-------------|
| `import` | Imports modules |
| `export` | Exports modules |
| `from` | Specifies module path in import |

#### Other Keywords
| Keyword | Description |
|---------|-------------|
| `typeof` | Returns the type of a value |
| `instanceof` | Checks if object is instance of a class |
| `void` | Evaluates expression and returns undefined |
| `delete` | Deletes an object property |
| `debugger` | Pauses execution for debugging |

---

### Important Rules

- **Keywords cannot be used as variable names**: `let let = 5;` ❌
- Some keywords are **reserved for future use**: `enum`, `implements`, `interface`, `package`, `private`, `protected`, `public`
- `NaN`, `Infinity` are **global properties**, not keywords

### Example

```js
let name = "John";          // let keyword
const PI = 3.14;            // const keyword
function greet() {          // function keyword
    return "Hello";         // return keyword
}
if (name === "John") {      // if keyword
    console.log("Hi!");     // console is an object, log is a method
}
```
