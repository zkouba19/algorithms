/////////////////////////////////////////////
//////////// SLL Stacks ////////////////////
////////////////////////////////////////////


var StackList1 = new SLL()
var StackList2 = new SLL()
SLL.prototype.push = function(val){
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

SLL.prototype.pop = function(){
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

SLL.prototype.show = function(){
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
SLL.prototype.returnTopValue = function(){
	// return this.tail.val

	// or

	if(!this.head) return null;
	var curr = this.head;
	while(curr.next){
		curr = curr.next;
	}
	return curr.val;
}

SLL.prototype.IsEmpty = function(){
	if(!this.head) return true;
	else return false;
}

SLL.prototype.Size = function(){
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




StackList1.push(10);
StackList1.push(15);
StackList1.push(9);
StackList1.push(21);
StackList1.push(21);

StackList2.push(10);
StackList2.push(15);
StackList2.push(9);
StackList2.push(21);
StackList2.push(21);

console.log(StackList1);
StackList1.show();
// StackList1.pop();


console.log(StackList1);
StackList1.show();
console.log(StackList1.returnTopValue());
console.log(StackList1.IsEmpty());
console.log(CompareStacks(StackList1, StackList2));
