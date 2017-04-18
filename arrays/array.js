//////////////// Arrays //////////////////
//////////////////////////////////////////
//////////// variables for test ///////////
var arrSM = [123,32,34,34,43]
var arrMD = [123,32,34,34,43,23,64,17,76,43,2,34,4,34]
var arrLG = [123,32,34,34,43,178,23,7,34,5,23,90,23,543,2,232,70,64,17,76,43]

///////// adding a value to the front of an array ////////////
function pushFront(arr, val){
	arr.push(val);
	for(var i = arr.length-1; i > 0; i--){
		arr[i] = arr[i-1];
	}
	arr[0] = val;
	return arr
}
////////////////////////////////////////////////////////////
//////////// remove first item in the array ////////////////
function popFront(arr){
	for(var i = 0; i < arr.length-1; i++){
		arr[i] = arr[i+1];
	}
	arr.pop();
	return arr
}
////////////////////////////////////////////////////////////
/////// inser item in the array at specific position //////

function insertAt(arr, pos, val){
	arr.push(val);
	for(var i = arr.length-1; i > pos; i--){
		arr[i] = arr[i-1];
	}
	arr[pos] = val;
	return arr
}

//////////// tests //////////////////
// console.log(insertAt(arrSM,2,21))
//////////////////////////////////////

////////////////////////////////////////////////////////////
//////////// remove item at specific position //////////////

function RemoveAt(arr, pos){
	for(var i = pos; i < arr.length-1; i++){
		arr[i] = arr[i+1]
	}
	arr.pop();
	return arr
}

//////////// tests //////////////////
// console.log(RemoveAt(arrMD, 3))
//////////////////////////////////////

////////////////////////////////////////////////////////////
//Swap each pair in the arr. if arr is odd leave last val//
///////////// ex: [1,2,3,4] --> [2,1,4,3] ////////////////
function SwapPairs(arr){
	console.log('running the function')
	for(var i = 0; i < arr.length-1; i+=2){
		if(arr[i+1] != null){
			var temp = arr[i]
			arr[i] = arr[i+1];
			arr[i+1] = temp;
		}
	}
	return arr
}

////////////////////////////////////////////////////////////
/////////////// remove all duplicates //////////////////////

function RemoveDuplicatesFromSortedArray(arr){
	var i = 0
	var k = 1
	while(k < arr.length){
		if(arr[i] === arr[k]){
			arr = RemoveAt(arr, k)
		}
		i++
		k++
	}
	return arr
}

//////////// tests //////////////////
// console.log(RemoveDuplicatesFromSortedArray(arrSM))
// var arrDUP = [12,12,23,23,34,34]
// console.log(RemoveDuplicatesFromSortedArray(arrDUP))
//////////////////////////////////////

////////////////////////////////////////////////////////
///// find min and shift to the front of the array /////

function MinToFront(arr){
	var minPosition = 0
	var min = arr[0]
	for(var i = 1; i < arr.length; i ++){
		if(arr[i] < min){
			min = arr[i];
			minPosition = i;
		}
	}
	for(var x = minPosition; x > 0; x--){
		arr[x] = arr[x-1];
	}
	arr[0] = min;
	return arr
}
//////////// tests //////////////////
// console.log('min to front');
// console.log(MinToFront(arrMD))
//////////////////////////////////////

///////////////////////////////////////////////////////////////////
////////// Alter array to reverse all values in place /////////////

function ReverseArray(arr){
	var middle = Math.floor(arr.length/2);
	for(var i = 0; i < middle; i++){
		var temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	}
	return arr
}

//////////// tests //////////////////
// console.log(ReverseArray(arrSM))
//////////////////////////////////////

/////////////////////////////////////////////////////////////////
//////// takes array and offset to shift array's values /////////
////////////////// to the right by that amount /////////////////
function RotateArray(arr, shiftBy){
	var x = shiftBy;
	while(x > 0){
		var temp = arr[arr.length-1]
		for(var i = arr.length-1; i > 0; i--){
			arr[i] = arr[i-1];
		}
		arr[0] = temp;
		x--
	}
	return arr
}

//////////// tests //////////////////
// console.log(arrSM)
// console.log(RotateArray(arrSM, 2))
//////////////////////////////////////

////// FilterRange is taking a min and a max number and removing ////
/////// any number that falls outside of that range ////////////////

function FilterRange(arr, min, max){
	for(var i = 0; i < arr.length; i ++){
		if(arr[i] < min || arr[i] > max){
			arr = RemoveAt(arr, i)
			i = i-1
		}
	}
	return arr
}

