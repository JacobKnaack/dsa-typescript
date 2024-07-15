import { firstNonRepeatingChar } from "./FirstNonRepeating";

describe('Repeating Characters', () => {
  test('Should remove the first non repeating character in a stream', () => {
    let testStream = 'geeksforgeeksandgeeksquizfor';
    let result = firstNonRepeatingChar(testStream);

    expect(result).toEqual('a');
  });

  test('Should remove a first first non repeating char, using short test input', () => {
    let testStream = 'iamatest';
    let result = firstNonRepeatingChar(testStream);

    expect(result).toEqual('i');
  });
  test('Should return null for no non-repeats', () => {
    let testStream = 'aaaa';
    let result = firstNonRepeatingChar(testStream);

    expect(result).toEqual(null);
  });
});
