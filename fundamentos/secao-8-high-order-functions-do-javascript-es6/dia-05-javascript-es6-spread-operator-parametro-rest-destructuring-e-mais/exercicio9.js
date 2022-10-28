const generateYearSeasonsArr = ({ spring, summer, autumn, winter }) => [
  ...spring,
  ...summer,
  ...autumn,
  ...winter,
];

module.exports = generateYearSeasonsArr;
