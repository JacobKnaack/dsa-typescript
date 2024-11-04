import { minimumBribes } from ".";

describe('Mimimum Bribes', () => {
  test('Should handle a simple case', () => {
    const input = [1, 2, 3, 5, 4, 6, 7, 8];
    const expected = 1;
    const output = minimumBribes(input);
    expect(output).toEqual(expected);
  });
  test('Should handle multiple bribes', () => {
    const input = [1,2,3,5,4,7,6];
    const expected = 2;
    const output = minimumBribes(input);
    expect(output).toEqual(expected);
  });
  test('Should throw an error when too many bribes are present', () => {
    const input = [1,2,6,5,4,3];
    expect(() => minimumBribes(input)).toThrow('Too chaotic');
  });
});