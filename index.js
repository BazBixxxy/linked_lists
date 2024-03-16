class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  addHead(data) {
    // adding an item at the start of the list
    this.head = new Node(data, this.head); // the new node takes in 2 variables the 1st is the data and the 2nd is the this.head value which pushes the next data input to the next node
    this.size++;
  }

  addTail(data) {
    // adding an item at the end of the list
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.size++;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next; // this loops through until it reaches the last node
    }
    current.next = newNode; // this line of code sets the new node as the very last node
    this.size++;
  }

  // adding data at a particular index
  addAtIndex(data, index) {
    if (index < 0 || index >= this.size) return; // if the index is out range we return nothing

    if (index === 0) {
      return (this.head = new Node(data, this.head));
    } // if we want to add at index 0 we just call the first add to head function
    // if (index === 0) return this.addHead(data);

    const newNode = new Node(data);
    let current = this.head;
    let previous;
    let iterator = 0;
    while (iterator < index) {
      previous = current; // this refers to the node before
      iterator++;
      current = current.next; // the node after the index
    }

    newNode.next = current;
    previous.next = newNode;
    this.size++;
  }

  at(index) {
    let current = this.head;
    let iterator = 0;
    while (current) {
      if (iterator == index) console.log(current.data);
      iterator++;
      current = current.next;
    }
    return null;
  }

  find(data) {
    if (this.size <= 0) return null;
    // if (this.size === 1) return this.head.data;
    // if (this.head.data === data) return this.head.data;
    if (this.head.data === data) return true;

    let current = this.head;
    while (current) {
      current = current.next;
      if (current.next.data === data) {
        return true;
      }
    }
    return false;
  }

  removeNode(data) {
    if (this.isEmpty()) return null;
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return this;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return this;
      }
    }
    return null;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) return;
    if (this.isEmpty()) return null;
    if (index === 0) {
      this.head = this.head.next;
    } // this will automatically remove the head if it exists
    let current = this.head;
    let previous;
    let iterator = 0;
    while (iterator < index) {
      iterator++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }

  printNodeData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.addHead("node1");
list.addHead("node2");
list.addHead("node3");
list.addTail("node0");
list.addAtIndex("node1.5", 2);
console.log(list.find("node1.4"));
// list.removeNode('node3')
// list.removeAt(4); // this removes the value at the 4th index [node0]
list.at(3);
list.printNodeData();
console.log(list);
