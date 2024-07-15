import { validateBst, TreeNode } from ".";

describe('Validate BST', () => {
  test('Should return true for tree with similar subtree heights', () => {
    let tree: TreeNode = { value: 1, left: null, right: null }
    tree.left = {
      value: 2,
      left: {
        value: 4,
        left: null,
        right: null
      },
      right:  {
        value: 5,
        left: null,
        right: null
      }
    }
    tree.right = {
      value: 3,
      left: null,
      right: null
    }

    let results = validateBst(tree);
    expect(results).toEqual(true);
  });

  test('Should return false for tree with unbalanced height', () => {
    let tree: TreeNode = { value: 1, left: null, right: null };
    tree.left = {
      value: 2,
      left: {
        value: 4,
        left: null,
        right: null
      },
      right: {
        value: 5,
        left: {
          value: 6,
          left: null,
          right: null
        },
        right: null
      },
    }
    tree.right = {value: 3, left: null, right: null}


    let results = validateBst(tree);
    expect(results).toEqual(false);
  });
})

