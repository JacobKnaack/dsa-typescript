import crypto from 'crypto';
/**
 * finds data that is least recently used, removes that data to make space for new data.
 */

export class ListNode {
  value: any;
  previous: ListNode | null;
  next: ListNode | null;
  
  constructor(value: any) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

export class RecencyList {
  head: ListNode | null;
  tail: ListNode | null;

  constructor() {
    this.head = null;
    this.tail = null
  }

  add(data: any): void {
    let current: ListNode | null = this.head;
    let newNode: ListNode = new ListNode(data);

    if (current instanceof ListNode) {
      current.previous = newNode;
      newNode.next = current;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }
  removeNode(node: ListNode): void {
    let previousNode = node.previous;
    let nextNode = node.next;
    if (previousNode) {
      if (this.tail === node) {
        this.tail = previousNode;
      }
      previousNode.next = nextNode;
    }    
    if (nextNode) {
      if (node === this.head) {
        this.head = nextNode;
      }
      nextNode.previous = previousNode;
    }
    node.next = null;
    node.previous = null;
  }
  getNode(value: any): ListNode | null {
    let current = this.head;
    while(current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  evict(): ListNode | null {
    let eviction: ListNode | null = this.tail;
    if (eviction) {
      let newTail = eviction.previous;
      eviction.previous = null;
      if (newTail && newTail.next === eviction) {
        newTail.next = null;
      }
      this.tail = newTail;
    }
    return eviction;
  }
}

export class LeastRecentlyUsedCache {
  recencyList: RecencyList;
  cache: Map<string, any>;
  maxSize: number;
  currentSize: number;

  constructor(size: number) {
    this.recencyList = new RecencyList();
    this.cache = new Map();
    this.maxSize = size;
    this.currentSize = 0;
  }

  static generateHash(data: any): string {
    const hash = crypto.createHash('sha256');
    hash.update(data);
    return hash.digest('hex');
  }

  access(value: any): string {
    // find the value in the cache if it exists.
    let key: string = LeastRecentlyUsedCache.generateHash(value); // generate a key
    if (this.cache.has(key)) {
      console.log('CACHE HIT');
      // find the value in the cache
      let value: any = this.cache.get(key);
      let node: ListNode | null = this.recencyList.getNode(value);

      // Move node to head;
      if (node instanceof ListNode) {
        this.recencyList.removeNode(node);
        this.recencyList.add(node.value);
      }
    } else {
      console.log('CACHE MISS');
      if (this.currentSize === this.maxSize) { // max size reached, must remove oldest item in the list
        let leastUsed = this.recencyList.evict();
        let keyToRemove = LeastRecentlyUsedCache.generateHash(leastUsed!.value);
        this.cache.delete(keyToRemove);
      } else {
        this.currentSize++;
      }
      this.recencyList.add(value);
      this.cache.set(key, value);
    }
    return key;
  }
}