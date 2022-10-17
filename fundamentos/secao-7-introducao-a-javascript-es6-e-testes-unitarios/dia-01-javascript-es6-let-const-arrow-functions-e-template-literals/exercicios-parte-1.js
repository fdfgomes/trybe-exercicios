// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = "Não devo ser utilizada fora do meu escopo (if)";
//     ifScope = ifScope + " ótimo, fui utilizada no escopo !";
//     console.log(ifScope);
//   } else {
//     var elseScope = "Não devo ser utilizada fora do meu escopo (else)";
//     console.log(elseScope);
//   }
//   console.log(ifScope + " o que estou fazendo aqui ? :O"); // Se necessário esta linha pode ser removida.
// }

const testingScope = escopo =>
  escopo
    ? `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !`
    : `Não devo ser utilizada fora do meu escopo (else) o que estou fazendo aqui ? :O`;

console.log(testingScope(true));
