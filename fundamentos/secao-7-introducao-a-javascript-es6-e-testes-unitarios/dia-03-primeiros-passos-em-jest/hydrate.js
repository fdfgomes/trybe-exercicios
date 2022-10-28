const hydrate = (string) => {
  const splittedString = string.split(" ");
  let waterCount = 0;
  for (const piece of splittedString) {
    if (!isNaN(parseInt(piece))) {
      waterCount += parseInt(piece);
    }
  }
  return `${waterCount} copo${waterCount > 1 ? `s` : ``} de água`;
};

module.exports = hydrate;
