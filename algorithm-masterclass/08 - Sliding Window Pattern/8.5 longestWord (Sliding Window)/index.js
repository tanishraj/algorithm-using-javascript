let str  = "This is my complete new string with some sort of words.";

function findLongestWord(str){
  let longestWord = "";
  let i = 0;
  let tempWord = str[0];

  for(let j = i+1; j < str.length; j++){
    if(str[j] === " "){
      if(tempWord.length > longestWord.length){
        longestWord = tempWord;
      }
      tempWord = "";
      i = ++j;
      tempWord = str[i];
      continue;
    }

    tempWord += str[j];

  }

  return longestWord;
}

console.log(findLongestWord(str));