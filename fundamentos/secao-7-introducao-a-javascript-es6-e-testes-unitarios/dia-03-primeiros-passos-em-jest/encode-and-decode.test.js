const { encode, decode } = require("./encode-and-decode");

describe(`Testing encode()`, () => {
  it(`Check if encode() is declared and if it's type is function`, () => {
    expect(typeof encode).toEqual("function");
  });
  it(`Testing if vogals are encoded when encode() is called`, () => {
    const inputString = `aeiou`;
    const expectedString = `12345`;
    expect(encode(inputString)).toEqual(expectedString);
  });
  it(`Testing if only vogals are encoded when encode() is called`, () => {
    const inputString = `Felipe`;
    const expectedString = `F2l3p2`;
    expect(encode(inputString)).toEqual(expectedString);
  });
  it(`Testing if the encode()'s return string has the input string's length`, () => {
    const inputString = `Felipe`;
    expect(inputString.length).toEqual(encode(inputString).length);
  });
});

describe(`Testing decode()`, () => {
  it(`Check if decode() is declared and if it's type is function`, () => {
    expect(typeof decode).toEqual("function");
  });
  it(`Testing if numbers are decoded when decode() is called`, () => {
    const inputString = `12345`;
    const expectedString = `aeiou`;
    expect(decode(inputString)).toEqual(expectedString);
  });
  it(`Testing if numbers out of range 1-5 are not converted when decode() is called`, () => {
    const inputString = `123456789`;
    const expectedString = `aeiou6789`;
    expect(decode(inputString)).toEqual(expectedString);
  });
  it(`Testing if decode()'s return lenght is equal to inputed string's length`, () => {
    const inputString = `Felipe`;
    expect(decode(inputString).length).toEqual(inputString.length);
  });
});
