import calculateRows from './';

describe('Pascals Triangle, calculate rows', () => {
  test('Should be able to calculate rows for small number', () => {
    let input = 1;
    let expected = [[1]];

    let output = calculateRows(input);
    expect(output).toEqual(expected);
  });
  test('Should be able to calculate rows for a larger number', () => {
    let input = 5;
    let expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

    let output = calculateRows(input);
    expect(output).toEqual(expected);
  });
});