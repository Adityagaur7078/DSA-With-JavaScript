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
let x = 11, y = 22;

let z = x + y + x++ + y++ + ++x + ++y;

// console.log("x=" + x);
// console.log("y=" + y);
// console.log("z=" + z);

// Answer

// Initial values:
x = 11
y = 22

// Expression:
z = x + y + x++ + y++ + ++x + ++y


// Step 1: x
// Uses current value → 11

// Step 2: y
// Uses current value → 22

// Step 3: x++ (post-increment)
// Uses 11, then x becomes 12

// Step 4: y++ (post-increment)
// Uses 22, then y becomes 23

// Step 5: ++x (pre-increment)
// First increases x from 12 to 13, then uses 13

// Step 6: ++y (pre-increment)
// First increases y from 23 to 24, then uses 24


// Now substitute values:
//z = 11 + 22 + 11 + 22 + 13 + 24

//z = 103


// Final values:
// x = 13
// y = 24

console.log("x=" + x); // x=13
console.log("y=" + y); // y=24
console.log("z=" + z); // z=103





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







// Question
// Calculate area and perimeter of rectangle

// Answer
let length = 23;
let breadth = 9;

// Area of rectangle
console.log(length * breadth);

// Perimeter of rectangle
console.log(2 * (length + breadth));




// Quetion
// Generate OTP

// Answer
console.log(Math.trunc(Math.random()*9000)+1000);






// Question
// Area of triangle by heron's formula

// Answer
let a = 20;
let b = 21;
let c = 29;

let s = (a + b + c) / 2;

// heron's formula
console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));






// Question
// Circumference of Circle

// Answer
let radius = 4;

console.log(2 * Math.PI * radius);
