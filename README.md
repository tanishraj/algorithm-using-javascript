# algorithms-using-javascript
A GitHub repository featuring a collection of well-documented JavaScript implementations of various algorithms and data structures, designed to help developers learn, practice, and improve their problem-solving skills.

# Big O Notation: Understanding Time and Space Complexity

## Introduction
Big O Notation is a fundamental concept in computer science used to describe the performance or complexity of an algorithm. It helps us understand how an algorithm's runtime or space requirements grow as the input size increases. This guide will walk you through the key ideas, rules, and examples to help you master Big O Notation.

---

## What is Big O Notation?

Big O Notation is a way to analyze the efficiency of an algorithm. It allows us to compare different implementations of the same function and determine which one is better in terms of performance.

### What Does "Better" Mean?
When evaluating code, "better" can refer to:
- **Faster execution time**
- **Less memory-intensive**
- **More readable and maintainable**

---

## Key Concepts

### Time Complexity
Time complexity measures how the runtime of an algorithm grows as the input size increases. Here are some common rules of thumb:

- **O(2n)** simplifies to **O(n)**
- **O(500)** simplifies to **O(1)**
- **O(13n²)** simplifies to **O(n²)**
- **O(n + 10)** simplifies to **O(n)**
- **O(1000n + 50)** simplifies to **O(n)**
- **O(n² + 5n + 8)** simplifies to **O(n²)**

#### Additional Rules for Time Complexity:
1. **Arithmetic operations** are constant.
2. **Variable assignment** is constant.
3. **Accessing elements** in an array (by index) or object (by key) is constant.
4. In a **loop**, the complexity is the length of the loop multiplied by the complexity of the operations inside the loop.

---

### Space Complexity
Space complexity measures how much memory an algorithm uses relative to the input size. Here are some rules of thumb:

1. **Primitive types** (e.g., boolean, number, undefined, null) use constant space.
2. **Strings** require **O(n)** space, where `n` is the string length.
3. **Reference types** (e.g., arrays, objects) generally require **O(n)** space, where `n` is the length of the array or the number of keys in the object.

---

### Logarithms in Big O
Logarithms are another important concept in Big O Notation. Here’s what you need to know:
- The **logarithm of a number** roughly measures how many times you can divide that number by 2 before getting a value less than or equal to one.
- Logarithmic time complexity (**O(log n)**) is often seen in efficient algorithms like binary search.

---

## Why Use Big O Notation?
- **Performance Comparison**: Helps compare different algorithms to determine which one is more efficient.
- **Scalability**: Provides insights into how an algorithm will perform as the input size grows.
- **Optimization**: Guides developers in writing code that is both fast and memory-efficient.

---

## Examples of Big O Notation

### Time Complexity Examples:
1. **O(1)**: Constant time (e.g., accessing an array element by index).
2. **O(n)**: Linear time (e.g., iterating through an array).
3. **O(n²)**: Quadratic time (e.g., nested loops).

### Space Complexity Examples:
1. **O(1)**: Constant space (e.g., storing a single variable).
2. **O(n)**: Linear space (e.g., storing an array of size `n`).

---