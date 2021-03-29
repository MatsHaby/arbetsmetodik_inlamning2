/**
 *
 *
 * @param {sintr} str Test if string is a palindrom
 * @returns {boolean} returns true if it's a palindrom, else false
 */
function checkPalindrom(str) {
    const reverseString = str.split('').reverse().join('');
    return str === reverseString ? true : false;
}

module.exports = checkPalindrom;
