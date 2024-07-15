export function ThreeSum(nums: Array<number>): Array<Array<number>> {
  const triplets = [];

  nums.sort();

  const getTriplet = (i: number, j: number, k: number): Array<number> | null => {
    if (i === j || j === k || i === k) {
      return null;
    }

    if (nums[i] + nums[j] + nums[k] === 0) {
      return [nums[i], nums[j], nums[k]];
    }
    return null;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let triplet = getTriplet(i, left, right);

      if (triplet) {
        triplets.push((triplet));
        // Skip duplicate elements for the second and third elements of the triplet
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}
