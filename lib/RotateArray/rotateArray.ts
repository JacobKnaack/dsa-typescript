/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 */

export function rotateArray(nums: number[], k: number): void {

  for (let i = 0; i < k; i++) {
    const rotation: number | undefined = nums.pop();
    if (rotation) {
      nums.unshift(rotation);
    }
  }
}