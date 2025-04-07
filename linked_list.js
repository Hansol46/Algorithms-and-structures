// Элемент связанного списка
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class LinkedList {
  constuctor() {
    this.size = 0;
    this.root = null;
  }

  add(value) {
    if(this.size === 0) {
      this.root = new Node(value);
      this.size += 1;
      console.log('root', this.root);
      return true;
    }

    // let node = this.root;
    console.log('root', this.root);
    
    // let newNode = new Node(value);
    // node.next = newNode;
    // this.size += 1;
  }

  getSize() {
    return this.size
  }
  
};
