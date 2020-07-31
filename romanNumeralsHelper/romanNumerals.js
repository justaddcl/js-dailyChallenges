const RomanNumerals = {
  values: {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  },
  toRoman: number => {
    let remainder = number;
    let result = '';

    Object.keys(RomanNumerals.values).forEach(numeral => {
      while (remainder >= RomanNumerals.values[numeral]) {
        result += numeral;
        remainder -= RomanNumerals.values[numeral];
      }
    });
    return result;
  },
  fromRoman: numerals => {
    const characters = numerals;

    return characters
      .match(/CM|CD|XC|XL|IX|IV|\w/g)
      .reduce((total, character) => total + RomanNumerals.values[character], 0);
  },
};

module.exports = RomanNumerals;
