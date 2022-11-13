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

var inorderTraversal = function (root) {
  const result = [];
  if (root === null) return result;

  const stack = [];

  const pushStack = (node) => {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }
  };

  pushStack(root);

  while (stack.length > 0) {
    const top = stack.pop();
    result.push(top.val);
    if (top.right) {
      pushStack(top.right);
    }
  }

  return result;
};

// most optimal
// morris algorithm

// 1: initialize tourist as root
// 2: while the tourist is not on lost (null)
//      set a guide to look at the tourist left subtree
//          the guide will walk to the right most point

//          guide will create a bridge to the tourist
//          tourist walks to the left
//           if there is a bridge, destroy it. Note it, go right
//                      if the guide is lost
// tourist will note this is the end
// tourist will walk to the right

function inorderTraversal(root) {
  let tourist = root;
  let solution = [];

  while (tourist !== null) {
    //while tourist in in a space that exists
    // create guide thats looking at tourist left subtree
    let guide = tourist.left;

    // walk until there's no place to walk anymore
    if (tourist.left !== null) {
      // look at the right most point of my left tree
      while (guide.right !== null && guide.right !== tourist) {
        guide = guide.right;
      }
      if (guide.right === null) {
        // create bridge
        guide.right = tourist;
        tourist = tourist.left;
      } else {
        // or destroy bridge
        guide.right = null;
        solution.push(tourist.val);
        tourist = tourist.right;
      }
    } else {
      solution.push(tourist.val);
      tourist = tourist.right;
    }
  }
  return solution;
}
