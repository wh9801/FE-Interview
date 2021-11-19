function linkNode(val, next) {
    this.val = val;
    this.next = next;
}

let node4 = new linkNode(4, null);
let node3 = new linkNode(3, node4);
let node2 = new linkNode(2, node3);
let node1 = new linkNode(1, node2);

function reverseLinkList(node){
    if(!node){
        return null;
    }
    let prev=null;
    let cur=node;
    while(cur){
        const next=cur.next;
        cur.next=prev;
        prev=cur;
        cur=next;
    }
    return prev;
}

console.log(node1);
console.log(reverseLinkList(node1));