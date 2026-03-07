function runFactorsOfNumbers() {
    let pr = prompt("Enter any Number");
    let n = Number(pr);

    if (pr === null) {
        console.log("cancelled")
    }
    else if (isNaN(n) || n <= 0) {
        console.log("invalid input number should be more than 0")
    }
    else if (n > 0) {
        for(var i = 1; i <= n/2; i++){
            if(n % i === 0){
                console.log(i);
            } 
        }
        console.log(n);
    }
}