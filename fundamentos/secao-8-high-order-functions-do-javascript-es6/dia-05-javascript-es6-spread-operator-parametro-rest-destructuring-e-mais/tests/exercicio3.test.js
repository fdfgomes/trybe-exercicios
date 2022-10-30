const personLikes = require('../exercicio3');

describe('Testar função desenvolvida para realizar o terceiro exercício', () => {
  it('Verificar se personLikes é uma função', () => {
    expect(typeof personLikes).toBe('function');
  });
  it('Verificar se personLikes retorna a string esperada', () => {
    const alex = {
      name: 'Alex',
      age: 26,
      likes: ['fly fishing'],
      nationality: 'Australian',
    };
    const gunnar = {
      name: 'Gunnar',
      age: 30,
      likes: ['hiking', 'scuba diving', 'taking pictures'],
      nationality: 'Icelandic',
    };
    expect(personLikes(alex)).toBe(
      'Alex is 26 years old and likes fly fishing.'
    );
    expect(personLikes(gunnar)).toBe(
      'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
    );
  });
});
