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
Time: 
Space: 

================================================================
*/

function maxAubArraySum(arr, num){
    if(arr.length === 0){
        return null;
    }

    let prev = 0;

    for(let i = 0; i < arr.length; i++){
        let sum = 0;
        sum = sum + arr[i];
        for(j = i+1; j < i+num; j++){
            sum = sum + arr[j];
        }
        if(prev < sum){
            prev = sum;
        }
    }

    return prev;
}

console.log(maxAubArraySum([1,2,5,2,8,1,5], 2)); // 10
console.log(maxAubArraySum([1,2,5,2,8,1,5], 4)); // 17
console.log(maxAubArraySum([4,2,1,6], 1)); // 6
console.log(maxAubArraySum([4,2,1,6,2], 4)); // 13
console.log(maxAubArraySum([], 4)); // null