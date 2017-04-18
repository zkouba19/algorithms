//////////////////////////////////////////////////////////////////////////////////
//////////////////////// SLL Class ///////////////////////////////////////////////
function SLL(){
	this.head = null;
	this.tail = null;
}

function Node(value){
	this.val = value;
	this.next = null
}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// Signly Linked List Queues /////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


SLL.prototype.Enqueue = function(val){
	var newNode = new Node(val)
	this.tail = newNode
	if(!this.head){
		this.head = newNode;
		return this;
	}
	if(!this.head.next){
		this.head.next = newNode;
		return this;
	}
	var curr = this.head;
	while(curr.next){
		curr = curr.next;
	}
	curr.next = newNode;
	return this;
}


SLL.prototype.Dequeue = function(){
	if(!this.head) return this;
	if(!this.head.next){
		this.head = null;
		return this
	}
	var temp = this.head.next;
	this.head = temp;
	return this
}

SLL.prototype.ReturnFront = function() {
	if(!this.head){
		return null;
	} else {
		return this.head.val
	}
};

SLL.prototype.Contains = function(val){
	if(!this.head){
		return false
	}
	var curr = this.head;
	while(curr){

		if(curr.val == val){
			return true;
		}
		curr = curr.next;
	}
	return false;
}

SLL.prototype.IsEmpty = function(){
	if(!this.head){
		return true;
	}
	return false
}

SLL.prototype.Size = function(){
	var count = 0
	if(!this.head){
		return count;
	}
	var curr = this.head;
	while(curr){
		count++;
		curr = curr.next;
	}
	return count;
}

//////////////// stand alone function ///////////////////


//////// comparing Queues to see if they are equal //////////
/////// equals means queues match values in exact order ////// 

 function CompareQueues(Q1, Q2){
 	if(!Q1.head && !Q2.head){
 		return true;
 	}
 	var curr1 = Q1.head;
 	var curr2 = Q2.head;
 	while(curr1 || curr2){
 		if(!curr1 || !curr2) return false;
 		if(curr1.val != curr2.val){
 			return false;
 		}
 		curr1 = curr1.next;
 		curr2 = curr2.next;
 	}
 	return true;
 }

////////////////////////////////////////////
///////////////// tests ///////////////////
// var List1 = new SLL()
// List1.Enqueue(5);
// List1.Enqueue(6);
// List1.Enqueue(10);
// List1.Enqueue(20);
// List1.Enqueue(19);
// var List2 = new SLL()
// List2.Enqueue(5);
// List2.Enqueue(6);
// List2.Enqueue(10);
// List2.Enqueue(20);
// console.log('********************')
// console.log(CompareQueues(List1, List2));
// console.log('********************')
// List2.Enqueue(19);
// console.log('********************')
// console.log(CompareQueues(List1, List2));
// console.log('********************')


// console.log(List1.ReturnFront());
// console.log(List1.ReturnFront());
// console.log(List1);
// console.log(List1.Contains(10));
// console.log(List1.IsEmpty());
// console.log(List1.Size())
// console.log(CompareQueues(List1, List2));



///////////////////////////////////////
////////// Array Queues ///////////////
///////////////////////////////////////




















