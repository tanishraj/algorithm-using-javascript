
/*
==========================================================================
Write a function that calculates the sum of all numbers from 1 upto
 (and including) some other number n.

 1 to 3 => 1+2+3 => 6
 1 to 5 => 1+2+3+4+5 => 15
==========================================================================
*/


function addUpTo(num){
    let total = 0;
    for(let i = 1;i <= num; i++){
        total += i;
    }

    return total;
}


// Timing function
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);