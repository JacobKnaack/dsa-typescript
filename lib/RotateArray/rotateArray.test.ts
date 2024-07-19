import { rotateArray } from "./rotateArray";

describe('Rotate array', () => {
  test('Should rotate a small array using a small k value', () => {
    const testInput = { nums: [1, 2, 3, 4, 5, 6, 7], k: 3 };
    rotateArray(testInput.nums, testInput.k);
    const expectedOutput = [5, 6, 7, 1, 2, 3, 4];
    expect(testInput.nums).toEqual(expectedOutput);
  });

  test('Should rotate a small array containing negative values', () => {
    const testInput = { nums: [-1, -100, 3, 99], k: 2 };
    rotateArray(testInput.nums, testInput.k);
    const expectedOutput = [3, 99, -1, -100];
    expect(testInput.nums).toEqual(expectedOutput);
  });
});