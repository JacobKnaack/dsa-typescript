import { findSortedMedianArrays } from ".";

describe('Sorted Median', () => {
  test('Should find median for small sorted arrays', () => {
    let array1 = [1,2];
    let array2 = [3,4];
    let expected = 2.5;
    let results = findSortedMedianArrays(array1, array2);
    expect(results).toEqual(expected);
  });

  test('Should find median for small lopsided arrays', () => {
    let array1 = [1, 3];
    let array2 = [2];
    let expected = 2;
    let results = findSortedMedianArrays(array1, array2);
    expect(results).toEqual(expected);
  });
});