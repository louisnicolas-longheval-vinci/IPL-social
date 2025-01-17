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
  // Check minimum length
  if (password.length < 8) {
    return false;
  }

  // Check for at least one special character
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (!specialCharRegex.test(password)) {
    return false;
  }

  return true;
}

module.exports = {
  isValidPassword
}; 