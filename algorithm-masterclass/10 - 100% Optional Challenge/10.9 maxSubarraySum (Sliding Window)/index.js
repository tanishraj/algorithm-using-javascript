/*
================================================================

Program Example:
------------------
Given an array of integers and a number, write a function 
called maxSubrraySum, whihch finds the maximum sum of a 
subarray with the length of teh number passed to the 
function.

Note that a subarray must consists of consecutive elements 
from the original array. In the firest example below, 
[100, 200, 300] is a subarray of the original array, but 
[100, 300] is not.

Complexity:
-----------------------
Time: O(n)
Sapce: O(1)

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 2); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 2); // null

================================================================
*/

function maxSubarraySum(arr, val){
    if(val > arr.length){
        return null;
    }

    let sum = 0;
    let max = 0;

    for(let i = 0; i < val; i++){
        sum = sum + arr[i];
    }

    max = sum;

    for(let j = val; j < arr.length; j++){
        sum = sum - arr[j-val] + arr[j];
        if(max < sum){
            max = sum;
        }
    }

    return max;
}


console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
