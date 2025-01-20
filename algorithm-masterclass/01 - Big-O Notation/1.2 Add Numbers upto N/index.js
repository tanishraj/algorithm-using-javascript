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


console.log(addUpTo(4)); //10