import { LinkedListNode } from "./LinkedListNode";

export class LinkedList {
  head: LinkedListNode;

  constructor(node: LinkedListNode) {
    this.head = node;
  }


  add(node: LinkedListNode) {
    if (!!node) {
      let lastNode = {...this.head};

      while(lastNode.next) {
        
        if (!lastNode.next.next) {
          lastNode = lastNode.next
        }
      }

      lastNode.next = node;
    }
  }

  

  
}
