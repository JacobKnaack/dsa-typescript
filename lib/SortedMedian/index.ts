export function findSortedMedianArrays(nums1: number[], nums2: number[]): number {

  const mergeArrays = (arr1: number[], arr2: number[], result: number[]) => {
    let i = 0;
    let j = 0;
    let k = 0;

    while(i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result[k] = arr1[i];
        i++;
        k++;
      } else {
        result[k] = arr2[j];
        j++;
        k++;
      }
    }

    while(i< arr1.length) {
      result[k] = arr1[i];
      i++;
      k++;
    }
    while(j < arr2.length) {
      result[k] = arr2[j];
      j++;
      k++;
    }
  }

  let mergedArrays: number[] = [];
  mergeArrays(nums1, nums2, mergedArrays);

  let midpoint = mergedArrays.length / 2;
  let median = [];
  if (mergedArrays.length % 2 === 0) {
    median[0] = mergedArrays[midpoint - 1];
    median[1] = mergedArrays[midpoint];
  } else {
    median[0] = mergedArrays[Math.floor(midpoint)];
  }
  let sum = median.reduce((acc, num) => acc + num, 0);
  if (median.length > 1) {
    return sum / median.length
  }
  return sum;
}