const containsA = require('../exercicio5');

describe('Testar a função desenvolvida para resolver o quinto exercício', () => {
  it('Verificar se containsA é uma função', () => {
    expect(typeof containsA).toBe('function');
  });
  it('Verificar se containsA retorna o valor esperado: quantida de vezes que a letra A aparece nas strings da array', () => {
    const names = [
      'Aanemarie',
      'Adervandes',
      'Akifusa',
      'Abegildo',
      'Adicellia',
      'Aladonata',
      'Abeladerco',
      'Adieidy',
      'Alarucha',
    ];
    const expectedResult = 20;
    expect(containsA(names)).toBe(expectedResult);
  });
});
