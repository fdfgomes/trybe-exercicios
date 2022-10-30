const greet = require('../exercicio8');

describe('Testar função desenvolvida para resolver o oitavo exercício', () => {
  it('Verificar se greet é uma função', () => {
    expect(typeof greet).toBe('function');
  });
  it('Verificar se greet retorna o valor esperado', () => {
    expect(greet('John')).toBe('Hi John');
    expect(greet('John', 'Good morning')).toBe('Good morning John');
    expect(greet('Isabela', 'Oi')).toBe('Oi Isabela');
  });
});
