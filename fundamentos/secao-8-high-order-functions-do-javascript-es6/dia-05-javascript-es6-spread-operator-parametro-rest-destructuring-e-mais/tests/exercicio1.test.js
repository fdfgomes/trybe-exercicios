const calculateAreas = require('../exercicio1');

describe('Testar função desenvolvida para resolver o primeiro exercício', () => {
  it('Verificar se calculateAreas é uma função', () => {
    expect(typeof calculateAreas).toBe('function');
  });
  it('Verificar se calculateAreas retorna um array', () => {
    const rectangle1 = [1, 2];
    const rectangle2 = [3, 5];
    const rectangle3 = [6, 9];
    const rectangles = [rectangle1, rectangle2, rectangle3];
    expect(Array.isArray(calculateAreas(rectangles))).toEqual(true);
  });
  it('Verificar se calculateAreas retorna o valor esperado: área dos retângulos informados', () => {
    const rectangle1 = [1, 2];
    const rectangle2 = [3, 5];
    const rectangle3 = [6, 9];
    const rectangles = [rectangle1, rectangle2, rectangle3];
    const expectedResult = [1 * 2, 3 * 5, 6 * 9];
    expect(calculateAreas(rectangles)).toEqual(expectedResult);
  });
});
