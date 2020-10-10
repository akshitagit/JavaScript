class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		const newNode = new Node(data);

		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(node, newNode) {
		if (newNode.data < node.data) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	remove(data) {
		this.root = this.removeNode(this.root, data);
	}

	removeNode(node, key) {
		if (node === null) {
			return null;
		} else if (key < node.data) {
			node.left = this.removeNode(node.left, key);
		} else if (key > node.data) {
			node.right = this.removeNode(node.right, key);
		} else {
			if (node.left === null && node.right === null) {
				node = null;
			} else if (node.left === null) {
				node = node.right;
			} else if (node.right === null) {
				node = node.left;
			} else {
				const childRight = node.right;

				this.insertNode(childRight, node.left);
				node = childRight;
			}
		}
		return node;
	}

	preorder(fn, node = this.root) {
		if (node !== null) {
			fn(node);
			this.preorder(fn, node.left);
			this.preorder(fn, node.right);
		}
	}

	inorder(fn, node = this.root) {
		if (node !== null) {
			this.preorder(fn, node.left);
			fn(node);
			this.preorder(fn, node.right);
		}
	}

	postorder(fn, node = this.root) {
		if (node !== null) {
			this.preorder(fn, node.left);
			this.preorder(fn, node.right);
			fn(node);
		}
	}
}
