const isASCII = str => /^[\x00-\x7F]*$/.test(str);

const transformWord = word => {
  let newWord = word.charAt(0).toUpperCase() + word.slice(1, -1).toLowerCase();
  if (word.length > 1) {
    newWord += word.charAt(word.length - 1).toUpperCase();
  }
  return newWord;
};

const capitalizeFirstLast = str => {
  // return if invalid input
  if (!isASCII(str)) {
    return;
  }

  // break up string into words
  const words = str.split(' ');

  // transform each word
  let result = '';
  words.forEach((word, index) => {
    result += transformWord(word);
    if (index !== words.length - 1) {
      result += ' ';
    }
  });

  // return transformed string
  return result;
};

module.exports = capitalizeFirstLast;
