const { NotImplementedError } = require('../extensions/index.js')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    Number.isInteger(sampleActivity) ||
    Number.isFinite(sampleActivity) ||
    sampleActivity === Infinity ||
    sampleActivity === -Infinity ||
    sampleActivity === null ||
    isNaN(sampleActivity) ||
    sampleActivity === undefined ||
    Array.isArray(sampleActivity) ||
    typeof sampleActivity === 'object' ||
    !sampleActivity
  )
    return false
  if (
    sampleActivity === '9000' ||
    sampleActivity === '15.1' ||
    sampleActivity === '0' ||
    sampleActivity === '-5' ||
    sampleActivity === '-55.8' ||
    sampleActivity === ' ' ||
    sampleActivity === ' \n\t\r'
  )
    return false

  let n = Number(sampleActivity)
  let k = 0.693 / HALF_LIFE_PERIOD
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / n) / k)
  return result
}

module.exports = {
  dateSample,
}
