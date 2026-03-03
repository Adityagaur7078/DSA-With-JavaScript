function runSum() {

    // Sum of Two Number

    let a = 9;
    let l = 23;

    console.log(a + l);


    // Normal Sum
    let b = 1;
    let c = 1;

    console.log(b + c);


    // String Sum
    let j = "2";
    let k = "2";

    console.log(j + k);


    // Normal Digit + String Digit known as Concatination

    console.log(c + j);
    console.log(typeof (c + j));


    let m = 20;
    let n = 20;

    console.log("sum of 20 and 20 " + m + n);
    // String comes first → everything becomes string → output: sum of 20 and 20 2020

    console.log("sum of 20 and 20 is " + (m + n));
    // Parentheses calculate first → 20 + 20 = 40 → output: sum of 20 and 20 is 40

    console.log(m + n + " is sum of 20 and 20");
    // Numbers add first → 40 → then joins with string → output: 40 is sum of 20 and 20

}