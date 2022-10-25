const books = require('../books');
const authorBornIn1947 = require('../exercicio1');

describe('Testar as funções desenvolvidas ao resolver os exercícios propostos no dia', () => {
  it('Testar se authorBornIn1947 é uma função', () => {
    expect(typeof authorBornIn1947).toBe('function');
  });
  it('Testar se authorBornIn1947 retorna o valor esperado: primeira pessoa autora de um livro nascida no ano 1947 (Stephen King, no caso) dentro da array informada', () => {
    expect(authorBornIn1947(books)).toBe('Stephen King');
  });
});
