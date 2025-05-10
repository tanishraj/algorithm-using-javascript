/*
================================================================

Program Example:
----------------------
Write a function called stringSearch which will take a pattern 
and will look for occurance of that pattern in the long string.
================================================================
*/

function stringSearch(longString, pattern) {
  let matchCount = 0;
  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (longString[i + j] !== pattern[j]) {
        break;
      }
      if (j === pattern.length - 1) {
        matchCount += 1;
      }
    }
  }
  return matchCount;
}

console.log(stringSearch("xamomgtfomg", "omg"));
