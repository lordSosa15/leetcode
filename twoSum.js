// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



let twoSum = function(nums, target) {
    let map = new Map()
   for(let i = 0; i < nums.length; i++){
       let num1 = nums[i]
       let num2 = target - num1;
       if(map.has(num2)){
           return [i, map.get(num2)]
       }
       map.set(num1, i)
   }
};

// O(n) : time complexity
// 0(n) : space complexity