const stringPeeler = require('./stringPeeler');

const tests = [
  '',
  'a',
  'ab',
  'abc',
  'bugger',
  'test test'
];

tests.forEach(test => {
  console.log(stringPeeler(test));
});
