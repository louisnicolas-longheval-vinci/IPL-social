const { isValidPassword } = require('../src/passwordChecker');

describe('Password Validation', () => {
  it('should reject passwords shorter than 8 characters', () => {
    expect(isValidPassword('Abc1!@')).toBe(false);
  });
}); 