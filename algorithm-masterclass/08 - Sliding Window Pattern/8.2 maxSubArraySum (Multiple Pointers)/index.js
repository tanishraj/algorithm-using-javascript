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

    if(num == 1){
        return Math.max(...arr);
    }

    let i = 0;
    let sum = 0;
    let count = 0;
    let accumulator = 0;

    for(j=i+1; j<arr.length; j++){
        
        sum = sum + arr[j];
        count++;

        if(count === num-1){
            sum = sum + arr[i];
            i = i+1;
            j = i;
            count = 0;
            
            if(accumulator < sum){
                accumulator = sum;
            }

            sum = 0;
            
        }
    }

    return accumulator;
}

console.log(maxAubArraySum([1,2,5,2,8,1,5], 2)); // 10
console.log(maxAubArraySum([1,2,5,2,8,1,5], 4)); // 17
console.log(maxAubArraySum([4,2,1,6], 1)); // 6
console.log(maxAubArraySum([4,2,1,6,2], 4)); // 13
console.log(maxAubArraySum([], 4)); // null