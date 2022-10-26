const fantasyOrScienceFiction = (booksArray) =>
  booksArray.filter(
    (book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
  );

module.exports = fantasyOrScienceFiction;
