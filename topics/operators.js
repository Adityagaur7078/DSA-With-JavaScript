function runOperators() {

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









    // *** ternary operators [condition ? true_value : false_value;] ***

    // in this first we give condition then ? after this true condition is written : after this false condition

    112 > 13 ? console.log("you") : console.log("me");
    // 112 > 13 → true
    // so the part before : runs
    // console.log("you") executes
    // Output: you


    11 > 13 ? console.log("you") : console.log("me");
    // 11 > 13 → false
    // so the part after : runs
    // console.log("me") executes
    // Output: me


    console.log(122 > 13 ? "you" : "me");
    // Simple way to write ternary operator










    // *** Nested ternary operator condition1 ? true_block1 : condition2 ? true_block2 : false_block;

    // *** Nested ternary operator ***

    let marks = 75;

    marks >= 90
        ? console.log("Grade A")
        : marks >= 60
            ? console.log("Grade B")
            : console.log("Grade C");


    // Step 1:
    // marks >= 90 → false

    // Step 2:
    // since first condition is false,
    // it checks next condition

    // marks >= 60 → true

    // So console.log("Grade B") runs

    // Output: Grade B

}