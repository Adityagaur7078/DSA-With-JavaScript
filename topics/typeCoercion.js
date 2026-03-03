function runTypeCoercion() {

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

}