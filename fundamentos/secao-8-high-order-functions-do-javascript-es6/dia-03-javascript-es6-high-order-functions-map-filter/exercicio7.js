const authorWith3DotsOnName = (booksArray) =>
  booksArray.find((book) => {
    const chunkedAuthorName = book.author.name.split(' ');
    let nameInitialsCount = 0;
    chunkedAuthorName.forEach(
      (chunk) => chunk.includes('.') && (nameInitialsCount += 1)
    );
    return nameInitialsCount === 3;
  }).name;

module.exports = authorWith3DotsOnName;
