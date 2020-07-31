const compare = require('../lib/compare');
const RomanNumerals = require('./romanNumerals');

const toTests = ['1000', '999', '4', '1', '1991', '2006', '2020'];

const toExpected = ['M', 'CMXCIX', 'IV', 'I', 'MCMXCI', 'MMVI', 'MMXX'];

compare(RomanNumerals.toRoman, toTests, toExpected);

const fromTests = ['XXI', 'I', 'III', 'IV', 'MMVII', 'MDCLXIX'];

const fromExpected = [21, 1, 3, 4, 2007, 1669];

compare(RomanNumerals.fromRoman, fromTests, fromExpected);
