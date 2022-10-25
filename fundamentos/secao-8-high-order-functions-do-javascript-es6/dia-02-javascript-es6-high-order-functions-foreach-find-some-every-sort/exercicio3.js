const getNamedBook = (booksArray) =>
  booksArray.find((book) => book.name.length === 26);

module.exports = getNamedBook;
