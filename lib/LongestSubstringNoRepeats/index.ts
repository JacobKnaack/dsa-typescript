export function lengthOfLongestSubstring(s: string): number {
  let uniqueStrings = new Map<number | null, Set<string>>(); // Map containing  array index values as a key, and a set of unique substrings.
  let currentSubstring = new Set<string>(); // A set of unique characters representing substring of s.

  // find all unique character substrings.
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      let char: string = s[j];
      if (currentSubstring.has(char)) {
        uniqueStrings.set(i, currentSubstring);
        currentSubstring = new Set();
        break;
      } else {
        currentSubstring.add(char);
      }
    }
  }
  uniqueStrings.set(null, currentSubstring);
  
  // find the longest length substring stored in uniqueString.
  let longestLength = 0
  for (let set of uniqueStrings.values()) {
    let length = set.size;
    if (length > longestLength) {
      longestLength = length;
    }
  }
  return longestLength
};
