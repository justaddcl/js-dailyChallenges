const incrementString = str => {
  if (isNaN(str[str.length - 1])) return `${str}1`;
  return str.replace(/(0*)([0-9]+$)/g, (match, zero, number) => {
    const incrementedNumber = parseInt(number, 10) + 1;
    return (
      zero.slice(incrementedNumber.toString().length - number.length) +
      incrementedNumber
    );
  });
};

module.exports = incrementString;
