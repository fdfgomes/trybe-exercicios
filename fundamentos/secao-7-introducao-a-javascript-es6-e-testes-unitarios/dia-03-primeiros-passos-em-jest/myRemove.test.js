const { myRemove } = require("./myRemove");

describe("Testing myRemove", () => {
  it("myRemove([1, 2, 3, 4], 3) returns [1, 2, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it("myRemove([1, 2, 3, 4], 3) does not return [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("myRemove([1, 2, 3, 4], 5) returns [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});
