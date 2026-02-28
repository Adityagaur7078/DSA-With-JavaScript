// Question
let i = 11;
i = i++ + ++i;
console.log(i);
// Answer

// Step 1: i++
// Post-increment
// Uses 11 first, then i becomes 12

// Step 2: ++i
// Pre-increment
// Increases i from 12 to 13, then uses 13

// Step 3: i = 11 + 13
//console.log(i); // 24













// Question
let a = 11, b = 22;

let c = a + b + a++ + b++ + ++a + ++b;

// console.log("a=" + a);
// console.log("b=" + b);
// console.log("c=" + c);

// Answer

// Initial values:
a = 11
b = 22

// Expression:
c = a + b + a++ + b++ + ++a + ++b


// Step 1: a
// Uses current value → 11

// Step 2: b
// Uses current value → 22

// Step 3: a++ (post-increment)
// Uses 11, then a becomes 12

// Step 4: b++ (post-increment)
// Uses 22, then b becomes 23

// Step 5: ++a (pre-increment)
// First increases a from 12 to 13, then uses 13

// Step 6: ++b (pre-increment)
// First increases b from 23 to 24, then uses 24


// Now substitute values:
c = 11 + 22 + 11 + 22 + 13 + 24

c = 103


// Final values:
a = 13
b = 24

console.log("a=" + a); // a=13
console.log("b=" + b); // b=24
console.log("c=" + c); // c=103





// Question
let d = true;
d++;
// console.log(d);

// Answer

// true is converted to number 1
// d++ increases 1 to 2

// Final value:
console.log(d); // 2

// Question 
let e = false;
e++;
// console.log(e);

// Answer

// false is converted to number 0
// e++ increases 0 to 1

// Final value:
console.log(e); // 1







// Question
let m = 11;
// let j = --(m++);
// console.log(j);

// Answer

// Step 1:
// let m = 11;

// Step 2:
// (m++)
// Post-increment
// Uses current value 11
// Then m becomes 12

// Now the expression becomes:
// --(11)

// Step 3:
// -- is a pre-decrement operator
// It must be applied to a variable (like --m)
// But here it is applied to 11 (a number value)

// Numbers are not variables.
// They cannot be incremented or decremented.

// So this line:
// let j = --(m++);

// Causes an error:
// SyntaxError: Invalid left-hand side expression in prefix operation