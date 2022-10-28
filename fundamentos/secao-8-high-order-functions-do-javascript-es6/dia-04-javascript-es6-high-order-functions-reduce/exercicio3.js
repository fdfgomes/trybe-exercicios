const averageAge = (booksArray) =>
  booksArray.reduce((acc, currValue, currIndex, array) => {
    const authorAge = currValue.releaseYear - currValue.author.birthYear;
    if (currIndex === array.length - 1) {
      return (acc + authorAge) / array.length;
    }
    return acc + authorAge;
  }, 0);

module.exports = averageAge;
