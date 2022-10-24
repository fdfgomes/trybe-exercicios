const generateEmailFromFullName = (fullName) =>
  `${fullName.toLowerCase().replace(/ /, "_")}@trybe.com`;

const employeeData = (fullName, email) => {
  return { nomeCompleto: fullName, email: email(fullName) };
};

const newEmployees = () => {
  const employees = {
    id1: employeeData("Pedro Guerra", generateEmailFromFullName), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employeeData("Luiza Drumond", generateEmailFromFullName), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employeeData("Carla Paiva", generateEmailFromFullName), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees());
