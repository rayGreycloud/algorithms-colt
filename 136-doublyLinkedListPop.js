class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    // if list is empty
    if (!this.head) return undefined;
    // save current tail to return
    let currentTail = this.tail;
    // handle special case - list has 1 item
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // set tail to previous item
      this.tail = currentTail.prev;
      // set next on new tail
      this.tail.next = null;
      // remove reference to list from removed item
      currentTail.prev = null;
    }
    // decrement list length
    this.length--;
    // return removed item
    return currentTail;
  }
}
