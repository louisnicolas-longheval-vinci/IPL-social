const { isValidPassword } = require('../src/passwordChecker');

describe('Password Validation', () => {
  it('should reject passwords shorter than 8 characters', () => {
    expect(isValidPassword('Abc1!@')).toBe(false);
  });

  it('should reject passwords without special characters', () => {
    expect(isValidPassword('Abcd1234')).toBe(false);
  });
}); 