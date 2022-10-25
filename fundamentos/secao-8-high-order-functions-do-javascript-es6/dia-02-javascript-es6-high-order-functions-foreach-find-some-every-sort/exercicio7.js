const authorUnique = (booksArray) => {
  let response = true;
  booksArray.forEach((currentBook, index, array) => {
    // ano de nascimento do autor do livro atual
    const currentAuthorBirthYear = currentBook.author.birthYear;
    // verificar se o ano de nascimento do autor do livro atual aparece mais de uma vez dentro da array
    const checkBirthYearOccurances = array.filter(
      (item) => item.author.birthYear === currentAuthorBirthYear
    );
    // caso apareça, retornar false (significa que existe mais de uma pessoa autora que nasceu no mesmo ano)
    if (checkBirthYearOccurances.length > 1) response = false;
  });
  return response;
};

module.exports = authorUnique;
