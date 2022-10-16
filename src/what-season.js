const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!'
  if (
    !Date.parse(date) ||
    toString.call(date) !== '[object Date]' ||
    date.hasOwnProperty('toString')
  ) {
    throw new Error('Invalid date!')
  }
  const month = date.toLocaleString('en-GB', { month: 'long' })

  if (month === 'December' || month === 'January' || month === 'February')
    return 'winter'
  if (month === 'March' || month === 'April' || month === 'May') return 'spring'
  if (month === 'June' || month === 'July' || month === 'August')
    return 'summer'

  if (month === 'September' || month === 'October' || month === 'November')
    return 'fall'

  return month
}
module.exports = {
  getSeason,
}
