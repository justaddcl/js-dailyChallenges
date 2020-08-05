// ternary base
const BASE = 3;

// calculates the highest power of BASE that the given number can be divided by
const highestPower = num => {
  let power = 0;
  while (num - BASE ** (power + 1) >= 0) {
    power += 1;
  }
  return power;
};

// converts the given number to a ternary array
const toTernary = num => {
  let remainder = num;
  let power = highestPower(num);
  const results = Array(power + 1).fill(0);
  while (remainder > 0) {
    if (remainder - BASE ** power >= 0) {
      results[power] += 1;
      remainder -= BASE ** power;
    } else {
      power -= 1;
    }
  }
  return results;
};

// converts the ternary array to a decimal number
const toDecimal = ternary =>
  ternary.reduce((total, current, i) => total + current * BASE ** i, 0);

// fills in the shorter array with '0's so both arrays have a matching length
const equalizeArrays = (a, c) => {
  if (c.length === a.length) return [a, c];

  const diff = c.length - a.length;
  return diff > 0
    ? [a.concat(Array(diff).fill(0)), c]
    : [a, c.concat(Array(Math.abs(diff)).fill(0))];
};

// calculates difference between two ternary arrays
const difference = (a, c) => {
  const [one, two] = equalizeArrays(a, c);

  return two.map((value, i) => {
    const valueDiff = value - one[i];
    return valueDiff >= 0 ? valueDiff : 3 + valueDiff;
  });
};

// returns a single integer B, such that A tor B = C
const ternary = ([a, c]) => toDecimal(difference(toTernary(a), toTernary(c)));

module.exports = ternary;
