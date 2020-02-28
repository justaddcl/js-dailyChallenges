const pigIt = require('./pigLatin');

const tests = [
  'Pig latin is cool',
  'This is my string',
  'Hello world !',
];

tests.forEach(test => console.log(pigIt(test)));
