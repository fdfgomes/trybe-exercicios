const authorBornIn1947 = (booksArray) =>
  booksArray.find((book) => book.author.birthYear === 1947).author.name;

module.exports = authorBornIn1947;
