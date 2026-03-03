function runInvalidUnary() {

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

}