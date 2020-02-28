const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const factorialize = num => {
  if (num === 1) {
    return num;
  }
  return num * factorialize(num - 1);
};

const decomp = num => {
  const result = [];
  for (let n = 2; n <= num; n++) {
    if (isPrime(n)) {
      let e = 0;
      while (factorialize(num) % n ** (e + 1) === 0) {
        e += 1;
      }
      result.push(e > 1 ? `${n}^${e}` : n);
    }
  }
  return result.join(' * ');
};

module.exports = decomp;
