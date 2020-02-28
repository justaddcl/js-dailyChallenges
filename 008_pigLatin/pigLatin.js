const pigIt = str =>
  str.replace(/[a-z]+/gi, word => `${word.slice(1) + word.slice(0, 1)}ay`);

module.exports = pigIt;
