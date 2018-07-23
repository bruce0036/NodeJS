const rotate = (matrix) => {
  // reverse the rows
  matrix.reverse();

  // swap the symmetric elements
  /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true } ] */
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      const temp = matrix[i][j];
      /* eslint no-param-reassign: ["error", { "props": false }] */
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotate(matrix);

console.log(matrix);
