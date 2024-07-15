import { MessageQueue } from './MessageQueue';

describe('Testing the Message Qeueue', () => {
  test('Should create queue of different type', () => {
    let pickups = new MessageQueue({ type: 'fifo', name: '1-800-flowers' });
    let inTransit = new MessageQueue({ name: 'driver 1' });

    pickups.add('1', 'order 1');
    pickups.add('2', 'order 2');

    inTransit.add('1', 'order 1');
    inTransit.add('2', 'order 2');

    expect(pickups.getLength()).toEqual(2);
    expect(pickups.peek()).toEqual('order 1');
    expect(inTransit.get('1')).toEqual('order 1')
    expect(inTransit.getLength()).toEqual(2);
  });
});