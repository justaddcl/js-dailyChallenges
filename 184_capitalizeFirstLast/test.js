const capitalizeFirstLast = require('./capitalizeFirstLast');

const tests = [
  'a',
  'bb',
  'a a',
  'ç',
  'and still i rise',
  'when words fail music speaks',
  'WHAT WE THINK WE BECOME',
  'dIe wITh mEMORIEs nOt dREAMs',
  'hello',
];

tests.forEach(test => console.log(capitalizeFirstLast(test)));
