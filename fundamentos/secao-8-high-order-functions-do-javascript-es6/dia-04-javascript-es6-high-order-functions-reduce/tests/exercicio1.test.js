const flatten = require('../exercicio1');

describe('Testar função desenvolvida para resolver o primeiro exercício', () => {
  it('Verificar se flatten é uma função', () => {
    expect(typeof flatten).toBe('function');
  });
  it('Verificar se flatten retorna um array', () => {
    const arrays = [['1', '2', '3'], [true], [4, 5, 6]];
    // Array.isArray verifica se o retorna é um array e retorna true caso seja, ou false caso não seja
    // https://github.com/marcosadrianoti/trybe-exercicios/pull/24/commits/768a2756962e5ca2f8ea81b4f3690147b6f6026f
    expect(Array.isArray(flatten(arrays))).toBe(true);
  });
  it('Verificar se flatten retorna o valor esperado', () => {
    const arrays = [['1', '2', '3'], [true], [4, 5, 6]];
    const expectedResult = ['1', '2', '3', true, 4, 5, 6];
    expect(flatten(arrays)).toEqual(expectedResult);
  });
});
