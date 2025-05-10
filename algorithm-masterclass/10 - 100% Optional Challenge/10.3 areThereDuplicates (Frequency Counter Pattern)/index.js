/*
================================================================

Program Example:
------------------
Implement a function called, areThereDuplicates which aceepts 
a variable number of arguments, and checks whether there are 
any duplicates among the arguments passed in. You can solve this 
using frequency counter pattern OR the multiple pointer pattern.

areThereDuplicates(,1,2,3); // false
areThereDuplicates(1,2,2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true

================================================================
*/

function areThereDuplicates(){
  let customObject = {};

  for(let item of arguments){
    customObject[item] = customObject[item]+1 || 1;
  }

  for(let item in customObject){
    if(customObject[item] > 1){
      return true;
    }
  }

  return false;
}

console.log(areThereDuplicates(1,2,3)); // false
console.log(areThereDuplicates(1,2,2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

