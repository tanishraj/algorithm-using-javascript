/*
================================================================

How recursive functions work:
--------------------------------
Invoke the same function with a different input until you reach 
your base case.


Two essential parts of a recursive function:
-----------------------------------------------
a) Base Case
b) Different Input

================================================================
*/

function countDownRecursiveWay(num){
    if(num <= 0){
        console.log("All Done.");
        return;
    }

    console.log(num);
    num--;
    countDown(num);
}

countDownRecursiveWay(5);

function countDownIterationWay(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All Done.");
}

countDownIterationWay(5);