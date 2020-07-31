const compare = require('../lib/compare');
const validate = require('./validate');

const tests = [
  'djI38D55',
  'a2.d412',
  'JHD5FJ53',
  '!fdjn345',
  'jfkdfj3j',
  '123',
  'abc',
  'Password123',
];

const expected = [true, false, false, false, false, false, false, true];

compare(validate, tests, expected);
