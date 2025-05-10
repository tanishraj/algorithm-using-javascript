/*
================================================================

Program Example:
--------------------------
Write a function which accepts a number and returns the factorial 
of that number. A factorial is the product of an integer and all 
the integers below it; Example: factorial opf (4!) is equals to 24, 
because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.

factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040

================================================================
*/

function factorial(num){
    if(num === 0){
        return 1;
    }

    let fact = num;

    for(let i = num-1; i > 0; i--){
        fact = fact * i;
    }

    return fact;
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040


