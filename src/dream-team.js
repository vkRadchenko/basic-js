const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

/* const members = [
  '   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',
] */

function createDreamTeam(members) {
  if (
    Number.isInteger(members) ||
    Number.isFinite(members) ||
    members === Infinity ||
    members === -Infinity ||
    members === null ||
    members === undefined ||
    !members
  )
    return false
  if (typeof members === 'object' && !Array.isArray(members)) {
    return false
  }

  let filterStr = members.map((el) =>
    el === null ||
    el === undefined ||
    typeof el === 'object' ||
    typeof el === 'number' ||
    typeof el === 'boolean'
      ? ''
      : el.toString().replace(/\s+/g, '')
  )
  let arr = []
  for (let i of filterStr) {
    if (
      typeof i === 'number' ||
      typeof i === 'boolean' ||
      typeof i === 'object' ||
      typeof i === 'null' ||
      typeof i === 'undefined'
    ) {
      return false
    } else {
      arr.push(i[0])
    }
  }
  return arr.sort().join('').toUpperCase()
}

module.exports = {
  createDreamTeam,
}
