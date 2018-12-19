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

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    // save current head
    let oldHead = this.head;
    // set head to next item
    this.head = oldHead.next;
    // decrement list length
    this.length--;
    // handle edge case
    if (this.length === 0) {
      this.tail = null;
    }
    // return removed node
    return oldHead;
  }
}

let list = new SinglyLinkedList();
list.push('Hello');
console.log(list);
list.push('World');
console.log(list);
list.push('Today');
console.log(list);
console.log(list.shift(), list);
console.log(list.shift(), list);
console.log(list.shift(), list);
