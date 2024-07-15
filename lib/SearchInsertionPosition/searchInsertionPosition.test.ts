import { searchInsertionPosition } from './searchInsertionPosition';

describe('Search Insertion Position', () => {
  test('Should find index of target present in nums', () => {
    const testInput = {nums: [1, 3, 5, 6], target: 5};
    const expectedOutput = 2;

    const testOutput = searchInsertionPosition(testInput.nums, testInput.target);
    expect(testOutput).toEqual(expectedOutput);
  });

  test('Should return an index position for non existant lower values', () => {
    const testInput = { nums: [1, 3, 5, 6], target: 2 };
    const expectedOutput = 1;

    const testOutput = searchInsertionPosition(testInput.nums, testInput.target);
    expect(testOutput).toEqual(expectedOutput);
  });

  test('Should return an index position for non existant higher values', () => {
    const testInput = { nums: [1, 3, 5, 6], target: 7 };
    const expectedOutput = 4;

    const testOutput = searchInsertionPosition(testInput.nums, testInput.target);
    expect(testOutput).toEqual(expectedOutput);
  });
});