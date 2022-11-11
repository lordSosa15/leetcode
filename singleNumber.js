// Given a non-empty array of integers nums, 
// every element appears twice except for one. 
// Find that single one.

// You must implement a solution with 
// a linear runtime complexity and use only constant extra space

function singleNumber(nums) {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  return Array.from(set)[0];
}
