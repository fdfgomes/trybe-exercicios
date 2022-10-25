const smallerName = (booksArray) => {
  // inicializar variável com o primeiro valor da array recebida
  let nameBook = booksArray[0].name;
  // fazer loop na array de recebida, e verificar o número de caracteres no nome da cada livro,
  // caso o número de caracteres do nome do livro atual na interação seja menor que o nome armazenado na variável nameBook
  // trocar o valor de nameBook para o nome do livro atual na iteração
  booksArray.forEach(
    (book) => book.name.length < nameBook.length && (nameBook = book.name)
  );
  // retornar o livro de menor nome (número de caracteres)
  return nameBook;
};

module.exports = smallerName;
