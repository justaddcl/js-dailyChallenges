const distanceBetween = (a, c) => Math.sqrt(c ** 2 - a ** 2);

const tour = (friends, fTowns, distTable) => {
  const circuit = [];
  friends.map(friend => {
    fTowns.forEach(town => {
      if (town[0] === friend) {
        circuit.push(distTable[distTable.indexOf(town[1]) + 1]);
      }
    });
  });

  const distance = circuit
    .map((destination, index, arr) => {
      return index < arr.length - 1
        ? distanceBetween(destination, circuit[index + 1])
        : 0;
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  return Math.floor(distance + circuit[0] + circuit[circuit.length - 1]);
};

module.exports = tour;
