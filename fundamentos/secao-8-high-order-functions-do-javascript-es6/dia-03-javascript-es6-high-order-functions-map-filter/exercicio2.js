const nameAndAge = (booksArray) =>
  booksArray
    .map((book) => {
      return {
        age: book.releaseYear - book.author.birthYear,
        author: book.author.name,
      };
    })
    .sort((a, b) => a.age - b.age);

module.exports = nameAndAge;
