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
/// ex; given [[10,0], [-1,-10], [2,4]] --> [2,0] (distances: location 1: 8, location 2: 13, location 3: 4, total: 25) 
////////////////////////////////////////////////
function FoodTruck(arr){
	// find least distance between x positions for each customer
	var optimalCustomerIndex1 = 0;
	var optimalCustomerIndex2 = 1;
	var minDistance = Math.abs(arr[0][0] - arr[1][0]) + Math.abs(arr[0][1] - arr[1][1]);
	console.log(minDistance)
	var i = 0;
	var k = 2;
	while(i < arr.length-1){
		console.log(minDistance)
		if((Math.abs(arr[i][0] - arr[k][0]) + Math.abs(arr[i][1] - arr[k][1])) < minDistance){
			optimalCustomerIndex1 = i;
			optimalCustomerIndex2 = k;
			minDistance = (Math.abs(arr[i][0] - arr[k][0]) + Math.abs(arr[i][1] - arr[k][1]));
		}
		if(k == arr.length-1){
			console.log('reset')
			i++;
			k = i;
		}
		k++
	}
	console.log('this is our minDistance: '+minDistance);
	console.log('this is index1: '+optimalCustomerIndex1);
	console.log('this is index2: '+optimalCustomerIndex2);

}
/////////// tests /////////////
// var customerPositions = [[10,0], [-1,-10], [2,4]];
// FoodTruck(customerPositions);
///////////////////////////////

////////////////////////////////////////

///////////////////////////////////////
/// given a sorted array and a value ///
/// determine wether the array contains that value. ///
/// Do not iterate through the array sequentailly. ///
////////////////////////////////////////////////////////////
function ArrayBinarySearch(arr, value){
	var middleElementIndex = Math.floor(arr.length/2)
	if(arr[middleElementIndex] == value) return true;
	if(arr.length == 1 && arr[0] != value) return false;
	if(arr[middleElementIndex] > value){
		arr = arr.slice(0, middleElementIndex);
		console.log('bottom half');
		console.log(arr);
	} else {
		arr = arr.slice((middleElementIndex+1), arr.length);
		console.log('top half');
		console.log(arr);
	}
	return ArrayBinarySearch(arr, value);
}
//////////////////////////////////////////
/////////////// tests ////////////////////
//////////////////////////////////////////
// var binaryArray = [1,2,3,4,5,6,7,8,9,10];
// console.log(ArrayBinarySearch(binaryArray, 11));
// console.log(ArrayBinarySearch(binaryArray, 1));
// console.log(ArrayBinarySearch(binaryArray, 10));

////////////////////////////////////////////////
/// Given an array of values and/or arrays ///
/// Flatten the Array eliminating nested or empty arrays ///
////////////////////////////////////////////////

// function FlattenArray(arr){
// 	for(var i = 0; i < arr.length; i++) {
// 		if(typeof(arr[i]) == "object"){
			
// 		}
// 	}
// }





























