export function minimumBribes(q: number[]): number {

  let numberOfBribes: number = 0;

  for (let i = 0; i < q.length; i++) {
    let order: number = i + 1;
    if (q[i] !== order && (q[i] > order || q[i] > q[i + 1])) {
      let difference = Math.abs(q[i] - order);
      if (difference >= 3) {
        throw new Error('Too chaotic');
      }
      numberOfBribes += difference;
    }
  }

  return numberOfBribes;
}