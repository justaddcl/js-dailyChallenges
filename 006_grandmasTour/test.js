const tour = require('./tour');

const tests = [
  [
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    [
      ['A1', 'X1'],
      ['A2', 'X2'],
      ['A3', 'X3'],
      ['A4', 'X4'],
    ],
    ['X1', 100.0, 'X2', 200.0, 'X3', 250.0, 'X4', 300.0],
  ],
];

tests.forEach(test => console.log(tour(...test)));
