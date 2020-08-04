const menu = [
  'Burger',
  'Fries',
  'Chicken',
  'Pizza',
  'Sandwich',
  'Onionrings',
  'Milkshake',
  'Coke',
];

const capitalize = str => str[0].toUpperCase() + str.slice(1);

const sortByMenu = (a, b) => menu.indexOf(a) - menu.indexOf(b);

const getOrder = order =>
  order
    .match(new RegExp(menu.join('|'), 'gi'))
    .map(capitalize)
    .sort(sortByMenu)
    .join(' ');

module.exports = getOrder;
