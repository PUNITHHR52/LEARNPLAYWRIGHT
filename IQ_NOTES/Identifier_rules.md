## JavaScript Identifier Rules

An **identifier** is a name given to variables, functions, classes, or objects.

---

### Rules

| # | Rule | Valid ✅ | Invalid ❌ |
|---|------|----------|------------|
| 1 | Must start with a letter, underscore `_`, or dollar sign `$` | `name`, `_count`, `$price` | `1name`, `@data` |
| 2 | Can contain letters, digits, `_`, or `$` after the first character | `myVar1`, `data_2` | `my-var`, `user.name` |
| 3 | **Cannot** be a reserved keyword | `total`, `sum` | `let`, `const`, `if` |
| 4 | Case-sensitive | `name` and `Name` are different | — |
| 5 | No spaces allowed | `userName` | `user name` |

---

### Examples

```js
// Valid identifiers
let name = "John";
let _private = 10;
let $dollar = 20;
let camelCase = "standard";
let PascalCase = "class naming";
let snake_case = "also valid";
let value1 = 100;

// Invalid identifiers (will throw error)
// let 1name = "error";     // ❌ starts with digit
// let my-var = "error";    // ❌ contains hyphen
// let let = "error";       // ❌ reserved keyword
// let my var = "error";    // ❌ contains space
```

---

### Naming Conventions (Best Practices)

| Convention | Style | Used For | Example |
|------------|-------|----------|---------|
| camelCase | First letter lowercase, words capitalized | Variables, functions | `userName`, `getData()` |
| PascalCase | Every word starts with capital | Classes, constructors | `UserProfile`, `CarModel` |
| snake_case | Words separated by underscores | Constants (sometimes) | `MAX_LIMIT`, `api_key` |
| UPPER_CASE | All caps with underscores | True constants | `PI`, `DB_HOST` |

**Key takeaway**: JavaScript **allows** `_` and `$` prefixes, but `_` conventionally means "private" and `$` is common in jQuery/ frameworks.
