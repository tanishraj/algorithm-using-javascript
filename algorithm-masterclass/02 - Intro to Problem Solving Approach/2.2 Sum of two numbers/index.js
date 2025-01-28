/*
================================================================
Write a program which takes two numbers and returns their sum
================================================================

Problem solving approach:
----------------------------
a) Understand the problem
b) Explore concrete examples
c) Break it down.
d) Solve or simplify
e) Look back and refactor

Note: If you dont try to understand the problem clearly, they you may endup creating a program that may not work in all the scenarios. Lets take this example, where we can add 2 numbers  but what happens when we try to add 2 extremely large numbers like 

1000000000000000000000 + 100000000000000000000000 

it may fail because we know a variable can store a limited data in it.
*/

function sum(a,b){
    return a+b;
}

console.log(sum(10,10));