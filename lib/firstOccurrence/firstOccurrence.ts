/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

export function firstOccurrence(haystack: string, needle: string): number {
  for (let i =0; i < haystack.length; i++) {
    let substring: string = '';
    if (needle[0] === haystack[i]) {
      let k:number = i;
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] === haystack[k]) {
          substring += needle[j];
          k++;
        } else {
          break;
        }
      }
      if (substring === needle) {
        return i;
      }
    }
  }

  return -1;
}
