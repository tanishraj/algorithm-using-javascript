/*
================================================================

Pure Recursion:
--------------------------
Pure recursion is the recursion process when we call the same 
same function inside the same function.

Tips:
------
a) For arrays, use methods like slice, the spread operator, and 
concat thhat make copies of arrays so you do not mutate them.
b) Remember that strings are immutable so you will need to use 
methods like slice, substr or substring to make copies of strings.

================================================================
*/

function collectOddValues(nums){
    let newArr = [];

    if(arr.length === 0){
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));

    return newArr;
}

collectOddValues([1,2,3,4,5,6,7,8,9]);