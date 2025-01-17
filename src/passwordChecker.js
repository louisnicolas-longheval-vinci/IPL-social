/**
 * Validates if a password meets the following criteria:
 * - At least 8 characters long
 * - Contains at least one special character
 * - Contains at least one number
 * - Does not contain "IPL" in any case
 * @param {string} password - The password to validate
 * @returns {boolean} - True if password is valid, false otherwise
 */
function isValidPassword(password) {
  // For now, only implementing the first rule (minimum length)
  // Other rules will be added incrementally following TDD
  return password.length >= 8;
}

module.exports = {
  isValidPassword
}; 