//////////// tests //////////////////
// console.log('FilterRange')
// console.log(FilterRange(arrLG, 10, 25))
//////////////////////////////////////

//////////////////////////////////////////////////////////////////
///// Takes in two arrays and returns a new array containing /////
/////// the first array's elements then the second array ////////
function ConcactArray(arr1, arr2){
	var newArray = arr1;
	for(var i = 0; i < arr2.length; i++){
		newArray.push(arr2[i]);
	}
	return newArray;
}
//////////// tests //////////////////
// console.log('ConcactArray');
// console.log(ConcactArray(arrSM, arrMD));
//////////////////////////////////////

////////////////////////// Skyline Heights ////////////////////////////////////
///// given an array of heights of consecutive buildings in your view, ////////
///// return the array with the heights of each building you can see //////////
///// ex: [-1,3,5,4,7] ---> [3,5,7] since -1 is below your view and 4 is //////
///// after 5 you would only be able to see buildings [3,5,7]. ////////////////
///////////////////////////////////////////////////////////////////////////////

function SkylineHeights(arr){
	var minHeight = 0;
	var visibleBuldingArr = [];
	for(var i = 0; i < arr.length; i ++){
		if(arr[i] > minHeight){
			visibleBuldingArr.push(arr[i]);
		} 
	}
	return visibleBuldingArr;
}

////////////////////////////////////////////////////////////////////////////////
////////// Remove all negaitve values & keep arr in order. No new Arr //////////
////////////////////////////////////////////////////////////////////////////////

function RemoveNegatives(arr){
	var countOfNegatives = 0;
	var i = 0;
	var k = 0;
	while(k < arr.length){
		if(arr[k] < 0){
			countOfNegatives ++ ;
			k++;
		} else {
			arr[i] = arr[k];
			i++
			k++
		}
	}
	while(countOfNegatives > 0){
		arr.pop();
		countOfNegatives --
	}
	return arr
}
//////////// tests //////////////////
// var NegArr = [-1,12,3,-2,-6,-10]
// console.log('RemoveNegatives')
// console.log(RemoveNegatives(NegArr))
//////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////
////////// return the element that is Nth away from the end of the array ////////////
/////////////////////////////////////////////////////////////////////////////////////

function NthToLast(arr, n){
	if(arr.length < n){
		return null
	} else {
		return arr[arr.length-n]
	}
}
//////////// tests //////////////////
// console.log(arrLG)
// console.log(NthToLast(arrLG, 5))
//////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
////////// Return the Nth-largest element  where (N-1) elements are larger ///////////////
//////////////////////////////////////////////////////////////////////////////////////////

function NthLargest(arr, n){
	var max = 0;
	var Nlargest = arr[0];
	var count = 0;
	if(arr.length < n){
		return null
	} else {
		for(var i = 1; i < arr.length; i++){
			if(count == n){
				if(arr[i] > Nlargest){
					Nlargest = arr[i];
				}
			} else {
				if(arr[i] > Nlargest){
					count ++
				} else {
					Nlargest = arr[i];
				}
			}
		}
	}
	return Nlargest
}
//////////// tests //////////////////
// console.log('NthLargest')
// console.log(NthLargest(arrMD, 2))
//////////////////////////////////////

////////////////////////////////// Credit Card Validation ///////////////////////////////////////////
////////// Also known as the Luhn formula. Accepts an array of digits on the car (0-9) //////////////
////////// with the length of the array between 13-19 characters depending on the card. /////////////
//////////////////// returns a boolean based on meeting the following requirements //////////////////
		// 1. set aside the last digit and do not include it in the calculations until step 5
		// 2. Starting from the back multiply the digits in odd positions by 2 (ex: last, third-last, ect.)
		// 3. if any results are larger than 9, subtract 9 from them
		// 4. add all the numbers in the array together
		// 5. now add the last digit back in & the sum should be a multiple of 10. return true or false.
////////////////////////////////////////////////////////////////////////////////////////////////////////



