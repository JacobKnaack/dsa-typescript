import roadsAndLibraries from './';

describe('Roads and Libraries', () => {
  test('Should find lowest cost for small community', () => {
    const inputs = {
      n: 3,
      c_lib: 2,
      c_road: 1,
      cities: [
        [1, 2],
        [3, 1],
        [2, 3]]
    }
    const expected = 4

    const output = roadsAndLibraries(inputs.n, inputs.c_lib, inputs.c_road, inputs.cities);
    expect(output).toEqual(expected);
  });
  test('Should find lowest cost for small community', () => {
    const inputs = {
      n: 6,
      c_lib: 3,
      c_road: 2,
      cities: [
        [1, 7],
        [1, 3],
        [1, 2],
        [2, 3],
        [5, 6],
        [6, 8],
      ]
    };
    const expected = 16;

    const output = roadsAndLibraries(inputs.n, inputs.c_lib, inputs.c_road, inputs.cities);
    expect(output).toEqual(expected);
  });
});