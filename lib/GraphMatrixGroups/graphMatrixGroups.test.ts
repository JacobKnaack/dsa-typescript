import { graphMatrixGroups } from ".";

describe('Graph Matrix Groups', () => {
  test('Should be able to count the groups in a matrix', () => {
    const matrix = ['1100','1110', '0110', '0001'];
    const result = graphMatrixGroups(matrix);
    const expected = 2;
    expect(result).toEqual(expected);
  });
  test('Should be able to count groups for all non-connected nodes', () => {
    const matrix = ['10000', '01000', '00100', '00010', '00001'];
    const result = graphMatrixGroups(matrix);
    const expected = 5;
    expect(result).toEqual(expected);
  });
});