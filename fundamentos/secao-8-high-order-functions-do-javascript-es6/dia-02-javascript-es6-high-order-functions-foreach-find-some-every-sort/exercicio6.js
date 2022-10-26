// década de 80: 1980 -> 1989
const someBookWasReleaseOnThe80s = (booksArray) =>
  booksArray.some(
    (book) => book.releaseYear >= 1980 && book.releaseYear <= 1989
  );

module.exports = someBookWasReleaseOnThe80s;
