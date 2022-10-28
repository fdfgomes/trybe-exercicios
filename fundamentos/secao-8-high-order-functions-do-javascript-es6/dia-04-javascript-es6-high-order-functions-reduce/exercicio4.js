// const books = require('./books');

const longestNamedBook = (booksArray) =>
  booksArray.reduce(
    (acc, currValue) =>
      currValue.name.length > acc.name.length ? currValue : acc,
    booksArray[0]
  );

// console.log(longestNamedBook(books));

module.exports = longestNamedBook;
