const { isValidPassword } = require('../src/passwordChecker');

describe('Password Validation', () => {
  it('should reject passwords shorter than 8 characters', () => {
    expect(isValidPassword('Abc1!@')).toBe(false);
  });

  it('should reject passwords without special characters', () => {
    expect(isValidPassword('Abcd1234')).toBe(false);
  });

  it('should reject passwords without numbers', () => {
    expect(isValidPassword('Abcd!@#$')).toBe(false);
  });

  it('should reject passwords containing "IPL" in any case', () => {
    expect(isValidPassword('IPL123!@#')).toBe(false);
    expect(isValidPassword('TestiPl123!')).toBe(false);
    expect(isValidPassword('MyipL123!@')).toBe(false);
  });

  it('should accept valid passwords', () => {
    expect(isValidPassword('MyPass123!')).toBe(true);
    expect(isValidPassword('C0mpl3x!@#')).toBe(true);
  });
}); 