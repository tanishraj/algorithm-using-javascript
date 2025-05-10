/*
================================================================

Program Example:
------------------
Write a function called findLongestSubstring, which accepts 
a string and returns the length of the longest substring with 
all distinct characters.

findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('thisishowwedoit'); // 6

================================================================
*/

function findLongestSubstring(str) {
  if(str === ''){
      return 0;
  }

  let i = 0;
  let subString = '';
  let tempString = str[i];

  for(let j = i + 1; j < str.length; j++){
      debugger
    if(tempString.indexOf(str[j]) === -1){
        tempString += str[j];
    } else{
        if(tempString.length > subString.length){
            subString = tempString;
        }
        
        i++;
        j = i;
        tempString = str[i];
    }
  }

  return Math.max(subString.length, tempString.length);
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
