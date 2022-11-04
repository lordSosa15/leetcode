Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 
12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. 
Instead, the number four is written as IV.
 Because the one is before the five we subtract it making four. 
 The same principle applies to the number nine, which is written as IX. 
 There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.




// *****************************************

solution 1


const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const s = "MCMLXXXIX";
  // s = 1989
  function romanToInt(s) {
    let accumulator = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "I" && s[i + 1] === "V") {
        accumulator += 4;
        i++;
      } else if (s[i] === "I" && s[i + 1] === "X") {
        accumulator += 9;
        i++;
      } else if (s[i] === "X" && s[i + 1] === "L") {
        accumulator += 40;
        i++;
      } else if (s[i] === "X" && s[i + 1] === "C") {
        accumulator += 90;
        i++;
      } else if (s[i] === "C" && s[i + 1] === "D") {
        accumulator += 400;
        i++;
      } else if (s[i] === "C" && s[i + 1] === "M") {
        accumulator += 900;
        i++;
      } else {
        accumulator += romanHash[s[i]];
      }
    }
    return accumulator;
  }




  solution 2
  /*
1. create sum variable
2. loop through s.
  a. create "prev" variable
  b. create switch class for each possible variable as a value
3. return sum
*/

 const romanToInt = function(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let prev = s[i-1];
        switch (s[i]) {
            case 'I': sum +=1;
                break;
            case "V": sum = prev ==="I" ? sum + 3 : sum + 5;
                break;
            case "X": sum = prev ==="I" ? sum + 8 : sum + 10;
                break;
            case "L": sum = prev ==="X" ? sum + 30 : sum + 50;
                break;
            case "C": sum = prev ==="X" ? sum + 80 : sum + 100;
                break;
            case "D": sum = prev ==="C" ? sum + 300 : sum + 500;
                break;
            case "M": sum = prev ==="C" ? sum + 800 : sum + 1000;
                break;
            default:
                break;
        }
    }
    return sum
};

Time: O(n)
Space: O(1)

