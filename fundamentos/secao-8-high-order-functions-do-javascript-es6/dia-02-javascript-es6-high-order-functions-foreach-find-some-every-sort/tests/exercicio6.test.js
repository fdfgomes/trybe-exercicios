const books = require('../books');
const someBookWasReleaseOnThe80s = require('../exercicio6');

describe('Testar função desenvolvida para resolver o sexto exercício', () => {
  it('Testar se someBookWasReleaseOnThe80s é uma função', () => {
    expect(typeof someBookWasReleaseOnThe80s).toBe('function');
  });
  it('Testar se someBookWasReleaseOnThe80s retorna o valor esperado: true se algum livro foi lançado na década de 80, false caso contrário', () => {
    const expectedResult = true;
    expect(someBookWasReleaseOnThe80s(books)).toBe(expectedResult);
  });
});
