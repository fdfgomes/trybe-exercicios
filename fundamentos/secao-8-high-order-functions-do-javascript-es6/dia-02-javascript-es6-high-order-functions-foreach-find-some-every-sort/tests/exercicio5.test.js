const books = require('../books');
const everyoneWasBornOnSecXX = require('../exercicio5');

describe('Testar a função desenvolvida para resolver o quinto exercício', () => {
  it('Testar se everyoneWasBornOnSecXX é uma função', () => {
    expect(typeof everyoneWasBornOnSecXX).toBe('function');
  });
  it('Testar se everyoneWasBornOnSecXX retorna o valor esperado: se todas as pessoas autoras nasceram no século XX', () => {
    const expectedResult = false;
    expect(everyoneWasBornOnSecXX(books)).toBe(expectedResult);
  });
});
