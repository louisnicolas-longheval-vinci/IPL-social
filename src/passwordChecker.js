/**
 * Validates if a password meets the following criteria:
 * - At least 8 characters long
 * - Contains at least one special character
 * - Contains at least one number
 * - Does not contain "IPL" in any case
 * - No spaces allowed
 * @param {string} password - The password to validate
 * @returns {boolean} - True if password is valid, false otherwise
 */
function isValidPassword(password) {
  // Handle invalid inputs
  if (!password || typeof password !== 'string') {
    return false;
  }

  // Trim and check for spaces
  if (password.trim() !== password) {
    return false;
  }

  // Check minimum length
  if (password.length < 8) {
    return false;
  }

  // Check for at least one special character
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (!specialCharRegex.test(password)) {
    return false;
  }

  // Check for at least one number
  const numberRegex = /\d/;
  if (!numberRegex.test(password)) {
    return false;
  }

  // Check for "IPL" in any case
  if (password.toLowerCase().includes('ipl')) {
    return false;
  }

  return true;
}

module.exports = {
  isValidPassword
}; 