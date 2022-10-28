const books = require('../books');
const averageAge = require('../exercicio3');

describe('Testar função desenvolvida para resolver o terceiro exercício', () => {
  it('Verificar se averageAge é uma função', () => {
    expect(typeof averageAge).toBe('function');
  });
  it('Verificar se averageAge retorna o valor esperado: média de idade que as pessoas autoras tinham quando lançaram seus livros', () => {
    const expectedResult = 43;
    expect(averageAge(books)).toBe(expectedResult);
  });
});
