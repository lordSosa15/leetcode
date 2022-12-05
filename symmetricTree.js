// Given the root of a binary tree,
// check whether it is a mirror of itself
// (i.e., symmetric around its center).

function isSymmetric(root) {
  if (root === null) {
    return true;
  }
  return isMirror(root.left, root.right);
}

function isMirror(tree1, tree2) {
  if (tree1 === null || tree2 === null) {
    return tree1 === tree2;
  }
  if (tree1.val !== tree2.val) {
    return false;
  }
  return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
}
