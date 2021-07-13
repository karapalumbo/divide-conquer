function countZeroes(arr) {
  let count = 0;
  for (let num of arr) {
    if (num === 0) {
      count++;
    }
  }
  return count;
}

countZeroes([1, 1, 0, 0, 0]);

module.exports = countZeroes;
