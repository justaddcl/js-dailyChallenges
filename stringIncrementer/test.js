const compare = require('../lib/compare');
const incrementer = require('./incrementString');

const tests = [
  'foobar000',
  'foo',
  'foobar001',
  'foobar99',
  'foobar099',
  '',
  'foobar00999',
  '1',
  '009',
];

const expected = [
  'foobar001',
  'foo1',
  'foobar002',
  'foobar100',
  'foobar100',
  '1',
  'foobar01000',
  '2',
  '010',
];

compare(incrementer, tests, expected);
