// solution works for node v10..0+
// const add = ([a, b]) => (BigInt(a) + BigInt(b)).toString();

// compatability solution
const add = ([a, b]) => {
  const longerNumber = a.length >= b.length ? a : b;
  const shorterNumber = a.length < b.length ? a : b;

  const longerNumbers = longerNumber.split('').reverse();
  const shorterNumbers = shorterNumber.split('').reverse();

  let carryover = 0;

  const sum = longerNumbers.map((number, index) => {
    let sum;
    // can also use ~~number to convert string to int
    if (shorterNumbers[index]) {
      sum =
        parseInt(number, 10) + parseInt(shorterNumbers[index], 10) + carryover;
    } else {
      sum = parseInt(number, 10) + carryover;
    }

    if (sum < 10) {
      carryover = 0;
      return sum.toString();
    }
    carryover = 1;
    return (sum % 10).toString();
  });

  if (carryover === 1) {
    sum.push(carryover);
  }
  return sum.reverse().join('');
};

module.exports = add;
