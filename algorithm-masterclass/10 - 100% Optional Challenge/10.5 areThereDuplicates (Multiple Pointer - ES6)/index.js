/*
================================================================

Program Example:
------------------
Implement a function called, areThereDuplicates which aceepts 
a variable number of arguments, and checks whether there are 
any duplicates among the arguments passed in. You can solve this 
using frequency counter pattern OR the multiple pointer pattern.

areThereDuplicates(1,2,3); // false
areThereDuplicates(1,2,2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true

================================================================
*/

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1,2,3)); // false
console.log(areThereDuplicates(1,2,2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true