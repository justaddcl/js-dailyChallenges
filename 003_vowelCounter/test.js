const vowelCounter = require('./vowelCounter');

const tests = ['a', 'aa', 'b', 'bugger', 'vowel counter', 'AB', '01'];

tests.forEach(test => {
  console.log(vowelCounter(test));
});
