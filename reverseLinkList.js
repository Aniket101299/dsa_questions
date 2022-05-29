
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function reverse(head) {
   let cur = head;
   let p = null;
   let n = null;
   
   while(cur!== null) {
       n = cur.next;
       cur.next = p;
       p=cur;
       cur=n;
   }
   return p;
}

