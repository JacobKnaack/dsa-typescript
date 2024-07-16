import { MaximumProfit } from './MaximumProfit';

describe('Maximum Profit', () => {
  test('Small overlap', () => {
    let startTime = [1, 2, 3, 3];
    let endTime = [3, 4, 5, 6];
    let profit = [50, 10, 40, 70];
    let result = MaximumProfit(startTime, endTime, profit);
    expect(result).toEqual(120);
  });
  test('Large Overlap', () => {
    let startTime = [1, 2, 3, 4, 6];
    let endTime = [3, 5, 10, 6, 9];
    let profit = [20, 20, 100, 70, 60];
    let result = MaximumProfit(startTime, endTime, profit);
    expect(result).toEqual(150);
  });
  test('All Overlaps', () => {
    let startTime = [1, 1, 1];
    let endTime = [2, 3, 4];
    let profit = [5, 6, 4];
    let result = MaximumProfit(startTime, endTime, profit);
    expect(result).toEqual(6);
  });
})