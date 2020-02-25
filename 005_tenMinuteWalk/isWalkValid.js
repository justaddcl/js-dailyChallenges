const isValidWalk = walk => {
  if (walk.length !== 10) {
    return false;
  }

  const count = {
    n: 0,
    e: 0,
    s: 0,
    w: 0,
  };

  walk.forEach(direction => {
    count[direction] += 1;
  });

  return walk.length === 10 && count.n === count.s && count.e === count.w;
};

module.exports = isValidWalk;
