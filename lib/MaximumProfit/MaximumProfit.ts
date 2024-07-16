export type Job = [number, number, number];

export const MaximumProfit = function(startTime:  number[], endTime: number[], profit: number[]): number {
  const n = startTime.length;

  const getChildren = (job: Job): Array<Job> => {
    const children = [];
    for (let i = 0; i < n; i++) {
      if (job[1] <= startTime[i]) {
        children.push([startTime[i], endTime[i], profit[i]] as Job);
      }
    }
    return children;
  }

  const traverseProfit = (job: Job, sum: number): number => {
    let currentSum = sum + job[2];
    let max = currentSum; // copy of current value for comparison

    const children = getChildren(job);
    children.forEach(child => {
      const childSum = traverseProfit(child, currentSum);
      if (childSum > max) {
        max = childSum;
      }
    });

    return max;
  }

  let maxProfit = 0;
  for (let i = 0; i < n; i++) {
    let job = [startTime[i], endTime[i], profit[i]];
    let jobMax = traverseProfit(job as Job, 0)
    if (jobMax > maxProfit) {
      maxProfit = jobMax;
    }
  }
  return maxProfit;
};
