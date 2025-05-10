/*
================================================================

Program Example:
-------------------
Write a function called maxAubArraySum which accepts an array 
of integers and a number called n. The fuinction should 
calculate the maximum sum of n consecutive elements in the 
array.

maxAubArraySum([1,2,5,2,8,1,5], 2); // 10
maxAubArraySum([1,2,3,2,8,1,5], 4); // 17
maxAubArraySum([4,2,1,6], 1); // 6
maxAubArraySum([4,2,1,6,2], 4); // 13
maxAubArraySum([], 4); // null


Complexity:
------------------
Time: O(n)
Space: 

================================================================
*/

function maxAubArraySum(arr, num){
    if(num > arr.length){
        return null;
    }

    var max = -Infinity;
    for(let i=0; i<arr.length-num+1; i++){
        temp = 0;
        for(let j = 0; j<num; j++){
            temp += arr[i+j];
        }

        if(temp > max){
            max = temp;
        }
    }

    return max;
}

console.log(maxAubArraySum([1,2,5,2,8,1,5], 2)); // 10
console.log(maxAubArraySum([1,2,5,2,8,1,5], 4)); // 17
console.log(maxAubArraySum([4,2,1,6], 1)); // 6
console.log(maxAubArraySum([4,2,1,6,2], 4)); // 13
console.log(maxAubArraySum([], 4)); // null