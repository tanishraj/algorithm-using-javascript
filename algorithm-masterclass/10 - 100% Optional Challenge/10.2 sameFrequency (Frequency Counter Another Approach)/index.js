/*
================================================================

Program Example:
------------------
Write a function called sameFrequency. Given two positive 
integers, find out if the two numbers have the same frequency 
of digits.

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false


Complexity:
-------------
Time Complexity: O(n)
Space Complexity: 

================================================================
*/

function sameFrequency(val1, val2){

    let valStr1 = val1.toString();
    let valStr2 = val2.toString();

    let obj1 = {};
    
    if(valStr1.length !== valStr2.length){
        return false;
    }

    for(let char of valStr1){
        obj1[char] = ++obj1[char] || 1;
    }

    while(val2 != 0){
        var remainder = val2%10;
        val2 = Math.floor(val2/10);
        if(!obj1[remainder]){
          return false;
        }
    }

    return true;

}

console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false


