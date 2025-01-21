/*
==========================================================================
Write a function that calculates the sum of all numbers from 1 upto
 (and including) some other number n.

 1 to 3 => 1+2+3 => 6
 1 to 5 => 1+2+3+4+5 => 15
==========================================================================
*/

function appUpTo2(n){
    return n * (n + 1) / 2;
}

appUpTo2(10); // 55