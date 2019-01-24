import * as utils from "utils";

it("test logger HOF", () => {
  const func = (...args) => args;

  const spy = jest.spyOn(console, "log");
  let funcWithLog = utils.loggerHOF(func);
  funcWithLog("a", "b");
  expect(spy).toHaveBeenCalledTimes(2);

  const loggerMock = jest.fn(() => {});
  funcWithLog = utils.loggerHOF(func, loggerMock);
  funcWithLog("a", "b");
  expect(loggerMock).toHaveBeenCalledTimes(2);
});

it("test curry", () => {
  const sum = (a, b) => a + b;

  let sumCurried = utils.curry(sum);
  let step1 = sumCurried(5);
  expect(step1).toBeInstanceOf(Function);

  let result = step1(10);
  expect(result).toBe(15);
});

it("test pipe", () => {
  const sum = (a, b) => a + b;
  const multiply5 = a => a * 5;

  let sumAndMultiply = utils.pipe(
    sum,
    multiply5
  );
  expect(sumAndMultiply).toBeInstanceOf(Function);

  let result = sumAndMultiply(5, 5);
  expect(result).toBe(50);
});

it("test allTrue", () => {
  const mockTrue1 = jest.fn(() => true);
  const mockTrue2 = jest.fn(() => true);
  const mockFalse2 = jest.fn(() => false);

  let allTrue = utils.allTrue([mockTrue1, mockTrue2]);
  expect(allTrue).toBeInstanceOf(Function);
  expect(mockTrue1).toHaveBeenCalledTimes(0);
  expect(mockTrue2).toHaveBeenCalledTimes(0);

  let result = allTrue("some args");
  expect(result).toBe(true);
  expect(mockTrue1).toHaveBeenCalledTimes(1);
  expect(mockTrue2).toHaveBeenCalledTimes(1);

  let oneFalse = utils.allTrue([mockTrue1, mockTrue2, mockFalse2]);
  expect(oneFalse).toBeInstanceOf(Function);

  result = oneFalse("some args");
  expect(result).toBe(false);
  expect(mockTrue1).toHaveBeenCalledTimes(2);
  expect(mockTrue2).toHaveBeenCalledTimes(2);
  expect(mockFalse2).toHaveBeenCalledTimes(1);
});

it("test invert function", () => {
  const fn = () => true;

  const invertedMock = utils.invert(fn);
  expect(invertedMock).toBeInstanceOf(Function);

  let result = invertedMock();

  expect(result).toBe(false);
});

it("test flipping binary function", () => {
  const devide = (a, b) => a / b;
  const flippedDevide = utils.flipTwoArgs(devide);

  let result = flippedDevide(5, 10);
  expect(result).toBe(2);

  result = flippedDevide(0, 1);
  expect(result).toBe(Infinity);
});
