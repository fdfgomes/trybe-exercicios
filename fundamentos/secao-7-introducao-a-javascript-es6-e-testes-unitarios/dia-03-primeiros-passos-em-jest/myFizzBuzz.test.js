const { myFizzBuzz } = require("./myFizzBuzz");

describe(`Testing myFizzBuzz()`, () => {
  it(`Check if 30 is divisible by 3 and 5`, () => {
    expect(myFizzBuzz(30)).toEqual(`fizzbuzz`);
  });
  it(`Check if 3 is divisible by 3 and not by 5`, () => {
    expect(myFizzBuzz(3)).toEqual(`fizz`);
  });
  it(`Check if 5 is divisible by 5 and not by 3`, () => {
    expect(myFizzBuzz(5)).toEqual(`buzz`);
  });
  it(`Check if 7 is neither divisble by 3 and by 5`, () => {
    expect(myFizzBuzz(7)).toEqual(7);
  });
  it(`Check if return is false when input value is not a number`, () => {
    expect(myFizzBuzz("30")).toEqual(false);
  });
});
