/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const traverseAndAdd = (node, stack) => {
    if (node) {
      stack.push(node.val)
      return traverseAndAdd(node.next, stack);
    } else {
      return stack;
    }
  }

  const convertStack = (stack) => {
    let result = '';
    while (stack.length) {
      result += stack.pop();
    }
    return result;
  }

  let stack1 = traverseAndAdd(l1, []);
  let stack2 = traverseAndAdd(l2, []);
  let numberString1 = convertStack(stack1);
  let numberString2 = convertStack(stack2);
  let sum = BigInt(numberString1) + BigInt(numberString2);
  let list = new ListNode();

  let current = list;
  let sumString = sum.toString();
  let reversedString = '';
  for (let i = sumString.length - 1; i >= 0; i--) {
    reversedString += sumString[i];
  }
  for (let charIndex in reversedString) {
    current.val = reversedString[charIndex];
    if (reversedString[parseInt(charIndex) + 1]) {
      current.next = new ListNode();
      current = current.next;
    }
  }

  return list;
};