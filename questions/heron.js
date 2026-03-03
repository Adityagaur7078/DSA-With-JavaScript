function runHeron() {

    // Question
    // Area of triangle by heron's formula

    // Answer
    let a = 20;
    let b = 21;
    let c = 29;

    let s = (a + b + c) / 2;

    // heron's formula
    console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));

}