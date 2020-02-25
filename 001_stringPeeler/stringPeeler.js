const stringPeeler = str => (str.length <= 2 ? null : str.slice(1, -1));

module.exports = stringPeeler;
