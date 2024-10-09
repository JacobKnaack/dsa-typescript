import letterCombinations from ".";

describe('Phone number letter combinations', () => {
  test('Should work for a small number', () => {
    let input = '23';
    let expected: string[] = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];

    let output = letterCombinations(input);
    expect(output).toEqual(expected);
  });
  test('Should work for an empty string', () => {
    let input = '';
    let expected: string[] = [];

    let output = letterCombinations(input);
    expect(output).toEqual(expected);
  });
  test('Should work for a small number', () => {
    let input = '2';
    let expected: string[] = ["a", "b", "c"];

    let output = letterCombinations(input);
    expect(output).toEqual(expected);
  });
});