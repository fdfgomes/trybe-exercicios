const reduceNames = (booksArray) =>
  booksArray
    .reduce(
      (acc, currValue, currIndex, array) =>
        (acc += `${currValue.author.name}${
          currIndex === array.length - 1 ? '.' : ','
        } `),
      ''
    )
    .trim();

module.exports = reduceNames;
