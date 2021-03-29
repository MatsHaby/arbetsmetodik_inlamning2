const checkPalindroms = require('./palindrom');

it('should return the string in reversed order', () => {
    expect(checkPalindroms('kajak')).toBeTruthy();
});
