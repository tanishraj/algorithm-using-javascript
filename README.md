# Big O Notation

## IDEA BEHIND Big O Notation:
-----------------------------
Imagine we have multiple implementation for the same function. 
Now, how can we determine which one is the best.

Example: You can develop a program with 10 different approaches
and every single approach may be resulting the expected output.
but, not every implementation will be rated 10/10 on the rating scale.

---

## WHAT DOES BETTER MEAN IN TERMS OF WRITING CODE:
------------------------------------------------
Faster?
Less memory intensive
More readable

Note: Timing function may not be precised in order to calculat the exact 
performance of the program execution. it is always better to know ways 
where we can get the precised timing.

---

## RULES OF THUMBS FOR TIME COMPLEXITY:
--------------------------------------
O(2n) => O(n)
O(500) => O(1)
O(13n^2) => O(n^2)
O(n+10) => O(n)
O(1000n + 50) => O(n)
O(n^2 + 5n +8) => O(n^2)

---

## OTHER RULES THAT HELPS FOR TIME COMPLEXITY:
---------------------------------------------
a) Arithmentic operations are constant
b) Variable assingment is constant
c) Accessing element in an array (by index) or object (by key) is constant
d) In a loop, the complexity is the length of the loop times the times of 
    complexity of whatever happens inside of the loop.

---

## THUMB RULES FOR SPACE COMPLEXITY:
-----------------------------------
a) Most premitives (boolean, number, undefined and null) are constant 
space.
b) Strings require O(n) space ()where n is the string length
c) Reference types are generally O(n), where n is the length 
(for arrays) or the number of keys (for objects).

---

## THUMB RULES FOR Logarithms:
------------------------------
a) The logarithm of a number roughly measures the number of times you 
can divide that number by 2 before you get a values hat's less than 
or equal to one.

---
