function runIncrementExamples() {

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
    // console.log(i); // 24




    // Question
    let x = 11, y = 22;

    let z = x + y + x++ + y++ + ++x + ++y;

    // console.log("x=" + x);
    // console.log("y=" + y);
    // console.log("z=" + z);

    // Answer

    // Initial values:
    // x = 11
    // y = 22

    // Expression:
    // z = x + y + x++ + y++ + ++x + ++y

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
    // z = 11 + 22 + 11 + 22 + 13 + 24

    // z = 103

    // Final values:
    // x = 13
    // y = 24

    console.log("x=" + x); // x=13
    console.log("y=" + y); // y=24
    console.log("z=" + z); // z=103

}