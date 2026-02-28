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








// ******* Operators *******

// *** Arithmetic [ +, -, /, *, % ] ***
let s = 16;
let l = 3;

console.log(s + l); // 16 + 3 = 19
console.log(s - l); // 16 - 3 = 13
console.log(s / l); // 16 / 3 = 5.3333...
console.log(s * l); // 16 * 3 = 48

console.log(s % l); 
// 16 % 3 = 1
// % gives remainder (16 ÷ 3 = 5 remainder 1)

console.log(Math.floor(s / l)); 
// 16 / 3 = 5.333...
// Math.floor removes decimal → 5 (quotient)

console.log(l % s); 
// 3 % 16 = 3
// Because 16 does not go even once in 3
// So remainder is 3 itself

let w = 4563;
console.log(w % 10); // 3
console.log(w % 100); // 63
console.log(w / 10); // 456.3
console.log(Math.floor(w / 10)); // 456
console.log(Math.floor(w / 100)); // 45







// *** Relational Operator [>, <, >=, <=, ==, !=, !==, =, ==, ===] ***
// *** Relational Operators ***

console.log(10 > 5);  
// true → 10 is greater than 5

console.log(10 < 5);  
// false → 10 is not less than 5

console.log(10 >= 10);  
// true → 10 is equal to 10

console.log(5 <= 5);  
// true → 5 is equal to 5

console.log(10 == "10");  
// true → == checks value only (type conversion happens)

console.log(10 === "10");  
// false → === checks both value and type (number ≠ string)

console.log(10 != "10");  
// false → != checks not equal loosely (type conversion happens)

console.log(10 !== 5);
// true → values are different

console.log(10 !== 10);
// false → value and type both are same

console.log(10 !== "10");
// true → value looks same but type is different

// Summary:
// !=  → not equal (non-strict, allows type conversion)
// !== → not equal (strict, checks both value and type)







// *** Logical Operators [&&, ||] ***

console.log(10 > 7 && 0 < 2);
// true → both conditions are true, so && returns true

console.log(10 > 71 && 0 < 2);
// false → first condition is false, && needs both true

console.log(10 > 7 && 0 < 2 && 7 > 2);
// true → all conditions are true

console.log(10 > 71 && 0 < 2 && 7 > 2);
// false → one condition is false, so entire && becomes false


console.log(10 > 7 || 0 < 2);
// true → at least one condition is true (actually both are true)

console.log(10 > 71 || 10 < 2);
// false → both conditions are false, so || returns false

console.log(10 > 71 || 0 < 2 || 7 > 2);
// true → at least one condition is true






// *** Unary Operators [++, --] ***

// ++ (Increment Operator)

// Pre-Increment
let p = 5;
console.log(++p);
// 6 → value increases first, then prints

// Reset value
p = 5;

// Post-Increment
console.log(p++);
// 5 → prints first, then increases
console.log(p);
// 6 → value increased after previous line


// -- (Decrement Operator)

// Reset value
p = 5;

// Pre-Decrement
console.log(--p);
// 4 → value decreases first, then prints

// Reset value
p = 5;

// Post-Decrement
console.log(p--);
// 5 → prints first, then decreases
console.log(p);
// 4 → value decreased after previous line


// Summary:
// ++ → increases value by 1
// -- → decreases value by 1
// Pre → change first, then use
// Post → use first, then change










// ******* Math Functions *******

// Math.round() → rounds to nearest integer
console.log(Math.round(4.4));  // 4
console.log(Math.round(4.6));  // 5


// Math.ceil() → always rounds up
console.log(Math.ceil(4.1));   // 5
console.log(Math.ceil(4.9));   // 5


// Math.floor() → always rounds down
console.log(Math.floor(4.9));  // 4
console.log(Math.floor(4.1));  // 4


// Math.trunc() → removes decimal part
console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(-4.9)); // -4


// Math.pow(a, b) → a raised to power b
console.log(Math.pow(2, 3));   // 8 (2^3)


// Math.sqrt() → square root
console.log(Math.sqrt(16));    // 4


// Math.cbrt() → cube root
console.log(Math.cbrt(27));    // 3


// Math.abs() → absolute value (removes negative sign)
console.log(Math.abs(-10));    // 10


// Math.max() → largest value
console.log(Math.max(3, 7, 2)); // 7


// Math.min() → smallest value
console.log(Math.min(3, 7, 2)); // 2


// Math.random() → random number between 0 and 1
console.log(Math.random());


// Random number between 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);


// toFixed() → fixes decimal places (returns string)
let o = 5.6789;
console.log(o.toFixed(2));  // "5.68"