function runSwapping() {

    // ******* SWAPPING *******

    let x = 10;
    let y = 20;
    let z;


    //Method 1

    // z = x; // z = 10 , x = 10
    // x = y; // x = 20 , y = 20
    // y = z; // y = 10 , z = 10


    //Method 2

    // x = x + y; // x = 30, y = 20
    // y = x - y; // x = 30, y = 10
    // x = x - y; // x = 20, y = 10


    //Method 3

    [x, y] = [y, x];

    console.log(x, y);


}