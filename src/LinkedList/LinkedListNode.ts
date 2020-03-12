export class LinkedListNode {
  data: any;
  next: LinkedListNode;

  constructor(data: any, next?: LinkedListNode) {
    this.data = data;

    if (!!next) {
      this.next = next
    }
  }

  pointTo(node: LinkedListNode) {
    this.next = node;
  }
}
