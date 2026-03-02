let unit = Number(prompt("Enter Electricity Unit"));

let amount = 0;

if (isNaN(unit) || unit < 0) {
    console.log("Enter Valid Input");
}

else{
    if (unit > 400) {
    amount = (unit - 400) * 13;
    unit = 400;
    }
    if (unit > 200 && unit <= 400) {
    amount += (unit - 200) * 8;
    unit = 200;
    }
    if (unit > 100 && unit <= 200) {
    amount += (unit - 100) * 6;
    unit = 100;
    }
    if (unit >= 0 && unit <= 100) {
    amount += (unit - 0) * 4.2;
    unit = 0;
    }
    console.log("Total Bill:", "₹",amount.toFixed(2));
}