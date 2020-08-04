const compare = require('../lib/compare');
const getOrder = require('./getOrder');

const tests = [
  'milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza',
  'pizzachickenfriesburgercokemilkshakefriessandwich',
];

const expected = [
  'Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke',
  'Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke',
];

compare(getOrder, tests, expected);
