// Sum of Two Number

// let a = 9;
// let l = 23;

// console.log(a + l);


// Normal Sum
let a = 1;
let b = 1;

console.log(a + b);

// String Sum
let j = "2";
let k = "2";

console.log(j + k);

//Normal Digit + String Digit known as Concatination

console.log(b + j);
console.log(typeof(b + j));





let m = 20;
let n = 20;

console.log("sum of 20 and 20 " + m + n);
// String comes first → everything becomes string → output: sum of 20 and 20 2020

console.log("sum of 20 and 20 is " + (m + n));
// Parentheses calculate first → 20 + 20 = 40 → output: sum of 20 and 20 is 40

console.log(m + n + " is sum of 20 and 20");
// Numbers add first (left to right) → 40 → then joins with string → output: 40 is sum of 20 and 20






// ******** Type Coercion ********

console.log("1" + 1);
// + can do addition OR concatenation.
// Since one value is a string, JavaScript chooses concatenation.
// Number 1 becomes string "1".
// "1" + "1" = "11"
// Output: 11 (string)

console.log("1" - 1);
// - only performs mathematical subtraction.
// It cannot concatenate.
// So JavaScript converts "1" into number 1.
// 1 - 1 = 0
// Output: 0 (number)

console.log("1" * 1);
// * only performs multiplication.
// String "1" is converted to number 1.
// 1 * 1 = 1
// Output: 1 (number)

console.log("1" / 1);
// / only performs division.
// String "1" is converted to number 1.
// 1 / 1 = 1
// Output: 1 (number)







// ******* Type Casting *******
// let age = prompt("Enter Your Age");
// console.log(age);
// console.log(typeof(age));


// let age = Number(prompt("Enter Your Age"));
// console.log(age);
// console.log(typeof(age));


let age = prompt("Enter Your Age");
age = Number(age);
console.log(age);
console.log(typeof(age));








// ******* SWAPPING *******
let x = 10;
let y = 20;
let z;


//Method 1

// z = x; // z = 10 , x = 10
// x = y; // x = 20 , y = 20
// y = z; // y = 10 , z = 10


//Method 2

// x = x + y; // x = 30, y = 20
// y = x - y; // x = 30, y = 10
// x = x - y; // x = 20, y = 10


//Method 3

[x, y] = [y, x];

console.log(x, y);