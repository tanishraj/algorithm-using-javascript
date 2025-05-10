/*
================================================================

Program Example:
--------------------------
Write a function called power which accepts a based and an 
exponent. The function should return the power of the base to 
the exponent. This function should mimic the functionality of 
Math.pow() - dont worry about the negatives bases and exponents.

power(2,0); // 1
power(2,2); // 4
power(2,4); // 16

================================================================
*/

function power(num, pow){
    if(pow === 0){
        return 1;
    }

    return num * power(num, pow-1);
}

console.log(power(2,0)); // 1
console.log(power(2,2)); // 4
console.log(power(2,4)); // 16
