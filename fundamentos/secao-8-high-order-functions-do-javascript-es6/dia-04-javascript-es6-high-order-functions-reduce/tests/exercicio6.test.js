const studentAverage = require('../exercicio6');

describe('Testar função desenvolvida para resolver o quarto exercício', () => {
  it('Verificar se studentAverage é uma função', () => {
    expect(typeof studentAverage).toBe('function');
  });
  it('Verificar se studentAverage retorna o valor esperado: array com objetos contendo nome de cada estudante, e a média de suas notas', () => {
    const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
    const grades = [
      [9, 8, 10, 7, 5],
      [10, 9, 9, 10, 8],
      [10, 7, 10, 8, 9],
    ];
    const expectedResult = [
      { name: 'Pedro Henrique', average: 7.8 },
      { name: 'Miguel', average: 9.2 },
      { name: 'Maria Clara', average: 8.8 },
    ];
    expect(studentAverage(students, grades)).toEqual(expectedResult);
  });
});
