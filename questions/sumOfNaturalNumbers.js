function runSumOfNaturalNumbers() {

    let value = prompt("Enter a number");
    let num = Number(value);

    if (value === null) {
        console.log("cancelled: no input entered");
    }
    else if (isNaN(num) || num <= 0) {
        console.log("Enter a valid positive number");
    }
    else {

        let sum = 0;

        for (let i = 1; i <= num; i++) {
            sum += i;
        }

        console.log("Sum:", sum);
    }



    // Mathematical Formula Solution (Optimized)
    // In interviews they sometimes ask a better solution without loop.

    // Formula:

    // Sum = n(n+1)/2


    // function runSumOfNaturalNumbers() {

    //     let value = prompt("Enter a number");
    //     let num = Number(value);

    //     if (value === null) {
    //         console.log("cancelled: no input entered");
    //     }
    //     else if (isNaN(num) || num <= 0) {
    //         console.log("Enter a valid positive number");
    //     }
    //     else {

    //         let sum = num * (num + 1) / 2;

    //         console.log("Sum:", sum);
    //     }
    // }
}

