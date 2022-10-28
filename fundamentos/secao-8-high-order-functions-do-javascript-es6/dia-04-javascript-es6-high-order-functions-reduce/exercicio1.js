const flatten = (matrix) =>
  // método concat para concatenar duas ou mais arrays
  // https://www.w3schools.com/jsref/jsref_concat_array.asp
  matrix.reduce((acc, currValue) => acc.concat(currValue));

module.exports = flatten;
