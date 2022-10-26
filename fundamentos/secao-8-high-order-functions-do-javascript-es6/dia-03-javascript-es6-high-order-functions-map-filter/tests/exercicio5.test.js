const books = require('../books');
const fantasyOrScienceFictionAuthors = require('../exercicio5');

describe('Testar função desenvolvida para realizar o quinto exercício', () => {
  it('Verificar se fantasyOrScienceFictionAuthors é uma função', () => {
    expect(typeof fantasyOrScienceFictionAuthors).toBe('function');
  });
  it('Verificar se fantasyOrScienceFictionAuthors retorna o valor esperado: array com os nomes de todas as pessoas autoras de ficção científica ou fanstasia organizados em ordem alfabética', () => {
    const expectedResult = [
      'Frank Herbert',
      'George R. R. Martin',
      'Isaac Asimov',
      'J. R. R. Tolkien',
    ];
    expect(fantasyOrScienceFictionAuthors(books)).toEqual(expectedResult);
  });
});
