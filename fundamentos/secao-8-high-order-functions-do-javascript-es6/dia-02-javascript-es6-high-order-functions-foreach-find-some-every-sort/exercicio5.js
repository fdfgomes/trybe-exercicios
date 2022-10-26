const everyoneWasBornOnSecXX = (booksArray) =>
  booksArray.every(
    (book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000
  );

module.exports = everyoneWasBornOnSecXX;
