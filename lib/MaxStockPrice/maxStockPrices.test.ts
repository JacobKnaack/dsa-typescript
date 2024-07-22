import { maxStockPrice } from "./maxStockPrice";

describe('Max Stock Price', () => {
  test('Should find max profit from small array', () => {
    const testInput = [7, 1, 5, 3, 6, 4];
    const expectedOutput = 5;
    const testResult = maxStockPrice(testInput);
    expect(testResult).toEqual(expectedOutput);
  });
});