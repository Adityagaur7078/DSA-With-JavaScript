function runMathFunctions() {

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

}
