## DataStructures

## LinkedList

example usage

```js
// Constructors
const LinkedNode = DataStructures.LinkedListNode;
const LinkedList = DataStructures.LinkedList;

// run
const nextNode = new LinkedNode(2);
const node = new LinkedNode(1);
const otherNode = new LinkedNode(3);

node.pointTo(nextNode);

const list = new LinkedList(node);

list.add(otherNode);
```
