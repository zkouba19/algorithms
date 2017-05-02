function BST(){
	this.root = null;
}

function TreeNode(value){
	this.value = value;
	// left is less than
	this.left = null;
	// right is greater than
	this.right = null;
}



function ShowTree(node){
	// this console.log statement prints tree values from top to bottom.
	// with node.left check first means we will then print all nodes on left then right
	console.log(node.value);

	if(node.left){
		var left = ShowTree(node.left);
	}
	// use this console.log statement to print values 
	// from the bottom of the tree to the top. 
	// Starting left nodes first then right nodes. 
	// Switch if statements for right to left
	// console.log(node.value);
	if(node.right){
		var right = ShowTree(node.right);
	}
}


BST.prototype.add = function(value) {
	var newNode = new TreeNode(value)
	if(!this.root){
		this.root = newNode;
	} else{
		var curr = this.root;
		while(curr.left || curr.right){
			if(newNode.value > curr.value && curr.right){
				curr = curr.right;
			} else if(newNode.value > curr.value){
				break;
			} else if(newNode.value <= curr.value && curr.left){
				curr = curr.left;
			} else {
				break;
			}
		}
		if(newNode.value > curr.value){
			curr.right = newNode;
			return this;
		} else {
			curr.left = newNode;
			return this;
		}
	}
};

BST.prototype.contains = function(value){
	if(!this.root) return false;
	var curr = this.root;
	while(curr){
		if(value == curr.value){
			return true;
		}
		if(value > curr.value){
			curr = curr.right;
		} else {
			curr = curr.left;
		}
	}
	return false;
}

BST.prototype.size = function(node){
	console.log('running function')
	if(!node && !this.root) return null;
	if(!node){
		node = this.root
	}
	if(!node.right && !node.left){
		return 1
	}
	var left = this.size(node.left)+1;
	var right = this.size(node.right)+1;
	return left+right-1
}

var Tree = new BST()
Tree.add(10);
Tree.add(13);
Tree.add(8);
Tree.add(11);
Tree.add(14);
Tree.add(9);
Tree.add(2);
ShowTree(Tree.root);
console.log(Tree.contains(2));
console.log(Tree.contains(12));
console.log(Tree.size())


