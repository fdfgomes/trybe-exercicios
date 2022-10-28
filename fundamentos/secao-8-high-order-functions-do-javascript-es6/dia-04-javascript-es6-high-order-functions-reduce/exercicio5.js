const containsA = (array) =>
  array.reduce((acc, currValue) => {
    const countLetterA = currValue
      .split('')
      .filter((letter) => letter === 'a' || letter === 'A');
    return acc + countLetterA.length;
  }, 0);

module.exports = containsA;
