function roadsAndLibraries(n: number, c_lib: number, c_road:number, cities: number[][]): number {
  const costForMaxLibraries = n * c_lib;
  let numRoads = 0;
  let numLibraries = 0;

  const connections = [];
  // iterate through list of cities
  let connectedCities = new Set();
  for (let city of cities) {
    let [start, end] = city;
    if (!connectedCities.has(start) && !connectedCities.has(end)) {
      connectedCities = new Set();
      connectedCities.add(start);
      connectedCities.add(end);
      connections.push(connectedCities);
    }

    if (connectedCities.has(start)) {
      connectedCities.add(end)
    }
    if (connectedCities.has(end)) {
      connectedCities.add(start);
    }
  }
  
  numLibraries += connections.length;
  for (let set of connections) {
    numRoads += set.size - 1;
  }
  let cost = (numLibraries * c_lib) + (numRoads * c_road);

  return Math.min(costForMaxLibraries, cost);
}

export default roadsAndLibraries;
