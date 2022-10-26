const books = require('../books');
const oldBooksOrdered = require('../exercicio4');

describe('Testar função desenvolvida para resolver o quarto exercício', () => {
  it('Verificar se oldBooksOrdered é uma função', () => {
    expect(typeof oldBooksOrdered).toBe('function');
  });
  it('Verificar se oldBooksOrdered retorna o valor esperado: array com livros que possuem mais de 60 anos desde sua publição, ordenados do mais velho até o mais novo', () => {
    const expectedResult = [
      {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
      },
    ];
    expect(oldBooksOrdered(books)).toEqual(expectedResult);
  });
});
