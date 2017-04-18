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

// console.log(insertAt(arrSM,2,21))
////////////////////////////////////////////////////////////
//////////// remove item at specific position //////////////

function RemoveAt(arr, pos){
	for(var i = pos; i < arr.length-1; i++){
		arr[i] = arr[i+1]
	}
	arr.pop();
	return arr
}

// console.log(RemoveAt(arrMD, 3))



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

// console.log(RemoveDuplicatesFromSortedArray(arrSM))
// var arrDUP = [12,12,23,23,34,34]
// console.log(RemoveDuplicatesFromSortedArray(arrDUP))

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
// console.log('min to front');
// console.log(MinToFront(arrMD))

function ReverseArray(arr){
	var middle = Math.floor(arr.length/2);
	for(var i = 0; i < middle; i++){
		var temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	}
	return arr
}

// console.log(ReverseArray(arrSM))

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

// console.log(arrSM)
// console.log(RotateArray(arrSM, 2))


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

// console.log('FilterRange')
// console.log(FilterRange(arrLG, 10, 25))


function ConcactArray(arr1, arr2){
	var newArray = arr1;
	for(var i = 0; i < arr2.length; i++){
		newArray.push(arr2[i]);
	}
	return newArray;
}
// console.log('ConcactArray');
// console.log(ConcactArray(arrSM, arrMD));

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
// var NegArr = [-1,12,3,-2,-6,-10]
// console.log('RemoveNegatives')
// console.log(RemoveNegatives(NegArr))

function NthToLast(arr, n){
	if(arr.length < n){
		return null
	} else {
		return arr[arr.length-n]
	}
}
// console.log(arrLG)
// console.log(NthToLast(arrLG, 5))

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
console.log('NthLargest')
console.log(NthLargest(arrMD, 2))

function CreditCardValidation(arr){
	var sum = 0;
	if(arr.length > 19 || arr.length < 13){
		return false
	} 
	var lastNumber = arr[arr.length-1];
	arr.pop()
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > 9){
			return false
		}
		if(i % 2 == 1){
			arr[i] += arr[i];
			if(arr[i] > 9){
				arr[i] = arr[i]-9
			}
			sum += arr[i]+arr[i-1]
		}
	}
	var finalNumber = sum + lastNumber
	console.log(arr)
	console.log('this is the final number', finalNumber)
	if(finalNumber % 10 == 0){	
		return true
	}
	return false
}
// var cardArray = [4,4,0,0,6,6,9,1,3,9,4,6,6,9,4,0]
// console.log(CreditCardValidation(cardArray))

function ShuffleArray(arr){
	for(var i = 0; i < arr.length; i ++){
		var randomNum = Math.floor(Math.random() * (arr.length - 0)) + 0;
		var temp = arr[i];
		arr[i] = arr[randomNum];
		arr[randomNum] = temp;
	}
	return arr
}
// console.log('ShuffleArray')
// console.log(ShuffleArray(arrMD))

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

// console.log('removeIndicesRange');
// console.log(removeIndicesRange(arrLG, 1, 2))

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

// var sumArr = [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2]
// var sumArr = [1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2]
// console.log(intermediateSum(sumArr))

//////////// duplicate all elements in the array /////////
//////////// keeping elements in their original order /////

function DoubleTrouble(arr){
	for(var i = 0; i < arr.length; i+=2){
		arr = insertAt(arr, i, arr[i]);
	}
	return arr;
}

// console.log('DoubleTrouble')
// console.log(DoubleTrouble(arrSM))

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
// var arr0 = [0,2,4,6];
// var arr9 = [1,3,5,7];
// console.log('ZipIt');
// console.log(ZipIt(arr0, arr9))



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
