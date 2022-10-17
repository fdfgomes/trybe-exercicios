// exercício 1: criar uma função que recebe um número e retorna seu fatorial
const factorial = (number) => {
  let result = 1;
  let factorialString = "";
  for (let x = number; x >= 1; x -= 1) {
    factorialString += `${x}${x > 1 ? " * " : ""}`;
    result = result * x;
  }
  return `${number}! = ${factorialString} = ${result}`;
};

console.log(`Esse é o fatorial ${factorial(4)}`);

// exercício 2: criar uma função que recebe um frase como parâmetro, e retorna a maior palavra contida nela
const longestWord = (string) => {
  const splittedString = string.split(" ");
  let longestWordIndex = 0;
  for (let x = 0; x < splittedString.length; x += 1) {
    if (splittedString[x].length > splittedString[longestWordIndex].length) {
      longestWordIndex = x;
    }
  }
  return splittedString[longestWordIndex];
};

console.log(
  longestWord("Antônio foi ao banheiro e não sabemos o que aconteceu")
); // retorna 'aconteceu'
