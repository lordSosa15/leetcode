// You are given an m x n integer grid accounts where 
// accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
// Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.


Example 1:
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.



// *******************************************


/*
1. create maxWealth variable to hold the highest value.
2. loop through the accounts array
    a. create variable to hold the current wealth
    b. loop through the inner array.
        i.add the valie of each index to the current wealth
    c. IF current wealth > maxWealth, set them equal to each other.
3. return maxWealth
*/

const maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let currentWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
           currentWealth += accounts[i][j]
        }
        if (currentWealth > maxWealth){
            maxWealth = currentWealth
        }
    }
    return maxWealth
};


time: O(n*m)
space: O(1)
