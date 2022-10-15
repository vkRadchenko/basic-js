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
  if (matrix === 0 || !Array.isArray(matrix)) return 0

  let number = 0

  let arrFlat = matrix.reduce((acc, arr) => [...acc, ...arr])

  for (let i of arrFlat) {
    if (i === '^^') number++
    else number
  }

  return number
}

module.exports = {
  countCats,
}
