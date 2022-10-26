const books = require('../books');
const authorUnique = require('../exercicio7');

describe('Testar função desenvolvida para realizar o sétimo exercício', () => {
  it('Testar se authorUnique é uma função', () => {
    expect(typeof authorUnique).toBe('function');
  });
  it('Testar se authorUnique retorna o valor esperado: true caso nenhum autor tenha nascido no mesmo ano, ou false, caso contrário', () => {
    const expectedResult = false;
    expect(authorUnique(books)).toBe(expectedResult);
  });
});
