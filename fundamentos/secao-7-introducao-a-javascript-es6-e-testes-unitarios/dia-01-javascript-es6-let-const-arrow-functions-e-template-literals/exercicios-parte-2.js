// exercício 1: criar uma função que recebe um número e retorna seu fatorial
const factorial = number => {
  let result = 1;
  let factorialString = ''
  for(let x = number; x >= 1; x -= 1) {
    factorialString += `${x}${x > 1 ? ' * ' : ''}`;
    result = result * x;
  }
  return `${number}! = ${factorialString} = ${result}`;
}

console.log(`Esse é o fatorial ${factorial(4)}`);