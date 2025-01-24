# Big O Notation

## IDEA BEHIND Big O Notation:

Imagine we have multiple implementation for the same function. 
Now, how can we determine which one is the best.

Example: You can develop a program with 10 different approaches
and every single approach may be resulting the expected output.
but, not every implementation will be rated 10/10 on the rating scale.


## WHAT DOES BETTER MEAN IN TERMS OF WRITING CODE:

Faster?
Less memory intensive
More readable

Note: Timing function may not be precised in order to calculat the exact 
performance of the program execution. it is always better to know ways 
where we can get the precised timing.


## RULES OF THUMBS FOR TIME COMPLEXITY:

`O(2n) => O(n)`

`O(500) => O(1)`

`O(13n^2) => O(n^2)`

`O(n+10) => O(n)`

`O(1000n + 50) => O(n)`

`O(n^2 + 5n +8) => O(n^2)`



## OTHER RULES THAT HELPS FOR TIME COMPLEXITY:

a) Arithmentic operations are constant
b) Variable assingment is constant
c) Accessing element in an array (by index) or object (by key) is constant
d) In a loop, the complexity is the length of the loop times the times of 
    complexity of whatever happens inside of the loop.


## THUMB RULES FOR SPACE COMPLEXITY:

a) Most premitives (boolean, number, undefined and null) are constant 
space.
b) Strings require O(n) space ()where n is the string length
c) Reference types are generally O(n), where n is the length 
(for arrays) or the number of keys (for objects).


## THUMB RULES FOR Logarithms:

a) The logarithm of a number roughly measures the number of times you 
can divide that number by 2 before you get a values hat's less than 
or equal to one.



# Sum of Numbers from 1 to n

## Problem Statement
Write a function that calculates the sum of all numbers from 1 up to (and including) some other number `n`.

### Examples:
- `1 to 3` => `1 + 2 + 3` => `6`
- `1 to 5` => `1 + 2 + 3 + 4 + 5` => `15`


## Solution Code

```javascript
function addUpTo(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(4)); // Output: 10
```

# Sum Up To Function

## Description
A simple JavaScript function that calculates the sum of all numbers from 1 up to a given number `n` using the mathematical formula `n * (n + 1) / 2`.

## Function Signature
```javascript
function appUpTo2(n)
```

### Parameters
- `n`: The upper limit of numbers to sum (inclusive)

### Returns
- The total sum of all integers from 1 to `n`

## Examples
```javascript
appUpTo2(10); // Returns 55
appUpTo2(3);  // Returns 6
appUpTo2(5);  // Returns 15
```

## Mathematical Formula
The function uses the arithmetic series sum formula: 
`Sum = n * (n + 1) / 2`

## Usage
```javascript
const total = appUpTo2(10);
console.log(total); // Outputs 55
```

## Performance
This method is more efficient than using a loop, with O(1) time complexity.

