// Given the root of a binary tree, 
// return the inorder traversal of its nodes' values.

// Follow up: Recursive solution is trivial, could you do it iteratively?




// function inorderTraversal(root) {
//     const result = []
//     const walk = (noe) => {
//         if (node.left) walk(node.left) 
//         result.push(node.val)   
//         if (node.right)walk(node.right)
//     }
//     walk(root)
// }