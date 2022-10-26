const books = require('../books');
const getNamedBook = require('../exercicio3');

describe('Testar função desenvolvida para resolver o terceiro exercício', () => {
  it('Testar se getNamedBook é uma função', () => {
    expect(typeof getNamedBook).toBe('function');
  });
  it('Testar se getNamedBook retona o valor esperado: primeiro livro cujo nome possui 26 caracteres', () => {
    const expectedResult = {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    };
    expect(getNamedBook(books)).toEqual(expectedResult);
  });
});
