const compare = require('../lib/compare');
const hashtagGenerator = require('./generateHashtag');

const tests = [
  ' Hello there thanks for trying my Kata',
  '    Hello     World   ',
  '',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate.',
  ' '.repeat(200),
  'Do We have A Hashtag',
  'Codewars',
  'Codewars Is Nice',
  'Codewars is nice',
  `code${' '.repeat(140)}wars`,
  'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat',
  'a'.repeat(139),
  'a'.repeat(140),
];

const expected = [
  '#HelloThereThanksForTryingMyKata',
  '#HelloWorld',
  false,
  false,
  false,
  '#DoWeHaveAHashtag',
  '#Codewars',
  '#CodewarsIsNice',
  '#CodewarsIsNice',
  '#CodeWars',
  false,
  `#A${'a'.repeat(138)}`,
  false,
];

compare(hashtagGenerator, tests, expected);
