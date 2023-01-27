// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along 
// the longest path from the root node down to the farthest leaf node.


const maxDepth = function(root) {
    let stack = [];
    stack.push({node: root, depth: 1});
    let res = 0;

    while (stack.length > 0) {
        let pair = stack.pop();
        let node = pair.node;
        let depth = pair.depth;

        if (node != null) {
            res = Math.max(res, depth);
            stack.push({node: node.left, depth: depth + 1});
            stack.push({node: node.right, depth: depth + 1});
        }
    }
    return res;
}
