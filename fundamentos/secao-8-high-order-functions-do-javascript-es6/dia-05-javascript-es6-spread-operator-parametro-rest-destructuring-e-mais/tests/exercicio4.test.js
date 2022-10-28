const filterPeople = require('../exercicio4');

describe('Testar função desenvolvida para realizar o quarto exercício', () => {
  it('Verificar se filterPeople é uma função', () => {
    expect(typeof filterPeople).toBe('function');
  });
  it('Verificar se filterPeople retorna o valor esperado: lista de pessoas australianas que nasceram no século 20', () => {
    const people = [
      {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
      },
      {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
      },
      {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
      },
      {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
      },
      {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
      },
    ];
    const expectedResult = [
      {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
      },
      {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
      },
    ];
    expect(filterPeople(people)).toEqual(expectedResult);
  });
});
