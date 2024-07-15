export const MaximumProfit = function(startTime:  number[], endTime: number[], profit: number[]): number {
  let n = startTime.length;
  let noOverlaps = []; // array of indices with no overlaps

  // calculate overlapping times
  let i = 0;
  while (i < n) {
    let start = startTime[i];
    let end = endTime[i];

    let j = 0;
    let doesNotOverlap: Array<number> = [];
    while (j < n) {
      let compareStart = startTime[j];
      let compareEnd = endTime[j];
      if (
        j != i
        && (compareStart >= end || compareEnd <= start)
      ) {
        doesNotOverlap.push(j);
      }
      j++;
    }
    noOverlaps.push(doesNotOverlap);
    i++;
  }
  console.log('indices with no overlaps', noOverlaps);

  let largestProfit = 0;
  const traverse = (node, parentIdx: number) => {
    if (Array.isArray(node)) {
      node.forEach((child, childIdx) => {
        if (parentIdx !== childIdx) {
          largestProfit += profit[child]
          traverse(child, childIdx);
        }
      })
    }
  }
  traverse(noOverlaps, 0);
  return largestProfit;
};
