export class Node {
  value: any;
  next: Node | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }
  add(value: any): void {
    let node = new Node(value);
    let head = this.head;
    if (head) {
      node.next = head;
    }
    this.head = node;
  }
  traverse(): Array<any>  {
    let values: Array<any> = [];
    let current: Node | null = this.head;
    while(current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
}