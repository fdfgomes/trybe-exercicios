const books = require('../books');
const formatedBookNames = require('../exercicio1');

describe('Testar função desenvolvida para resolver o primeiro exercício', () => {
  it('Veriricar se formatedBookNames é uma função', () => {
    expect(typeof formatedBookNames).toBe('function');
  });
  it('Verificar se formatedBookNames retorna o valor esperado: array contendo o nome de todos os livros', () => {
    const expectedResult = [
      'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
      'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
      'Fundação - Ficção Científica - Isaac Asimov',
      'Duna - Ficção Científica - Frank Herbert',
      'A Coisa - Terror - Stephen King',
      'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
    ];
    expect(formatedBookNames(books)).toEqual(expectedResult);
  });
});
