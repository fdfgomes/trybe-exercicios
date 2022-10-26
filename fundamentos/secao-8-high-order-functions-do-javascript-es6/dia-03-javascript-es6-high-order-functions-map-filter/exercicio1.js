const formatedBookNames = (booksArray) =>
  booksArray.map(
    (book) => `${book.name} - ${book.genre} - ${book.author.name}`
  );

module.exports = formatedBookNames;
