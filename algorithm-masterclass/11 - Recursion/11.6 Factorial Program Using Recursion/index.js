/*
================================================================

Program Example:
----------------------
Write a program to find the factorial numbers.

================================================================
*/

function factorialWithRecursion(num) {
    if(num === 1) return 1;
    return num * factorialWithRecursion(num - 1);
}

console.log(factorialWithRecursion(4));


// Using Normal Iteration

function factorialUsingIteration(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i;
    }

    return total;
}

console.log(factorialUsingIteration(4));