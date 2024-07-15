export type TreeNode = {
  value: any;
  left: TreeNode | null;
  right: TreeNode | null;
}

/**
 * Write a function that takes in a binary tree as an argument and returns whether or not is balanced (True or False). A tree is considered balanced if, at every node in the tree, the height of the left subtree and the height of the right subtree differ by no more than one.
 */
export function validateBst(root: TreeNode): boolean {

  const getHeight = (node: TreeNode | null, heightSoFar: number): number => {
    if (node === null) {
      return heightSoFar;
    }
    return Math.max(
      getHeight(node.left, heightSoFar + 1),
      getHeight(node.right, heightSoFar + 1)
    )
  }

  return Math.abs(getHeight(root.left, 0) - getHeight(root.right, 0)) <= 1;
}
