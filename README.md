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

# Sum Up To Function (Loop-based)

## Description
A JavaScript function that calculates the sum of all numbers from 1 up to a given number using a `for` loop.

## Function Signature
```javascript
function addUpTo(num)
```

### Parameters
- `num`: The upper limit of numbers to sum (inclusive)

### Returns
- The total sum of all integers from 1 to `num`

## Performance Timing
The code includes performance measurement using `performance.now()` to track execution time.

## Example Usage
```javascript
const total = addUpTo(1000000000);
console.log(total);

// Timing example
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);
```

## Time Complexity
- O(n) due to the linear loop
- Slower compared to the mathematical formula approach

## Notes
- Suitable for understanding summation through iteration
- Less efficient for large numbers

# Sum Function Performance Analysis

## Implementation
```javascript
function addUpTo(num) {
    let total = 0;
    for(let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}
```

## Performance Characteristics
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)
- **Scalability**: Inefficient for large numbers

## Benchmarking
- Test Case: `addUpTo(1000000000)`
- Measures execution time using `performance.now()`

### Optimization Recommendation
Consider using mathematical formula: `n * (n + 1) / 2` for O(1) time complexity

# JavaScript Function Time Complexity

## `logUpTo(n)`
- **Complexity**: O(n)
- **Example**:
```javascript
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
logUpTo(5); // Outputs: 1, 2, 3, 4, 5
```

## `logAtMost10(n)`
- **Complexity**: O(1)
- **Example**:
```javascript
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
logAtMost10(3);   // Outputs: 1, 2, 3
logAtMost10(15);  // Outputs: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

## `logAtLeast10(n)`
- **Complexity**: O(n)
- **Example**:
```javascript
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}
logAtLeast10(5);   // Outputs: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
logAtLeast10(15);  // Outputs: 1, 2, ..., 15
```

## `onlyElementsAtEvenIndex(array)`
- **Complexity**: O(n)
- **Example**:
```javascript
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
const arr = [10, 20, 30, 40, 50];
console.log(onlyElementsAtEvenIndex(arr)); 
// Outputs: [10, 30, 50]
```

## `subtotals(array)`
- **Complexity**: O(n²)
- **Example**:
```javascript
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
const numbers = [1, 2, 3, 4, 5];
console.log(subtotals(numbers)); 
// Outputs: [1, 3, 6, 10, 15]
```

# JavaScript Function Space Complexity Analysis

## `logAtMost10(n)`
- **Space Complexity**: O(1)
- **Example**:
```javascript
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
// Constant space usage regardless of input
```

## `onlyElementsAtEvenIndex(array)`
- **Space Complexity**: O(n)
- **Example**:
```javascript
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
// Space grows linearly with input array size
```

## `subtotals(array)`
- **Space Complexity**: O(n)
- **Example**:
```javascript
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
// Creates new array same size as input array
```

## `logUpTo(n)`
- **Space Complexity**: O(1)
- **Example**:
```javascript
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
// Constant space usage with single variable
```

## Key Insights
- Constant loop variables: O(1) space
- Creating new arrays: O(n) space
- Nested loops don't always mean O(n²) space

# Big O Complexity: JavaScript Array Operations

## Time Complexity Breakdown

| Operation | Time Complexity | Description |
|-----------|-----------------|-------------|
| `push()` | O(1) | Add element to end |
| `pop()` | O(1) | Remove element from end |
| `shift()` | O(N) | Remove element from beginning |
| `unshift()` | O(N) | Add element to beginning |
| `concat()` | O(N) | Merge arrays |
| `slice()` | O(N) | Extract array portion |
| `splice()` | O(N) | Modify array contents |
| `sort()` | O(N * log N) | Sort array elements |
| `forEach/map/filter/reduce` | O(N) | Iterate through array |

## Performance Considerations
- Operations at the end of array are fastest
- Operations at the beginning require shifting elements
- Sorting is more time-consuming than simple iterations