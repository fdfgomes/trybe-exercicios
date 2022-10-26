const books = require('../books');
const authorWith3DotsOnName = require('../exercicio7');

describe('Testar função desenvolvida para realizar o sétimo exercício', () => {
  it('Verificar se authorWith3DotsOnName é uma função', () => {
    expect(typeof authorWith3DotsOnName).toBe('function');
  });
  it('Verificar se authorWith3DotsOnName retorna o valor esperado: nome do livro escrito pela pessoa cujo nome começa com três iniciais', () => {
    const expectedResult = 'O Senhor dos Anéis';
    expect(authorWith3DotsOnName(books)).toBe(expectedResult);
  });
});
