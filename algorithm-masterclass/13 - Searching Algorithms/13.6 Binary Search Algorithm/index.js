/*
================================================================

Binary Search Algo:
----------------------
i) Binary search is a much faster form of serach.
ii) Rather than eliminating one element at a time, you can 
eliminate half of the remaining elements at a time.
iii) Binary search only works on sorted arrays.

Note:
-------
This can be achieved with divide and conquer pattern.

Explanation:
--------------
[1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]

1) Find the middle point (consider left values when it has 
total of even numbers, take the left one and in case of odd 
take the middle one)

2) check if the middle value is greater/smaller.

3) If it is smaller you dont have to iterate over last half.

4) if it is greater you dont have to iterate over first half.

5) Repeat the above steps.

================================================================
*/
