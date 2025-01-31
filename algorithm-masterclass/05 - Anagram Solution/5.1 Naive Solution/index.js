/*
================================================================

Anagram:
----------------------
Given two strings, write a function to determine if the second 
string is an anagram of the first. An anagram is a word, phrase 
or name formed by rearranging the letters of another, such as 
cinema, formed from iceman.

Example:
----------
validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false
validAnagram('awesome', 'awesom'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('textwisttime', 'timewisttext'); // true

================================================================
*/


function validAnagram(str1, str2){
    let firstStringObject = {};
    let secondStringObject = {};

    if(str1 === str2){
        return true;
    }

    if(str1.length !== str2.length){
        return false;
    }

    for(let char of str1){
        firstStringObject[char] = firstStringObject[char] + 1 || 1;
    }

    for(let char of str2){
        secondStringObject[char] = secondStringObject[char] + 1 || 1;
    }

    for(let char in firstStringObject){
        if(firstStringObject[char] !== secondStringObject[char]){
            return false;
        }
    }

    return true;
}

validAnagram('awesome', 'awesom');