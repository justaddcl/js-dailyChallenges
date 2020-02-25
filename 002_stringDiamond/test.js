const diamond = require('./diamond');

const tests = [1, 3, 5, 7, 213, 0, -1, -2];

tests.forEach(test => {
  console.log(diamond(test));
});
