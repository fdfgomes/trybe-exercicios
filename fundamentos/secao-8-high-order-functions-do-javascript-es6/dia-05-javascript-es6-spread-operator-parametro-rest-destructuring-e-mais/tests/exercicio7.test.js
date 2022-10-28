const shipLength = require('../exercicio7');

describe('Testar função desenvolvida para realizar o sétimo exercício', () => {
  it('Verificar se shipLength é uma função', () => {
    expect(typeof shipLength).toBe('function');
  });
  it('Verificar se shipLength retorna o valor esperado', () => {
    const ships = [
      {
        name: 'Titanic',
        length: 269.1,
        measurementUnit: 'meters',
      },
      {
        name: 'Queen Mary 2',
        length: 1132,
        measurementUnit: 'feet',
      },
      {
        name: 'Yamato',
        length: 256,
        measurementUnit: 'meters',
      },
    ];
    expect(shipLength(ships[0])).toEqual('Titanic is 269.1 meters long');
    expect(shipLength(ships[1])).toEqual('Queen Mary 2 is 1132 feet long');
    expect(shipLength(ships[2])).toEqual('Yamato is 256 meters long');
  });
});
