const filterPeople = (peopleArr) =>
  peopleArr.filter(
    (person) =>
      person.nationality === 'Australian' &&
      person.bornIn >= 1901 &&
      person.bornIn <= 2000
  );

module.exports = filterPeople;
