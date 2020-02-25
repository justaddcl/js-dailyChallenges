const vowels = /[aeiou]/gi;

const vowelCounter = input => (input.match(vowels) || '').length;

module.exports = vowelCounter;