function CreditCardValidation(arr){
	var sum = 0;
	var oddCount = 1;
	if(arr.length > 19 || arr.length < 13){
		return false
	} 
	var lastNumber = arr[arr.length-1];
	arr.pop()
	for(var i = arr.length-1; i >= 0; i--){
		if(oddCount % 2 == 1){
			arr[i] += arr[i];
			if(arr[i] > 9){
				arr[i] = arr[i]-9;
			}
			sum += arr[i];
		} else {
			sum += arr[i];
		}
		oddCount++;
	}
	var finalNumber = sum + lastNumber
	console.log(arr)
	console.log('this is the final number', finalNumber)
	if(finalNumber % 10 == 0){	
		return true
	}
	return false
}
//////////// tests //////////////////
//////////// tests //////////////////
// var cardArray = [4,4,0,0,6,6,9,1,3,9,4,6,6,9,4,0]
// console.log(CreditCardValidation(cardArray))
//////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////
////////// randomizes an array by hitting each index and swapping it  ///////////////
////////// with a random position in the array.	/////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function ShuffleArray(arr){
	for(var i = 0; i < arr.length; i ++){
		var randomNum = Math.floor(Math.random() * (arr.length - 0)) + 0;
		var temp = arr[i];
		arr[i] = arr[randomNum];
		arr[randomNum] = temp;
	}
	return arr
}
//////////// tests //////////////////
// console.log('ShuffleArray')
// console.log(ShuffleArray(arrMD))
//////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////
/////// removing each element in the array that falls outsite the range /////////////
/////// of the start and end parameters given. ////////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////////////

function removeIndicesRange(arr, start, end){
	var count = 0;
	for(var i = start; i <= end; i++){
		if(i >= start && i <= end){
			console.log('within range')
			arr[count] = arr[i];
			count ++
		} else {
			console.log("outside range")
		}

	}
	for(var x = arr.length-1; x > count-1; x--){
		console.log("popping");
		arr.pop();
	}
	return arr
}
//////////// tests //////////////////
// console.log('removeIndicesRange');
// console.log(removeIndicesRange(arrLG, 1, 2))
////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
//// after every 10th element in the array provide the sum of those 10 //////
///// elements. If the array length is not equally divisible by 10, add /////
///// the sum of the remaining elements. ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


function intermediateSum(arr){
	var sum = arr[0];
	var increaseModulus = 9
	for(var i = 1; i < arr.length; i++){
		sum += arr[i];
		console.log(sum);
		if(i % increaseModulus == 0 || i == arr.length-1){
			console.log('hitting the 10th position')
			arr = insertAt(arr, (i+1), sum);
			sum = 0;
			i += 1;
			increaseModulus += 1
		}
	}
	return arr;
}
//////////// tests //////////////////
// var sumArr = [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2]
// var sumArr = [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2]
// console.log(intermediateSum(sumArr))
////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////
/// duplicate all elements in the array keeping elements in their original order ////
/////////////////////////////////////////////////////////////////////////////////////

function DoubleTrouble(arr){
	for(var i = 0; i < arr.length; i+=2){
		arr = insertAt(arr, i, arr[i]);
	}
	return arr;
}
//////////// tests //////////////////
// console.log('DoubleTrouble')
// console.log(DoubleTrouble(arrSM))
/////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
//// take in two arrays and combine their elements sequentially into a new arr ///
/////////////////////////////////////////////////////////////////////////////////

function ZipIt(arr1, arr2){
	var i = 0;
	var zippedArr = [];
	while(i < arr1.length || i < arr2.length){
		if(arr1[i]){
			zippedArr.push(arr1[i]);
		}
		if(arr2[i]){
			zippedArr.push(arr2[i]);
		}
		i++
	}

	return zippedArr;
}

//////////// tests //////////////////
// var arr0 = [0,2,4,6];
// var arr9 = [1,3,5,7];
// console.log('ZipIt');
// console.log(ZipIt(arr0, arr9))
///////////////////////////////////////


////////////////////////////////////////////////////////////////////////////
//// determine wether or not a game of tic tac toe has a winner or not ////
//////////////////////////////////////////////////////////////////////////

 function TicTacToeWinner(arr){
 	for(var i = 0; i < arr.length; i++){
 		// horizontal win
 		if(arr[i][0] == arr[i][1] && arr[i][0] == arr[i][2]){
 			return true;
 		}
 		// vertical win //
 		if(arr[0][i] == arr[1][i] && arr[0][0] == arr[2][i]){
 			return true;
 		}
 	}
 	// diagonal win //
	if(arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2]){
		return true;
	} else if(arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0]){
		return true;
	}
 	return false	
 }

// var TTTBoardFalse = [
// 	[2,2,1],
// 	[1,1,2],
// 	[2,1,1]
// 	]
// var TTTBoardTrue = [
// 	[1,2,2],
// 	[1,1,2],
// 	[2,1,1]
// 	]
// console.log('TicTacToeWinner')
// console.log(TicTacToeWinner(TTTBoardTrue))



