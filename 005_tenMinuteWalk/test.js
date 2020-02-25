const isWalkValid = require('./isWalkValid');

const tests = [
  ['w'],
  ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
  ['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'],
  ['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'],
];

tests.forEach(test => console.log(isWalkValid(test)));
