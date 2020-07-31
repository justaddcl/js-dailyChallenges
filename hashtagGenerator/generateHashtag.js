const capitalize = str => {
  const words = str.split(' ');
  return words
    .map(word => (word === '' ? '' : word[0].toUpperCase() + word.slice(1)))
    .join('');
};

const removeSpaces = str => str.trim().replace(/\s/g, '');

const isValidTag = tag =>
  removeSpaces(tag).length > 0 && removeSpaces(tag).length < 140;

const generateHashtag = tag =>
  isValidTag(tag) ? `#${capitalize(tag)}` : false;

module.exports = generateHashtag;
