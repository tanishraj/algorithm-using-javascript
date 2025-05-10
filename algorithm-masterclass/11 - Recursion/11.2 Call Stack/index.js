/*
================================================================

What happens behind the scene:
--------------------------------
In almost all programming language there is a built in data 
structure that manages what happens when functions are invoked. 

it named as call stack.


The Call Stack:
-----------------
a) Its stack data structure.
b) Any time a function is invoked it it placed (pushed) on the top 
of the call stack.
c) When JS sees the return keyword or when the function ends, the 
compiler will remove(pop).


Why do I care?
----------------
you are used to functions being pushed on the callstack and popped 
off when they are done.

When we write recursive functions, we keep pushing new functions 
onto the call stack.

================================================================
*/


function takeShower(){
    return "Showering";
}

function eatBreakfast(){
    let meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"];
    return items[Math.floor(Math.random() * items.length)];
}

function wakeup(){
    takeShower();
    eatBreakfast();
    console.log("Ok ready to go to work.");
}

wakeup();