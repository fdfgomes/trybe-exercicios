const sum = require('../exercicio2');

describe('Testar função desenvolvida para resolver o segundo exercício', () => {
  it('Verificar se sum é uma função', () => {
    expect(typeof sum).toBe('function');
  });
  it('Verificar se sum retorna o valor esperado: soma de todos os valores da array informada', () => {
    const numbersToSum = [4, 5, 6];
    expect(sum(...numbersToSum)).toBe(4 + 5 + 6);
  });
});
