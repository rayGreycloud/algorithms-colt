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
    if (!this.head) return undefined;
    let currentTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length--;

    return currentTail;
  }

  shift() {
    if (this.length === 0) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    // if no items, make new node both head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // point old head previous at new node
      this.head.prev = newNode;
      // point new node next to old head
      newNode.next = this.head;
      // make new node the head
      this.head = newNode;
    }
    // increment list length
    this.length++;
    // retur list
    return this;
  }
}

let list = new DoublyLinkedList();
list.unshift('Harry');
list.unshift('Ron');
list.unshift('Hermione');
console.log(list);
