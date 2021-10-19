class Node {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (!node.children[c]) {
        node.children[c] = new Node();
      }
      node = node.children[c];
    }
    node.isWord = true;
  }

  search(word) {
    let node = this.root;
    for (let c of word) {
      if (!node.children[c]) return false;
      node = node.children[c];
    }
    return node.isWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let c of prefix) {
      if (!node.children[c]) return [];
      node = node.children[c];
    }
    return node;
  }
}
