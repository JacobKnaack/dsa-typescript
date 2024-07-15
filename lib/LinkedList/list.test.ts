import { LinkedList, Node } from './LinkedList';

describe('Linked List Class', () => {
  test('Should create an empty list', () => {
    let list: LinkedList = new LinkedList();
    expect(list.head).toEqual(null);
  });
  test('Should be able to add a value to the list', () => {
    let list: LinkedList = new LinkedList();
    list.add('A');
    list.add('B');
    expect(list.head).toBeInstanceOf(Node);
    expect(list.head).toEqual({
      value: 'B',
      next: {
        value: 'A',
        next: null
      }
    });
  });
  test('Should be able to remove a node from the list', () => {
    let list: LinkedList = new LinkedList();
    list.add('A');
    list.add('B');
    let values: Array<any> = list.traverse();
    expect(values[0]).toEqual('B');
    expect(values[1]).toEqual('A');
  });
});