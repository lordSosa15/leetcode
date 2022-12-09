Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

// Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"


// solution 1

var longestCommonPrefix = function(strs) {

    if (strs.length == 0){
        return "";
    }
    //     create variable
        let prefix = strs[0]

        for(let i =1; i<strs.length; i++){
            while(strs[i].indexOf(prefix) !== 0){
                prefix = prefix.substring(0, prefix.length -1)
            }
        }
        return prefix
    };

// solution 2

let longestCommonPrefix = function(strs) {
    let longest = '';
    if (strs.length === 0) {
      return longest;
    }
  
    let comparisonWord = strs[0];
    let comparisonIndex = 0;
  
    for (let comparisonLetter of comparisonWord) {
      for (let i = 1; i < strs.length; i++) {
        let currentWord = strs[i];
        let currentLetter = currentWord.charAt(comparisonIndex);
  
        if (comparisonIndex > currentWord.length || comparisonLetter !== currentLetter) {
          return longest;
        }
      }
      comparisonIndex++;
      longest += comparisonLetter;
    }
  
    return longest;
  };