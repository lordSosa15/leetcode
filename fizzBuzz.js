Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

 solution if array as solution 

//  *****************************

const fizzBuzz = function(n) {
    let result = []
     for (i=1; i<=n; i++) {
    if (i%15 == 0) {
    result.push("FizzBuzz");
}       
    else if (i%3 == 0) {
    result.push("Fizz"); 
}
    else if (i%5 == 0) {
    result.push("Buzz");
}
            
    else {
    result.push(i.toString());
}    
}
return(result)
    
};


solution if string as solution

const fizzBuzz = function(n){
for (i=1; i<=n; i++) {
    if (i%15 === 0) {
    console.log ("FizzBuzz");
}       
    else if (i%3 === 0) {
    console.log ("Fizz"); 
}
    else if (i%5 === 0) {
    console.log("Buzz");
}
            
    else {
    console.log(i);
}    
}

};