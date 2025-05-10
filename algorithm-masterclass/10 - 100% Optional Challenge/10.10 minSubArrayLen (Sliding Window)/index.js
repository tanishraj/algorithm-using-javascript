/*
================================================================

Program Example:
------------------
Write a function called minSubArrayLen which accepts two 
parameters - an array of positive integers and a positive 
integer.

This function should return the minal length of a contiguous 
subarray of which the sum is freater than or equal to the 
integer passed tot ehh fucntion, If tehre is not one, return 0 
instead.

Complexity:
-----------------------
Time: O(n)
Sapce: O(1)

minSubArrayLen([2,3,1,2,4,3], 7) // 2
minSubArrayLen([2,1,6,5,4], 9) // 2
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1
minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) // 5
minSubArrayLen([4,3,3,8,1,2,3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0
================================================================
*/

function minSubArrayLen(arr, val) {
  let i = 0;

  let sum = 0;
  let tempCounter = 0;

  sum = arr[i];

  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] >= val) {
      return 1;
    }

    if (j < arr.length) {
      sum = sum + arr[j];
    }

    if (sum >= val) {
      if (tempCounter == 0 || tempCounter > ((j - i) + 1)) {
        tempCounter = (j - i) + 1;
      }

      i++;
      j = i;
      sum = arr[i];
    }

  }

  return tempCounter;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0