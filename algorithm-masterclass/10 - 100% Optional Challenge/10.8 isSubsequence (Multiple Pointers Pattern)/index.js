/*
================================================================

Program Example:
------------------
Write a function called isSubsequence which takes in two strins 
and checks whether the characters in the first string form 
a subsequence of the characters in the second string. In other 
words, the function should check whether the characters in the 
first string appear somewhere inn teh second string, without 
their order changing.

Complexity:
-----------------------
Time: O(n)
Sapce: O(1)

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false

================================================================
*/

function isSubsequence(str1, str2){
    if(str2.includes(str1)){
        return true;
    }

    if(str1.length > str2.length){
        return false;
    }

    let i = 0;

    for(let j = 0; j < str2.length; j++){
        if(str1[i] === str2[j]){
            i++;
        }

        if(i === str1.length){
            return true;
        }
    }

    return false;
}


console.log(isSubsequence('hellol', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false