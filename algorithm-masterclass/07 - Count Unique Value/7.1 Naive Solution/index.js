/*
================================================================

Program Example:
-------------------
Write a function called countUniqueValues, which accpets a 
sorted array, and counts the unique values in the array. 
There can be negative number in the array, but it will always 
be sorted.

countUniqueValues([1,1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4

Complexity:
------------------
Time: O(n)
Space: O(n)

================================================================
*/

function countUniqueValues(arr){
    let uniqueValuesObject = {};

    for(let i=0; i<arr.length; i++){
        if(!uniqueValuesObject[arr[i]]){

            uniqueValuesObject[arr[i]] = uniqueValuesObject[arr[i]]+1 || 1;
        }
    }
    
    return Object.keys(uniqueValuesObject).length;
}

console.log(countUniqueValues([1,1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4