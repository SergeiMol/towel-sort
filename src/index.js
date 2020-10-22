
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];

  if (!matrix) {
    return [];
  }

  if (matrix.length === 0) {
    return [];
  }

  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 0) {
      arr.push(matrix[i]);
    }
    else {
      arr.push(matrix[i].reverse());
    }
  }
  return arr.flat(Infinity);
}
