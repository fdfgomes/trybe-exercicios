const swap = require('../exercicio5');

describe('Testar função desenvolvida para resolver o quinto exercício', () => {
  it('Verificar se swap é uma função', () => {
    expect(typeof swap).toBe('function');
  });
  it('Verificar se swap retorna o valor esperado', () => {
    const myList = [5, 2, 3];
    const expectedResult = [3, 2, 5];
    expect(swap(myList)).toEqual(expectedResult);
  });
});
