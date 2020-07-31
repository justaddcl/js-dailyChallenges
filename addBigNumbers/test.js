const compare = require('../lib/compare');
const add = require('./add');

const tests = [
  ['123', '321'],
  ['11', '99'],
  ['1', '1'],
  ['123', '456'],
  ['888', '222'],
  ['1372', '69'],
  ['12', '456'],
  ['101', '100'],
  ['63829983432984289347293874', '90938498237058927340892374089'],
];

const expected = [
  '444',
  '110',
  '2',
  '579',
  '1110',
  '1441',
  '468',
  '201',
  '91002328220491911630239667963',
];

compare(add, tests, expected);
