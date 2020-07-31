const isLongEnough = str => str.length >= 6;
const hasInvalidChars = str => /[^a-zA-Z\d]/.test(str);
const hasLowerCase = str => /[a-z]/.test(str);
const hasUpperCase = str => /[A-Z]/.test(str);
const hasNumber = str => /\d/.test(str);

const validate = password =>
  isLongEnough(password) &&
  !hasInvalidChars(password) &&
  hasLowerCase(password) &&
  hasUpperCase(password) &&
  hasNumber(password);

module.exports = validate;
