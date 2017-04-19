

/////////////////////////////////////////////
//////////// Stack Stacks ////////////////////
////////////////////////////////////////////

///////////////////////////////////////////////
//////////////// SLL Stack Class //////////////

function SLLStack(){
	this.head = null;
	this.tail = null;
}
///////////////////////////////////////////////
//////////////// Node Stack Class //////////////
function Node(value){
	this.val = value;
	this.next = null;
}




var StackList1 = new SLLStack()
var StackList2 = new SLLStack()
SLLStack.prototype.push = function(val){
	var newNode = new Node(val);
	this.tail = newNode;
	if(!this.head){
		this.head = newNode;
		return this
	}
	var curr = this.head;
	while(curr.next){
		curr = curr.next
	}
	curr.next = newNode;
	return this;
}

SLLStack.prototype.pop = function(){
	if(!this.head) return this;
	if(!this.head.next){
		this.head = null;
		this.tail = null;
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

SLLStack.prototype.show = function(){
	var curr = this.head;
	while(curr){
		console.log(curr.val)
		curr = curr.next;
	}
}
////////////////////////////////////////////////////////////////////////////////
/////// since my SLL class contains a tail which is the top in the stack /////
/////// we could just return this.tail.val. However, I will show how to /////
/////// iterate through the stack to get the value.	/////////////////////////
////////////////////////////////////////////////////////////////////////////
SLLStack.prototype.returnTopValue = function(){
	// return this.tail.val

	// or

	if(!this.head) return null;
	var curr = this.head;
	while(curr.next){
		curr = curr.next;
	}
	return curr.val;
}

SLLStack.prototype.IsEmpty = function(){
	if(!this.head) return true;
	else return false;
}

SLLStack.prototype.Size = function(){
	var count = 0
	if(!this.head) return count;
	var curr = this.head;
	while(curr.next){
		count ++;
		curr = curr.next;
	}
	return count;
}

function CompareStacks(ST1, ST2){
	if(!ST1.head && !ST2.head){
		return true;
	}
	var curr1 = ST1.head;
 	var curr2 = ST2.head;
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


// StackList1.push(10);
// StackList1.push(15);
// StackList1.push(9);
// StackList1.push(21);
// StackList1.push(21);

// StackList2.push(10);
// StackList2.push(15);
// StackList2.push(9);
// StackList2.push(21);
// StackList2.push(21);

// console.log(StackList1);
// StackList1.show();
// // StackList1.pop();


// console.log(StackList1);
// StackList1.show();
// console.log(StackList1.returnTopValue());
// console.log(StackList1.IsEmpty());
// console.log(CompareStacks(StackList1, StackList2));


////////////////////////////////////////////////
/////////////// arrStack Class /////////////////
function StackArray(){
	this.size = 0;
	this.stack = [];
};

////////////////////////////////////////////
/////////// prototype functions ////////////

/////////////////////////////////////////////
///// add value to the stack at the top /////
/////////////////////////////////////////////
StackArray.prototype.push = function(val){
	this.stack[this.size] = val;
	this.size += 1;
	return this;
}

/////////////////////////////////////////////
//////// remove and return top value ////////
/////////////////////////////////////////////
StackArray.prototype.pop = function(){
	this.size = this.size-1;
	return this.stack.pop();
}

//////////////////////////////////////////////////
//// return the value at the top of the stack ////
//////////////////////////////////////////////////
StackArray.prototype.top = function(){
	return this.stack[this.size-1];
}

//////////////////////////////////////////////////
//// given a value search the stack & return /////
//// boolean wether value was found ro not ///////
//////////////////////////////////////////////////
StackArray.prototype.contains = function(val){
	for(var i = this.size-1; i >= 0; i--){
		if(this.stack[i] == val){
			return true;
		}
	}
	return false;
}

///////////////////////////////
//////////// tests ////////////
///////////////////////////////

// var stack1 = new StackArray();
// stack1.push(5);
// stack1.push(3);
// stack1.push(6);
// stack1.push(2);
// console.log(stack1.pop());
// console.log(stack1)
// console.log(stack1.top())
// console.log(stack1.size);




