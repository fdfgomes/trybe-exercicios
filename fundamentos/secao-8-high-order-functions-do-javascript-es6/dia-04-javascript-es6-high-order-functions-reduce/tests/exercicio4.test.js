const books = require('../books');
const longestNamedBook = require('../exercicio4');

describe('Testar função desenvolvida para resolver o quarto exercício', () => {
  it('Verificar se longestNamedBook é uma função', () => {
    expect(typeof longestNamedBook).toBe('function');
  });
  it('Verificar se longestNamedBook retorna o valor esperado: objeto com o livre de maior nome', () => {
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
    expect(longestNamedBook(books)).toEqual(expectedResult);
  });
});
