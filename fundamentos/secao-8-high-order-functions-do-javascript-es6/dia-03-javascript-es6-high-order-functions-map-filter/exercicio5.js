const fantasyOrScienceFictionAuthors = (booksArray) =>
  booksArray
    .filter(
      (book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
    )
    .map((book) => book.author.name)
    .sort();

module.exports = fantasyOrScienceFictionAuthors;
