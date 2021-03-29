const reversedString = require('./reverse_value');

it('should return the string in reversed order', () => {
    expect(reversedString('jest')).toBe('tsej');
});
