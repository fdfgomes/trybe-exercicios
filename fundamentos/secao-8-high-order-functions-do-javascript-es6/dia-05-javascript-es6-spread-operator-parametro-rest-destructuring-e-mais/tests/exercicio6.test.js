const toObject = require('../exercicio6');

describe('Testar função desenvolvida para realizar o sexto exercício', () => {
  it('Verificar se toObject é uma função', () => {
    expect(typeof toObject).toBe('function');
  });
  it('Verificar se toObject retorna o valor esperado', () => {
    const palio = ['Palio', 'Fiat', 2019];
    const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
    const chiron = ['Chiron', 'Bugatti', 2016];

    expect(toObject(palio)).toEqual({
      model: 'Palio',
      brand: 'Fiat',
      year: 2019,
    });
    expect(toObject(shelbyCobra)).toEqual({
      model: 'Shelby Cobra',
      brand: 'Ford',
      year: 1963,
    });
    expect(toObject(chiron)).toEqual({
      model: 'Chiron',
      brand: 'Bugatti',
      year: 2016,
    });
  });
});
