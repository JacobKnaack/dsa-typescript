function calculateRows(numRows: number): number[][] {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let currentRow = [];
    let rowAbove = result[i - 1];
    if (rowAbove) {
      currentRow.push(1);
      rowAbove.forEach((value, idx) => {
        let first = value;
        let second = rowAbove[idx + 1];
        if (second) {
          currentRow.push(first + second);
        } else {
          currentRow.push(first);
        }
      });

    } else {
      currentRow.push(1);
    }
    result.push(currentRow);
  }
  return result;
};

export default calculateRows;
