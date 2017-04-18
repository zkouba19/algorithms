//////////////////// Singly Linked Lists ////////////////////
////////////////////////////////////////////////////////////


function SLL(){
	this.head = null;
	this.tail = null;

	this.add = function(value){
		// console.log(this);
		var node = new Node(value);
		if(!this.head){
			this.head = node;
			this.tail = node;
		} else if(!this.head.next){
			this.head.next = node;
			this.tail = node;
		} else {
			var curr = this.head;
			while(curr.next){
				curr = curr.next;
			}
			curr.next = node;
			this.tail = node;
		}
		// console.log(this)
	}
}

function Node(value){
	this.val = value;
	this.next = null
}


var List = new SLL();
List.add(5)
// console.log(List);
List.add(10)
// console.log(List);
List.add(15)
// console.log(List);
List.add(56)
// console.log(List);
List.add(85)
// console.log(List);



///// Adding to front of SLL instance ///////
SLL.prototype.addFront = function(value) {
	var node = new Node(value);
		if(!this.head){
			this.head = node;
			this.tail = node;
		} else {
			var temp = this.head;
			this.head = node;
			this.head.next = temp;
		}
		return this
};

// console.log(List);
// List.addFront(10);
// console.log(List);

SLL.prototype.removeFront = function(){
	if(!this.head){
		return this
	} else if(!this.head.next){
		this.head = null;
		return this;
	} else {
		var newHead = this.head.next;
		this.head = newHead;
	}
}

// List.removeFront();
// console.log(List);

SLL.prototype.contains = function(value){
	if(!this.head){
		return false;
	} 
	var curr = this.head;
	while(curr != null){
		if(curr.val == value){
			return true;
		}
		curr = curr.next;
	}
	return false;
}


// console.log(List.contains(56));
// console.log(List.contains(12));

SLL.prototype.returnFrontValue = function(){
	if(!this.head){
		return null
	}
	return this.head.val
}

// console.log(List.returnFrontValue())


SLL.prototype.length = function(){
	if(!this.head){
		return null
	}
	var count = 1;
	var curr = this.head;
	while(curr.next){
		count++;
		curr = curr.next;
	}
	return count;
}

// console.log(List.length());

SLL.prototype.findMax = function(){
	if(!this.head){
		return null
	} else if(!this.head.next){
		return this.head.val;
	}
	var max = this.head.val; 
	var curr = this.head;
	while(curr.next){
		if(curr.next.val > max){
			max = curr.next.val;
		}
		curr = curr.next;
	}
	return max;
}
// console.log("findMax");
// console.log(List.findMax());

SLL.prototype.findMin = function(){
	if(!this.head){
		return null
	} else if(!this.head.next){
		return this.head.val;
	}
	var min = this.head.val; 
	var curr = this.head;
	while(curr.next){
		if(curr.next.val < min){
			min = curr.next.val;
		}
		curr = curr.next;
	}
	return min;
}

// console.log(List.findMin())

SLL.prototype.findAverage = function(){
	if(!this.head){
		return null
	} else if(!this.head.next){
		return this.head.val;
	}
	var sum = this.head.val; 
	var count = 0;
	var curr = this.head;
	while(curr.next){
		sum += curr.next.val;
		curr = curr.next;
		count ++
	}
	var avg = (sum/count)
	return avg;
}

// console.log(List.findAverage())

/////////// standalone function //////////////3
///////////////////////////////////////////////


SLL.prototype.SplitOnValue = function(value){
	if(!this.head){
		return this
	} else if (!this.head.next){
		return this
	} 
	var curr = this.head
	var newList = {};
	while(curr.next){
		if(curr.next.val == value){
			newList = new SLL();
			newList.head = curr.next
			this.tail = curr;
			curr.next = null;
		} else {
			curr = curr.next
		}
	}
	return newList
}
// console.log('SplitOnValue');
// console.log(List.SplitOnValue(56));
// console.log(List);





