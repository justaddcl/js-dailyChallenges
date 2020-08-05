const ternary = require('./ternary');
const compare = require('../lib/compare');

const tests = [
  [14, 34],
  [50, 34],
  [387420489, 225159023],
  [5, 5],
];

const expected = [50, 14, 1000000001, 0];

compare(ternary, tests, expected);
