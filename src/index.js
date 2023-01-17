
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if (matrix.length === 0) {
    return [];
  }
  const result = [];
  matrix.forEach((arr, index) => {
    console.log(arr);
    result[index] = index % 2 ? arr.sort((a, b) => b - a) : arr.sort((a, b) => a - b);
  });


  return result.flat();
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const result = [];




console.log(matrix.forEach((arr, index) => result[index] = index % 2 ? arr.sort((a, b) => b - a) : arr.sort((a, b) => a - b)));