//////////// arrays part 2 ////////////
///////////////////////////////////////

////////////////////////////////////////////////
/// given an array, return wether the given ///
/// array has a balance point between indices ///
/// where one sides's sum is equal to the other's ///
/// ex: [1,2,3,4,10] ---> true (between 3 & 4) ///
/////////////////////////////////////////////////////
function BalancePoint(arr){
	// find total 
	var rightTotal = 0;
	var leftTotal = 0;
	for(var i = 0; i < arr.length; i++){
		rightTotal += arr[i];
	}
	console.log(rightTotal);
	// subtract sum of left & check lefttotal == righttotal
	for(var x = 0; x < arr.length; x++){
		console.log('running second for loop')
		leftTotal += arr[x];
		rightTotal = rightTotal - arr[x];
		console.log('left: '+ leftTotal);
		console.log('right: '+ rightTotal);
		if(rightTotal == leftTotal){
			return true;
		}
	}
	return false;
}

/// tests
// var arrTest = [20,3,3,4,10];
// console.log(BalancePoint(arrTest));

////////////////////////////////////////////////
/// given an array, return wether the given array has///
/// a balance index point where one sides's sum ///
/// is equal to the other's. (excluding index's own value.///
/// ex: [1,2,3,4,2,10] ---> 4 ///
/////////////////////////////////////////////////////
function BalanceIndex(arr){
	// find total
	var rightTotal = 0;
	var leftTotal = 0;
	for(var i = 0; i < arr.length; i++){
		rightTotal += arr[i];
	}
	rightTotal = rightTotal - arr[0];
	for(var x = 1; x < arr.length; x++){
		leftTotal += arr[x-1];
		rightTotal = rightTotal - arr[x];
		if(rightTotal == leftTotal){
			return true;
		}
	}
	return false;
}

/// tests
// var arrBI = [1,2,3,4,2,10];
// console.log(BalanceIndex(arrBI));

//////////////////////////////////////////////
/// Given an array of customer positions [[x,y],...]
/// find the optimal x,y coordinates that creates the
/// shortest total distance. (sum of distance for all customers). 
/// ex; given [[10,0], [-1,-10], [2,4]] --> [2,0]
////////////////////////////////////////////////
function FoodTruck(arr){
	// find least distance between x positions for each customer
	var minXDistance = 0;
	
	for(var i = 0; i < arr.length; i++){

	}
}
















