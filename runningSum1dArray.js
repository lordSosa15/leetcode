Given an array nums.
We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].



// *******************************
solution 1:

const runningSum = function(nums) {
    resultArr = []
    resultArr[0]= nums[0]

    for (let i = 1; i < nums.length; i++){
        resultArr[i] = nums[i]+ resultArr[i-1]
    }
    return resultArr
};


solution 2:

const runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++){
        nums[i] += nums[i-1]
    }
    return nums
};

time: O(n) //go over every element in our input
space: O(1) // doesn not create a DS same size as input