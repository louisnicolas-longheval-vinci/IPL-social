const { isValidPassword } = require('../src/passwordChecker');

describe('Password Validation', () => {
  describe('Length validation', () => {
    it('should reject passwords shorter than 8 characters', () => {
      expect(isValidPassword('Abc1!@')).toBe(false);
      expect(isValidPassword('A1!@567')).toBe(false);
    });

    it('should accept passwords of exactly 8 characters with all requirements', () => {
      expect(isValidPassword('Abcd1!@#')).toBe(true);
    });
  });

  describe('Special character validation', () => {
    it('should reject passwords without special characters', () => {
      expect(isValidPassword('Abcd1234')).toBe(false);
    });

    it('should accept passwords with any valid special character', () => {
      const validSpecialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '.', '?', '"', ':', '{', '}', '|', '<', '>'];
      validSpecialChars.forEach(char => {
        expect(isValidPassword(`Abcd123${char}`)).toBe(true);
      });
    });
  });

  describe('Number validation', () => {
    it('should reject passwords without numbers', () => {
      expect(isValidPassword('Abcd!@#$')).toBe(false);
    });

    it('should accept passwords with any digit', () => {
      for (let i = 0; i <= 9; i++) {
        expect(isValidPassword(`Abcd!@#${i}`)).toBe(true);
      }
    });
  });

  describe('IPL string validation', () => {
    it('should reject passwords containing "IPL" in any case', () => {
      expect(isValidPassword('IPL123!@#')).toBe(false);
      expect(isValidPassword('TestiPl123!')).toBe(false);
      expect(isValidPassword('MyipL123!@')).toBe(false);
      expect(isValidPassword('prefix-IPL-123!')).toBe(false);
      expect(isValidPassword('123!@#IPL')).toBe(false);
    });
  });

  describe('Valid passwords', () => {
    it('should accept valid passwords', () => {
      expect(isValidPassword('MyPass123!')).toBe(true);
      expect(isValidPassword('C0mpl3x!@#')).toBe(true);
      expect(isValidPassword('Str0ng#Pass')).toBe(true);
      expect(isValidPassword('V3ryS3cur3!')).toBe(true);
    });
  });

  describe('Edge cases and invalid inputs', () => {
    it('should handle empty string', () => {
      expect(isValidPassword('')).toBe(false);
    });

    it('should handle null input', () => {
      expect(isValidPassword(null)).toBe(false);
    });

    it('should handle undefined input', () => {
      expect(isValidPassword(undefined)).toBe(false);
    });

    it('should handle non-string input', () => {
      expect(isValidPassword(123)).toBe(false);
      expect(isValidPassword({})).toBe(false);
      expect(isValidPassword([])).toBe(false);
    });

    it('should handle whitespace-only input', () => {
      expect(isValidPassword('        ')).toBe(false);
    });

    it('should handle string with spaces', () => {
      expect(isValidPassword('Pass 123 !')).toBe(false);
    });
  });
}); 