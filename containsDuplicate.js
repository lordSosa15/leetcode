// Given an integer array nums,
//  return true if any value appears at least twice in the array,
//   and return false if every element is distinct.


// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

function containsDuplicate(nums) {
  const map = {};
  for (const num of nums) {
    // if we have seen this num before return true
    if (map[num]) return true;
    map[num] = true;
  }
  return false;
}

Time: O(n);
Space: O(n);

function containsDuplicate(nums) {
  let numbers = new Set();
  for (const num of nums) {
    if (!numbers.has(num)) {
      numbers.add(num);
    } else {
      return true;
    }
  }
  return false;
}
