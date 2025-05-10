/*
================================================================

Recursive Function:
----------------------
You will be able to see sumRange(4), sumRange(3), sumRange(2), 
sumRange(1) in the  call stack. So basically, call stack is a 
kind of stack where functions will be store for later execution 
with a return value. And this can be seen in practice for 
recursion.

================================================================
*/

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(4));