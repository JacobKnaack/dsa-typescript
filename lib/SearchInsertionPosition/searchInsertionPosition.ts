/**
 * Given a sorted array of distinct integers and a target value,
return the index if the target is found.
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 * @param {number[]} nums 
 * @param {number} target
 * @returns 
 */

export function searchInsertionPosition(nums: number[], target: number) {
  const search = (left: number, right: number): number => {
    let midIndex = Math.floor((left + right) / 2);
    let midValue = nums[midIndex];
    if (midValue === target) {
      return midIndex;
    }

    if (target > midValue) {
      if (left >= right) {
        return midIndex + 1;
      }
      return search(midIndex + 1, right);
    } else {
      if (left >= right) {
        if (midIndex < 0) {
          return 0;
        } else {
          return midIndex;
        }
      }
      return search(left, midIndex - 1);
    }
  }
  return search(0, nums.length -1);
}
