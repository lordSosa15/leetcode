// Given a non-negative integer x,
// return the square root of x rounded down to the nearest integer.
// The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// solution 1
// ***********************************

const mySqrt = function (x) {
  if (x <= 1) {
    return x;
  }
  for (let i = 2; i <= x; i++) {
    if (i * i === x) {
      return i;
    }
    if (i * i > x) {
      return i - 1;
    }
  }
};

time: O(log(n));
space: 0(1);

// 1. if x is 0 or 1, return x.
// 2. loop through x (from 2 to x)
//      a. if i * i === x return x
//      b. if i * i > x return i - 1

// solution 2
// *****************************************************

// 0 1 2 ... x
// pick the number, that square root of it equal/smaller than x
// binary search

const mySqrt = function (x) {
  let left = 1;
  let right = x;

  if (x < 2) return x;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    }
  }
  return left - 1;
};

time: O(log(n));
space: 0(1);
