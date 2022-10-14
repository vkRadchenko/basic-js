const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (matrix === 0 || !Array.isArray()) return 0
  let number = 0
  for (let i of matrix) {
    if (i.includes('^^')) number++
    else number
  }
  return number
}

module.exports = {
  countCats,
}
