/**
 *
 *
 * @param {string} str String to revese
 * @returns {string} In reversed order
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

module.exports = reverseString;
