// You are given an n x n 2D matrix representing an image,
// rotate the image by 90 degrees (clockwise).

// // You have to rotate the image in-place,
//  which means you have to modify the input 2D matrix directly.
//  DO NOT allocate another 2D matrix and do the rotation.

// example 1
Input: matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
Output: [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];

// tramposing is the strategy

function rotate(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  //   reverse elements and move inwards
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - 1 - j];
      matrix[i][matrix.length - 1 - j] = temp;
    }
  }
  return matrix;
}
