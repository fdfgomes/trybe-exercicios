// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const booksOrderedByReleaseYearDesc = (booksArray) =>
  booksArray.sort((a, b) => b.releaseYear - a.releaseYear);

module.exports = booksOrderedByReleaseYearDesc;
