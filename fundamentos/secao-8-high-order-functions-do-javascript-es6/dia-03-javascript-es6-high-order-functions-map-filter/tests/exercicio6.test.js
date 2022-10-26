const books = require('../books');
const oldBooks = require('../exercicio6');

describe('Testar função desenvolvida para resolver o sexto exercício', () => {
  it('Verificar se oldBooks é uma função', () => {
    expect(typeof oldBooks).toBe('function');
  });
  it('Verificar se oldBooks retorna o valor esperado: array com os nomes dos livros com mais de 60 anos de publicação', () => {
    const expectedResult = [
      'O Senhor dos Anéis',
      'Fundação',
      'O Chamado de Cthulhu',
    ];
    expect(oldBooks(books)).toEqual(expectedResult);
  });
});
