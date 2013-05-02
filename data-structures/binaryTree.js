var Node = function(value) {
	this.value = value || '';
	this.leftChild = undefined;
	this.rightChild = undefined;
};

Node.prototype = {
	insertLeftChild: function(value) {
		if (this.leftChild)
			var oldLeftChild = this.leftChild;
		var newNode = new Node(value || '');
		if (oldLeftChild) newNode.leftChild = oldLeftChild;
		this.leftChild = newNode;
		return newNode;
	},
	insertRightChild: function(value) {
		if (this.rightChild)
			var oldRightChild = this.rightChild;
		var newNode = new Node(value || '');
		if (oldRightChild) newNode.rightChild = oldRightChild;
		this.rightChild = newNode;
		return newNode;
	},
	deleteLeftChild: function() {
		this.leftChild = undefined;
	},
	deleteRightChild: function() {
		this.rightChild = undefined;
	}
};

var Tree = function(id, root) {
	this.id = id || '';
	this.root = root || (new Node('root'));
}
Tree.initiate = function(id) {
	return new Tree(id || '', new Node(id || 'root'));
};
Tree.prototype = {
	insertLeftChild: function(parent, value) {
		if (!parent) throw new Error('Parent and leftChild is needed');
		parent.insertLeftChild(value || '');
		return this;
	},
	insertRightChild: function(parent, value) {
		if (!parent) throw new Eror('Parent and rightChild is needed');
		parent.insertRightChild(value);
		return this;
	},
	deleteLeftChild: function(parent) {
		if (!parent) throw new Error('Parent is needed');
		parent.deleteLeftChild();
		return this;
	},
	deleteRightChild: function(parent) {
		if (!parent) throw new Error('Parent is needed');
		parent.deleteRightChild();
		return this;
	},
	printDLR: function(parent, n) {
		var indent = '';
		for (var i = 0; i < n; i++) {
			indent += '\t';
		}

		var result = indent + parent.value + '\n';
		if (parent.leftChild)
			result += this.printDLR(parent.leftChild, n + 1);
		if (parent.rightChild)
			result += this.printDLR(parent.rightChild, n + 1);

		return result;
	},
	printLDR: function(parent, n) {
		var indent = '';
		for (var i = 0; i < n; i++) {
			indent += '\t';
		}

		var result = '';
		if (parent.rightChild)
			result += this.printLDR(parent.rightChild, n + 1);
		result += indent + parent.value + '\n';
		if (parent.leftChild)
			result += this.printLDR(parent.leftChild, n + 1);

		return result;
	},
	search: function(parent, target) {
		console.log(1);
		if (typeof target === 'undefined') throw new Error('Target value is needed');

		if (parent.value == target) return true;
		if (parent.leftChild && this.search(parent.leftChild, target)) return true;
		if (parent.rightChild && this.search(parent.rightChild, target)) return true;

		return false;
	}
};

//Test
var t = Tree.initiate('myTree');
t.insertLeftChild(t.root, 'A').insertRightChild(t.root, 'B').insertRightChild(t.root, 'C').insertLeftChild(t.root.rightChild.rightChild, 'D')
	.insertLeftChild(t.root.leftChild, 'E').insertRightChild(t.root.leftChild, 'F');
console.log(t.printDLR(t.root, 0));
console.log(t.printLDR(t.root, 0));
console.log(t.search(t.root, 'F'));