type Matrix = string[];

export function graphMatrixGroups(matrix: Matrix): number {
  // create an adjacency list
  const adjacencies = new Map();
  const visited = new Set();

  const dfs = (node: number) => {
    // add node searched to visited
    visited.add(node);
    for (let neighbor of adjacencies.get(node)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    adjacencies.set(i, new Set());

    for (let j = 0; j< matrix[i].length; j++) {
      let isConnected = parseInt(matrix[i][j]);
      if (isConnected > 0 && i !== j) {
        adjacencies.get(i).add(j);
      }
    }
  }

  let groups = 0;
  // go through all adjacencies and count unique paths.
  for (let node of adjacencies.keys()) {
    if (!visited.has(node)) {
      groups++;
      dfs(node);
    }
  }

  return groups;
}