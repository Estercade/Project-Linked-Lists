const LinkedList = function() {
  let head = null;
  let tail = null;
  let size = null;

  // append(value) adds a new node containing value to the end of the list
  const append = (value) => {
    if (!head) {
      head = tail = new Node(value);
      size++;
    } else {
      let current = head;
      while(current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value);
      let newTail = current.nextNode;
      tail = newTail;
      size++;
    }
  }

  // prepend(value) adds a new node containing value to the start of the list
  const prepend = (value) => {
    let newHead = new Node(value);
    newHead.nextNode = head;
    head = newHead;
    size++;
  }

  // at(index) returns the node at the given index
  const at = (index) => {
    let current = head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  // pop removes the last element from the list
  const pop = () => {
    let current = head;
    if (current.nextNode === null) {
      current.value = null;
      head = tail = null;
    } else {
      let previous = current;
      current = current.nextNode;
      while (current.nextNode) {
        previous = current;
        current = current.nextNode;
      }
      previous.nextNode = null;
      tail = previous;
    }
    size--;
  }

  // contains(value) returns true if the passed in value is in the list and otherwise returns false
  const contains = (value) => {
    let current = head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  
  // find(value) returns the index of the node containing value, or null if not found
  const find = (value) => {
    let current = head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console
  const toString = () => {
    let str = ``;
    let current = head;
    while (current) {
      str += `${current.value} -> `;
      current = current.nextNode;
    }
    str += `null`;
    return str;
  }

  // insertAt(value, index) inserts a new node with the pr

var list = new LinkedList;
list.append(3);
list.append(4);
list.insertAt(5, 2);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());
console.log(list.head);
console.log(list.size);
  // or returns null if the given index is invalid (less than 0 or larger than the current size)
  const removeAt = (index) => {
    if (index < 0 || index > size) {
      return null;
    } else if (index === size - 1) {
      pop();
      return;
    }
    let current = head;
    let previous = current;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = current.nextNode;
    size--;
  }

  return {get size() { return size }, get tail() { return tail }, get head() { return head }, append, prepend, at, pop, contains, find, toString, insertAt, removeAt};
}

const Node = function(value = null, nextNode = null) {
  this.value = value;
  this.nextNode = nextNode;
}