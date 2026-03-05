function runLoop() {

    // for( ;; ) {
    //     console.log(i);
    // }

    // This is a valid for loop syntax. A for loop structure is: for(initialization ; condition ; update)

    // The loop only requires the two semicolons (;;) so for( ; ; ) is still valid JavaScript syntax.

    // But here there is: no initialization no condition no update

    // Because there is no condition to stop the loop, this becomes an infinite loop.

    // If this runs in the browser it will keep executing forever and the browser tab may hang or freeze.



// print from 1 to 23
    for(var i = 1; i <= 23; i++) {
        console.log(i);
    }

    console.log(i + " fail output ");

    // Explanation:
    // Here we used "var" for variable i.

    // Variables declared with var are function scoped. That means they exist in the entire function, not only inside the loop block.

    // When the loop finishes, i becomes 24 because the condition (i <= 23) fails.

    // Since var allows access outside the loop, the console below prints 24 even though we did not explicitly print it inside the loop.



// print from 23 to 49
    for(let index = 23; index <= 49; index++) {
        console.log(index);
    }

    // console.log(index);

    // Explanation:
    // Here we used "let" instead of var.

    // Variables declared with let are block scoped. That means they only exist inside the loop block { }.

    // If we try to print index outside the loop, JavaScript will throw a ReferenceError.



// print loop in reverse from 200 to 100
    for(let i = 200; i >= 100; i--) {
        console.log(i);
    }

    // Explanation:
    // This loop runs in reverse order.

    // i starts from 200, The condition checks if i >= 100 After each iteration i-- decreases the value by 1

    // The loop continues until i becomes 99 then the condition fails and the loop stops.
}