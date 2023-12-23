/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0;
    let valid = "aeiouAEIOU";
    for(let i=0;i<str.length;i++){
      if(valid.indexOf(str[i])!==-1){
        count = count + 1;
      }
    }
    return count;
}

module.exports = countVowels;