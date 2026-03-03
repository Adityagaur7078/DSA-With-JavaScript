function runSwitch() {
    // *** switch statement ***

    // switch is used when we want to check one value
    // against multiple fixed cases

    // switch uses strict comparison (===)
    // break is very important
    // default runs if no case matches

    // -------------------------------
    // Basic Example
    // -------------------------------

    let day = 2;

    switch (day) {
        case 1:
            console.log("Monday");
            break;

        case 2:
            console.log("Tuesday");
            break;

        case 3:
            console.log("Wednesday");
            break;

        default:
            console.log("Invalid Day");
    }

    // Explanation:
    // day = 2
    // case 2 matches
    // so "Tuesday" is printed
    // break stops execution

    // -------------------------------
    // Without break (Fall Through)
    // -------------------------------

    let num = 1;

    switch (num) {
        case 1:
            console.log("One");

        case 2:
            console.log("Two");

        default:
            console.log("Done");
    }

    // Output:
    // One
    // Two
    // Done

    // Because there is no break
    // execution continues downward

    // -------------------------------
    // Multiple cases same output
    // -------------------------------

    let grade = "B";

    switch (grade) {
        case "A":
        case "B":
            console.log("Good");
            break;

        case "C":
            console.log("Average");
            break;

        default:
            console.log("Fail");

    }

    // grade = "B"
    // case "B" matches
    // "Good" is printed

    // -------------------------------
    // Strict comparison example
    // -------------------------------

    switch (5) {
        case "5":
            console.log("Matched");
            break;

        default:
            console.log("Not Matched");
    }

    // Output: Not Matched

    // Because switch uses ===
    // 5 !== "5"
    // type is different

    // -------------------------------
    // Important Notes
    // -------------------------------

    // switch works best when:
    // one variable is compared with many fixed values

    // do not use switch when:
    // you need >, <, >=, <= conditions
    // for that use if-else

    // *** End of switch explanation ***

}