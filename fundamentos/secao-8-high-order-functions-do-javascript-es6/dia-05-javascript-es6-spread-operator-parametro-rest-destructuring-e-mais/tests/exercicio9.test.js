const generateYearSeasonsArr = require('../exercicio9');

describe('Testar função desenvolvida para resolver o nono exercício', () => {
  it('Verificar se generateYearSeasonsArr é uma função', () => {
    expect(typeof generateYearSeasonsArr).toBe('function');
  });
  it('Verificar se yearSeasons retorna o valor esperado', () => {
    const yearSeasons = {
      spring: ['March', 'April', 'May'],
      summer: ['June', 'July', 'August'],
      autumn: ['September', 'October', 'November'],
      winter: ['December', 'January', 'February'],
    };
    const expectedResult = [
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
      'January',
      'February',
    ];
    expect(generateYearSeasonsArr(yearSeasons)).toEqual(expectedResult);
  });
});
