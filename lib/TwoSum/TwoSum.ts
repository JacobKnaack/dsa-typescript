export function twoSum(nums: number[], target: number): number[] {
  let comparisons: Map<number, number> = new Map();
  for (let idx in nums) {
    let difference = target - nums[idx];
    if (comparisons.has(nums[idx])) {
      return [comparisons.get(nums[idx]), idx];
    } else {
      comparisons.set(difference, idx);
    }
  }
}