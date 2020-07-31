const split = str => {
  if (str === '') return ['', 0];
  return [str.match(/[a-zA-Z]+/g), str.match(/[\d]+/g)];
};

const incrementString = str => {
  const [alphas, numbersStr] = split(str);

  const number = numbersStr ? parseInt(numbersStr, 10) + 1 : '';

  const zeros =
    numbersStr &&
    numbersStr[0] &&
    numbersStr[0].length - number.toString().length >= 1
      ? '0'.repeat(numbersStr[0].length - number.toString().length)
      : '';
  return (alphas || '') + (numbersStr ? zeros + number : '1');
};

module.exports = incrementString;
