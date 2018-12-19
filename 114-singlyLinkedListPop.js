class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    // initialize pointers
    let current = this.head;
    let newTail = current;
    // loop thru list until end (no .next)
    while (current.next) {
      // move new tail pointer (next to last)
      newTail = current;
      // move pointer to next node
      current = current.next;
    }
    // set list tail to newTail, which is next to last
    this.tail = newTail;
    // severe link to current
    this.tail.next = null;
    // decrement list length
    this.length--;
    // handle edge case
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // returned item popped from list
    return current;
  }
}

let list = new SinglyLinkedList();
list.push('Hello');
console.log(list);
list.push('World');
console.log(list);
list.push('Today');
console.log(list);
console.log(list.pop(), list);
console.log(list.pop(), list);
console.log(list.pop(), list);
