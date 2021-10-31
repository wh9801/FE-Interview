function node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

let node4 = new node(4, null, null);
let node5 = new node(5, null, null);
let node6 = new node(6, null, null);
let node7 = new node(7, null, null);
let node2 = new node(2, node4, node5);
let node3 = new node(3, node6, node7);
let node1 = new node(1, node2, node3);

function dfs(root) {
    let stack = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        console.log(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
}

dfs(node1);
