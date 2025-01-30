/*
================================================================

Frequency Counters:
----------------------
This pattern uses objects or sets to collect values/frequencies 
of values.
This can often avoid the need for nested loop or O(n^2) 
operations with arrays and strings


EXAMPLE:
-----------
Write a function called same, which accepts two arrays. The 
function should return true if every value in the array 
has it's corresponding value squared in the scecond array. 
The frequency of values must be the same.

same([1,2,3], [4,1,9]); // true
same([1,2,3], [1,9]); // false
same([1,2,1], [4,4,1]); // false

================================================================
*/


function same(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }

    for(let i=0; i<arr1.length; i++){
        if(arr2.indexOf(arr1[i] ** 2) === -1){
            return false;
        }
    }
    return true;
}

console.log(same([1,2,3], [1,4,9]));