const generateLine = (count, number) => {
  return `${' '.repeat((number - count) / 2) +
    '*'.repeat(count) +
    ' '.repeat((number - count) / 2)}\n`;
};

const topLayer = number => {
  let results = '';

  for (let i = 1; i < number; i += 2) {
    results += generateLine(i, number);
  }

  return results;
};

const bottomLayer = number => {
  let results = '';

  for (let i = number; i >= 1; i -= 2) {
    results += generateLine(i, number);
  }

  return results;
};

const diamond = number => {
  if (number < 0 || number % 2 === 0) return null;
  return topLayer(number) + bottomLayer(number);
};

module.exports = diamond;
