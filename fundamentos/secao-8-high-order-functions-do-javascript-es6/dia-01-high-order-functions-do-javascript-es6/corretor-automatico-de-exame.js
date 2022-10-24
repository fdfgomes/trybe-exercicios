const compareAnswers = (correctAnswer, studentAnswer) =>
  correctAnswer === studentAnswer ? 1 : -0.5;

const calculateResult = (correctAnswers, studentAnswers, compareAnswers) => {
  let result = 0;
  for (let x = 0; x < correctAnswers.length; x += 1) {
    result += compareAnswers(correctAnswers[x], studentAnswers[x]);
  }
  return result;
};

const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

console.log(calculateResult(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
