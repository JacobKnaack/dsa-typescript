import {
  LeastRecentlyUsedCache as LRUCache,
  RecencyList,
  ListNode
} from "./LeastRecentlyUsedCache";

beforeAll(() => {
  console.log = jest.fn();
});

describe('Testing the recency list', () => {
  test('Should be able to create a small list', () => {
    let list = new RecencyList();
    list.add('value 1');
    list.add('value 2');

    expect(list.head!.value).toEqual('value 2');
    expect(list.tail!.value).toEqual('value 1');
  });

  test('Should be able to get a Node from the list', () => {
    let list: RecencyList = new RecencyList();
    
    let node1: ListNode = new ListNode(1);
    let node2: ListNode = new ListNode(2);
    let node3: ListNode = new ListNode(3);
    let node4: ListNode = new ListNode(4);

    list.head = node1;
    list.head.next = node2;
    list.head.next.next = node3;
    list.head.next.previous = node1;
    list.head.next.next.previous = node2;
    list.head.next.next.next = node4;
    list.head.next.next.next.previous = node3;

    let result = list.getNode(3);
    expect(result?.value).toEqual(3);
    expect(result?.previous).toBe(node2);
    expect(result?.next).toBe(node4);
  });

  test('Should be able to remove a node from the list', () => {
    let list: RecencyList = new RecencyList();

    let node1: ListNode = new ListNode(1);
    let node2: ListNode = new ListNode(2);
    let node3: ListNode = new ListNode(3);
    let node4: ListNode = new ListNode(4);

    list.head = node1;
    list.head.next = node2;
    list.head.next.next = node3;
    list.head.next.previous = node1;
    list.head.next.next.previous = node2;
    list.head.next.next.next = node4;
    list.head.next.next.next.previous = node3;
    list.tail = node4;

    list.removeNode(node2);
    expect(list.head).toBe(node1);
    expect(list.head.next).toEqual(node3);

    list.removeNode(node4);
    expect(node3.next).toEqual(null);
    expect(list.tail).toBe(node3);
  });

  test('Should be able to evict the last recently used item', () => {
    let list = new RecencyList();

    let node1: ListNode = new ListNode(1);
    let node2: ListNode = new ListNode(2);
    let node3: ListNode = new ListNode(3);
    list.head = node1;
    list.head.next = node2;
    list.head.next.next = node3;
    list.head.next.previous = node1;
    list.head.next.next.previous = node2;
    list.tail = node3;

    let evicted: ListNode | null = list.evict();
    expect(evicted).toBeTruthy();
    expect(evicted?.value).toEqual(3);
    expect(list?.tail?.value).toEqual(2);
    expect(list.head.value).toEqual(1);
  });
});

describe('Testing recent cache', () => {
  test('Should generate a deterministic hash using a value', () => {
    let valueToHash = '12345';

    let hash1 = LRUCache.generateHash(valueToHash);
    let hash2 = LRUCache.generateHash(valueToHash);
    expect(hash1).toEqual(hash2);
  });

  test('Should quickly look up new values', () => {
    const lru = new LRUCache(3);
    
    expect(lru.cache instanceof Map).toBeTruthy();
    expect(lru.recencyList instanceof RecencyList).toBeTruthy();

    let key1 = lru.access('value 1');
    let key2 = lru.access('value 2');
    let key3 = lru.access('value 3');
    expect(key1).toBeTruthy();
    expect(key2).toBeTruthy();
    expect(key3).toBeTruthy();
    expect(lru.currentSize).toEqual(3);
  });
  test('Should be able to update recency list when accessing values over max size', () => {
    let lru = new LRUCache(3); // set max size to 3

    let key1 = lru.access('value 1');
    let key2 = lru.access('value 2');
    let key3 = lru.access('value 3');
    let key4 = lru.access('value 4');

    expect(lru.currentSize).toEqual(3);
    expect(lru.cache.has(key1)).toEqual(false);
    expect(lru.recencyList?.tail?.value).toEqual('value 2');
  });

  test('Should move items in the cache to the front of queue', () => {
    let lru = new LRUCache(3); // set max size to 3

    let key1 = lru.access('value 1');
    let key2 = lru.access('value 2');
    let key3 = lru.access('value 3');

    expect(lru.currentSize).toEqual(3);
    lru.access('value 1');
    expect(lru.recencyList?.head?.value).toEqual('value 1');
  });
});