const books = require('../books');
const booksOrderedByReleaseYearDesc = require('../exercicio4');

describe('Testar função desenvolvida para resolver o quarto exercício', () => {
  it('Testar se booksOrderedByReleaseYearDesc é uma função', () => {
    expect(typeof booksOrderedByReleaseYearDesc).toBe('function');
  });
  it('Testar se booksOrderedByReleaseYearDesc retorna o valor esperado: lista de livros ordenada por data de lançamento em ordem crescente', () => {
    const expectedResult = [
      {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: { name: 'George R. R. Martin', birthYear: 1948 },
        releaseYear: 1991,
      },
      {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: { name: 'Stephen King', birthYear: 1947 },
        releaseYear: 1986,
      },
      {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: { name: 'Frank Herbert', birthYear: 1920 },
        releaseYear: 1965,
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
      },
      {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
      },
    ];
    expect(booksOrderedByReleaseYearDesc(books)).toEqual(expectedResult);
  });
});
