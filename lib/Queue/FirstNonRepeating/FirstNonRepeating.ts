/**
 * Given a stream of characters, find the first non-repeating character in O(1)
 */

function removeFromArray(arr: Array<string>, value: string): void {
  let indexToRemove: null | number = null;
  arr.forEach((char, idx) => {
    if (char === value) {
      indexToRemove = idx;
    }
  });
  if (indexToRemove !== null) {
    arr.splice(indexToRemove, 1);
  }
}

export function firstNonRepeatingChar(stream: string): string | null {
  // unique set of characters, found in the stream.
  let chars: Set<string> = new Set();
  // array to use as a queue in order to track when unique characters are found
  let repetitions: Array<string> = [];

  for (let i = 0; i < stream.length; i++) {
    let char = stream[i];
    if (chars.has(char)) {
      removeFromArray(repetitions, char);
    } else {
      chars.add(char);
      repetitions.unshift(char);
    }
  }
  if (repetitions.length) {
    return repetitions.pop()!;
  } else {
    return null;
  }
}