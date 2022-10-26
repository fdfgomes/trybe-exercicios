const books = require('../books');
const nameAndAge = require('../exercicio2');

describe('Testar função desenvolvida para resolver o segundo exercício', () => {
  it('Verificar se nameAndAge é uma função', () => {
    expect(typeof nameAndAge).toBe('function');
  });
  it('Verificar se nameAndAge retorna o valor esperado: array com nome dos livros e idade de cada autor quando o livro foi publicado ordenado de forma crescente: do autor mais jovem a publicar um livro ao mais velho', () => {
    const expectedResult = [
      {
        age: 31,
        author: 'Isaac Asimov',
      },
      {
        age: 38,
        author: 'H. P. Lovecraft',
      },
      {
        age: 39,
        author: 'Stephen King',
      },
      {
        age: 43,
        author: 'George R. R. Martin',
      },
      {
        age: 45,
        author: 'Frank Herbert',
      },
      {
        age: 62,
        author: 'J. R. R. Tolkien',
      },
    ];
    expect(nameAndAge(books)).toEqual(expectedResult);
  });
});
