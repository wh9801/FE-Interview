function node(val,left,right){
    this.val = val;
    this.left = left;
    this.right = right;
}

let node4 = new node(4,null,null);
let node5 = new node(5,null,null);
let node6 = new node(6,null,null);
let node7 = new node(7,null,null);
let node2 = new node(2,node4,node5);
let node3 = new node(3,node6,node7);
let node1 = new node(1,node2,node3);


function preOrder(root){
    if(root === null)
        return;
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
}

// preOrder(node1);

function inOrder(root){
    if(root === null)
        return;
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
}

// inOrder(node1);

function postOrder(root){
    if(root === null)
        return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
}

postOrder(node1);