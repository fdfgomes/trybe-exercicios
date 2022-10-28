const averageAge = (booksArray) =>
  booksArray.reduce(
    (acc, currValue) =>
      acc + (currValue.releaseYear - currValue.author.birthYear),
    0
  ) / booksArray.length;

module.exports = averageAge;
