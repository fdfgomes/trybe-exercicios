// https://www.w3schools.com/js/js_random.asp
const draw = () => Math.floor(Math.random() * 5) + 1;

const checkResult = (bet, callback) =>
  bet === callback() ? "Parabéns você ganhou" : "Tente novamente";

console.log(checkResult(5, draw));
