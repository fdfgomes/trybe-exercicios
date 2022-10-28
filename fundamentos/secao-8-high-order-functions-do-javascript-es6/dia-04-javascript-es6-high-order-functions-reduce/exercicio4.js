const books = require('./books');

const longestNamedBook = (booksArray) =>
  booksArray.reduce((acc, currValue) => {
    console.log(acc, currValue);
    if (currValue.name.length > acc.name.length) acc = currValue;
    // currIndex === 0
    //   ? (acc = currValue)
    //   : currValue.name.length > acc.name.length && (acc = currValue),
  }, booksArray[0]);

console.log(longestNamedBook(books));

module.exports = longestNamedBook;
