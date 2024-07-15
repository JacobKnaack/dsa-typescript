class ListNode {
  val: any | null;
  next: ListNode | null;

  constructor(val: any) {
    this.val = (val === undefined ? 0 : val);
    this.next = null;
  }
}

export function mergeKSortedLists(lists: Array<ListNode>): ListNode {

  let nums = [];
  let dummy = new ListNode(null);
  let current = dummy;

  for (let i = 0; i < lists.length; i++) {
    let currentList = lists[i];
    let currentNode = currentList;

    while (currentNode) {
      nums.push(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  nums.sort((a, b) => a - b);
  for (let number of nums) {
    current.next = new ListNode(number);
    current = current.next;
  }
  return dummy.next;
}
