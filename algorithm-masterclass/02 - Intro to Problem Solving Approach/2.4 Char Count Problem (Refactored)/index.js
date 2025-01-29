/*
================================================================

Write a program which takes in a string and returns counts of 
each character in the string.

charCount('aaaa') => {a:4}
charCount('hello') => {h:1, e:1, l:1, o:1}


Problem solving approach:
----------------------------
a) Understand the problem
b) Explore concrete examples
c) Break it down.
d) Solve or simplify
e) Look back and refactor

Steps involved in order to solve this problem:
-------------------------------------------------
a) make object to return at end
b) loop over string at each character
      if the character is a number or letter and is a key in object add one to that key
      if the character is a number or letter and is not a key in object add that key and add 1 to that key
      if the character is something else dont do anything
c) return object at end

================================================================
*/

function charCount(str){
  let charCountObject = {}

  for(let char of str){
    char = char.toLowerCase();
    if(/[a-z0-9]/.test(char)){
      charCountObject[char] = charCountObject[char]+1 || 1;
    }
  }

  return charCountObject;
}

charCount('Hello There');