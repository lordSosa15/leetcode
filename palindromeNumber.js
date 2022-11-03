Given an integer x, return true if x is a palindrome, and false otherwise.


solution 1

const isPalindrome = function(x) {
    let reversed = x.toString().split('').reverse().join('')
    return (x.toString() === reversed)
    
};


solution 2
// optimal
const isPalindrome = function(x) {
    let reversedStr = ''
    let xStr = x.toString() // xStr = 121
    
    for (let i of xStr){
        reversedStr = i + reversedStr //"" + 1 | '2' + '1' = 21 | '1' + '21'
    }
    return(reversedStr === xStr)
};
