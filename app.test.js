const { stringLength, reverseString, Calculator, capitalize } = require('./modules/app.js');

test('The input text "Hi" should return 2', () => {
  expect(stringLength("Hi")).toBe(2);
});

test('The input should not be longer than 10 chars', () => {
  const result = stringLength("Hello Worm");
  expect(result).toBeLessThanOrEqual(10);
});

test('The input should be minimum 1 character', () => {
   const result = stringLength("a");
   expect(result).toBeGreaterThanOrEqual(1);
});

//REVERSE STRING TESTS

test('The string must be correctly reversed', () => {
  const result = reverseString('agustin');
  expect(result).toBe('nitsuga');
});

//CALCULATOR TESTS

describe('Calculator', () => {
  test('The operation "divide" should return 2', () => {
    const result = new Calculator(8, 2);
    expect(result.divide()).toBe(4);
  });

  test('The operation "add" should return 10', () => {
    const result = new Calculator(8, 2);
    expect(result.add()).toBe(10);
  });

  test('The operation "subtract" should return 7', () => {
    const result = new Calculator(8, 2);
    expect(result.subtract()).toBe(6);
  });

  test('The operation "multiply" should return 16', () => {
    const result = new Calculator(8, 2);
    expect(result.multiply()).toBe(16);
  });
});

//CAPITALIZES

describe('Capitalize', () => {
  test('the result should be Agustin', () => {
    const result = capitalize("agustin");
    expect(result).toBe("Agustin");
  });
});