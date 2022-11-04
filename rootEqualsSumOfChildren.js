You are given the root of a binary tree that consists of exactly 
3 nodes: the root, its left child, and its right child.

Return true 
if the value of the root is equal to the sum of the values of its two children, 
or false otherwise.


Example 1
Input: root = [10,4,6]
Output: true
Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
10 is equal to 4 + 6, so we return true.

// ********************************

solution 1

const checkTree = function(root) {
    if (root == null) return true;
    return root.val == root.left.val + root.right.val
}

solution 2


const checkTree = function(root) {
    return root.val === root.left.val + root.right.val
};


time: O(1)
space: O(1)