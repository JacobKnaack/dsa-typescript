function letterCombinations(digits: string): string[] {
  const results = [];
  const numbers: { [key: number]: string[] } = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  let iterations = 1;
  let stringLengths: number[] = [];
  let compareLengths = [];
  const handleCompareValues = (compareValues: number[]) => {
    // Start from the rightmost element of the integer array
    for (let i = compareValues.length - 1; i >= 0; i--) {
      if (compareValues[i] < stringLengths[i] - 1) {
        compareValues[i] += 1;
        return compareValues;
      } else {
        compareValues[i] = 0; // Reset the current value and move left
      }
    }
    return compareValues;
  }

  for (let num of digits) {
    let lettersLength= numbers[Number(num)].length;
    iterations *= lettersLength;
    stringLengths.push(lettersLength);
    compareLengths.push(0);
  }

  while (iterations > 0) {
    let letterString = '';
    compareLengths.forEach((compare, idx) => {
      let digit = digits[idx];
      let letters = numbers[Number(digit)];
      let currentLetter = letters[compare];
      letterString += currentLetter;
    });
    compareLengths = handleCompareValues(compareLengths);
    if (letterString) {
      results.push(letterString);
    }
    iterations--;
  }


  return results;
};

export default letterCombinations;
