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
    if(str1.length !== str2.length){
        return false;
    }

    const lookup = {};

    for(let char of str1){
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }

    for(let char of str2){
        if(!lookup[char]){
            return false;
        } else{
            lookup[char] -= 1;
        }
    }

    return true;
}

// validAnagram('awesome', 'awekoem');
validAnagram('aa,bb,cc','aa,cc,bb');