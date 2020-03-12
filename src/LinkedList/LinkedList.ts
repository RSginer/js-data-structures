import { LinkedListNode } from "./LinkedListNode";

export class LinkedList {
  head: LinkedListNode;

  constructor(node: LinkedListNode) {
    this.head = node;
  }


  add(node: LinkedListNode) {
    if (!!node) {
      let currentNode = {...this.head};
      while(currentNode.next) {
        
        if (!currentNode.next.next) {
          currentNode = currentNode.next
        }
      }

      currentNode.next = node;
    }
  }

  
}
