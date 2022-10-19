const sum = require("./sum");

describe("Testing sum", () => {
  it(`sum(4, 5) returns 9`, () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it(`sum(0, 0) returns 0`, () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it(`sum(4, '5') throws an error`, () => {
    expect(() => sum(4, "5")).toThrow(`parameters must be numbers`);
  });
});
