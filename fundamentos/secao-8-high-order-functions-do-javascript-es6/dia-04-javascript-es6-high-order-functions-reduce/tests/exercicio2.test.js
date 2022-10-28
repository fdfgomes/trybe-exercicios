const books = require('../books');
const reduceNames = require('../exercicio2');

describe('Testar função desenvolvida para resolver o segundo exercício', () => {
  it('Verificar se reduceNames é uma função', () => {
    expect(typeof reduceNames).toBe('function');
  });
  it('Veriricar se reduceNames retorna o valor esperado', () => {
    const expectedResult =
      'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';
    expect(reduceNames(books)).toBe(expectedResult);
  });
});
