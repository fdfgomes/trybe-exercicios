const oldBooks = (booksArray) =>
  booksArray
    .filter((book) => 2022 - book.releaseYear > 60)
    .map((book) => book.name);

module.exports = oldBooks;
