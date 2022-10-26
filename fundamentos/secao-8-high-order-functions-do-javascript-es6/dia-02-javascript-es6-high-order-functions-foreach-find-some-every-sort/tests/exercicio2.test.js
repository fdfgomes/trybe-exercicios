const books = require('../books');
const smallerName = require('../exercicio2');

describe('Testar função desenvolvida para resolver o segundo exercício', () => {
  it('Testar se smallerName é uma função', () => {
    expect(typeof smallerName).toBe('function');
  });
  it('Testar se smallerName retorna o valor esperado: o nome do livro de menor nome (menor quantidade de caracteres)', () => {
    expect(smallerName(books)).toBe('Duna');
  });
});
