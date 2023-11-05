const { lowestCommonAncestor, TreeNode} = require("./lca")

describe("LCA", function() {
  it("functions_exist", function() {
    expect(typeof TreeNode === "function").toBe(true);
    expect(typeof lowestCommonAncestor === "function").toBe(true);
  });
  it("passes_example_tree", function() {
    const root = new TreeNode(3);


    const left = new TreeNode(5);
    root.left = left;

    const left_left = new TreeNode(6);
    left.left = left_left;

    const left_right = new TreeNode(2);
    left.right = left_right;

    const left_right_left = new TreeNode(7);
    left_right.left = left_right_left;

    const left_right_right = new TreeNode(4);
    left_right.right = left_right_right;


    const right = new TreeNode(1);
    root.right = right;

    const right_left = new TreeNode(0);
    right.left = right_left;

    const right_right = new TreeNode(8);
    right.right = right_right;


    expect(lowestCommonAncestor(root, left, right)).toBe(root);
    expect(lowestCommonAncestor(root, left_right, left_right_left)).toBe(
      left_right
    );
    expect(lowestCommonAncestor(root, left_right_left, left_left)).toBe(left);
    expect(lowestCommonAncestor(root, right_left, right_right)).toBe(right);
  });
});