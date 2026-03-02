let age = Number(prompt("Enter your age"));

if (isNaN(age)) {
    console.log("Invalid Input");
}
else if (age >= 18) {
    console.log("You are eligible for vote");
}
else {
    console.log("You are not eligible for vote");
}