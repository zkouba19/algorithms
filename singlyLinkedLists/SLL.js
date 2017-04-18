/////////////////////////////////////////////////////////////
//////////////////// Singly Linked Lists ////////////////////
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
//////////////// Singly Linked List Class ////////////////////////
	// Attributes
	// 1. head: used to locate the first node in the List
	// 2. tail: used to quickly add a node to the end of the list. 
			// - in these algorithms we will not be using the tail attribute to add new nodes.
			// Instead we will focus on parsing through the list when adding values. 
	// Methods
	// 1. add(): allows us to add a value to the end of the SLL instance.
	// 2. remove(): allows us to remove the last value from the SLL instance.


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

	this.remove = function(){
		if(!this.head) return this;
		if(!this.head.next){
			this.head = null;
			return this;
		}
		var curr = this.head;
		while(curr.next.next){
			curr = curr.next;
		}
		curr.next = null;
		this.tail = curr;
		return this;
	}
}

////////////////////////////////////////////////////////////////
//////////////////////// Node Class ////////////////////////////
	// Attributes
	// 1. val: the value that the node stores
	// 2. next: this is a reference to the next Node instance in our Singly Linked List instance. 


function Node(value){
	this.val = value;
	this.next = null
}
//////////////////////////////////////////////////////////////////////////////////////
//////////// Building out a Single Linked List Instance and adding nodes /////////////
//////////////////////////////////////////////////////////////////////////////////////
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


//////////////////////////////////////////////
///// Adding to front of SLL instance ////////
//////////////////////////////////////////////

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
//////////// tests ////////////
// console.log(List);
// List.addFront(10);
// console.log(List);
////////////////////////////////

//////////////////////////////////////////////
//// removing front node from Linked List ////
//////////////////////////////////////////////
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
//////////// tests ////////////
// List.removeFront();
// console.log(List);
////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
//// Given a value, determine wether the value can be found within the linked list ////
///////////////////////////////////////////////////////////////////////////////////////
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

//////////// tests ////////////
// console.log(List.contains(56));
// console.log(List.contains(12));
////////////////////////////////


////////////////////////////////////////////////////////////////
//////////// return first value in the Linked List ////////////
////////////////////////////////////////////////////////////////

SLL.prototype.returnFrontValue = function(){
	if(!this.head){
		return null
	}
	return this.head.val
}
//////////// tests ////////////
// console.log(List.returnFrontValue())
////////////////////////////////////

/////////////////////////////////////////////
//////// find the length of the list ////////
////////////////////////////////////////////
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
//////////// tests ////////////
// console.log(List.length());
//////////////////////////////

/////////////////////////////////////////////////
//////// find max value within the list ////////
////////////////////////////////////////////////
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
//////////// test ////////////
// console.log("findMax");
// console.log(List.findMax());
/////////////////////////////

///////////////////////////////////////
//// find the min within the list ////
//////////////////////////////////////
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
//////////// tests ////////////
// console.log(List.findMin())
////////////////////////////////


//////////////////////////////////////////////////////////
///// find the average of all values within the list /////
//////////////////////////////////////////////////////////

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
//////////// tests ////////////////
// console.log(List.findAverage())
////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//// split the list into two lists where the given value if found //////////////
//// ex: list = 1->2->3->4->5 value: 3 return list: 1->2, newlist: 3->4->5 /////
////////////////////////////////////////////////////////////////////////////////

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

//////////// tests ////////////////
// console.log('SplitOnValue');
// console.log(List.SplitOnValue(56));
// console.log(List);
////////////////////////////////




