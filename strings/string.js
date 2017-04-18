////////////////////////////////////////////////////////
///////////////////// Strings //////////////////////////
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
///////// remove all spaces from the string ////////////
////////////////////////////////////////////////////////

function RemoveBlanks(str){
	var tempStr = ""
	for(var i = 0; i < str.length; i++){
		if(str[i] != " "){
			tempStr += str[i];
		}
	}
	return tempStr;
}
//////////////// test ////////////////
// var string = "I Am Always Hungry"
// console.log(RemoveBlanks(string));
////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//// given string with numbers. return integer from numbers in the string  ////
///////////////////////////////////////////////////////////////////////////////

function StringGetDigits(str){
	var DigitString = ""
	for(var i = 0; i < str.length; i++){
		if(Number(str[i])){
			DigitString += str[i];
		}
	}
	return Number(DigitString);
}
////////// tests ///////////////
// var S = "hi12for4three3";
// console.log(StringGetDigits(S))
///////////////////////////////////

///////////////////////////////////////////////////////////////////////
///// create an acronym given a string with multiple words. ///////////
///// also include '-' & treat characters following '-' as a word. /////
///////////////////////////////////////////////////////////////////////////

function Acronyms(str){
	var acronymString = ""
	for(var i = 0; i < str.length; i++){
		if(i == 0 && str[i] != " "){
			acronymString += str[i];
		}
		if(str[i-1] === " " || str[i-1] === "-" && str[i] != " " && str[i] != "-"){
			console.log('adding1 ' + str[i])
			acronymString += str[i];
		} else if(str[i] == "-"){
			console.log('adding2 ' + str[i])
			acronymString += str[i];
		}
	}
	return acronymString.toUpperCase();
}

////////// tests //////////
// console.log('Acronyms');
// console.log(Acronyms("there is no free lunch - gotta pay your way"))
////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////
///// accept a string and return the number on no-space characters in the string /////
//////////////////////////////////////////////////////////////////////////////////////

function CountNonSpaces(str){
	var countNonSpaces = 0;
	for(var i = 0; i < str.length; i++){
		if(str[i] != " "){
			countNonSpaces++
		}
	}
	return countNonSpaces
}
//////// test //////////
// console.log("countNonSpaces")
// console.log(CountNonSpaces("there is no free lunch - gotta pay your way"))
/////////////////////////

////////////////////////////////////////////////////////////
//// given an array of strings and a minimum length ////////
//// remove any strings that are shorter than min length. //
////////////////////////////////////////////////////////////

function RemoveShortStrings(arrOfStrings, minLength){
	for(var i = 0; i < arrOfStrings.length; i++){
		if(arrOfStrings[i].length < minLength){
			for(var x = i; x < arrOfStrings.length; x++){
				arrOfStrings[x] = arrOfStrings[x+1];
			}
			arrOfStrings.pop()
		}
	}
	return arrOfStrings
}
////////// test //////////
// var arrSting = ['dude', 'bro', 'brodude', 'somethingcool', 'idk', 'chye']
// console.log('RemoveShortStrings');
// console.log(RemoveShortStrings(arrSting, 4))
// console.log(RemoveShortStrings(arrSting, 5))
/////////////////////////

//////////////////////////////////////////////////////////////////////
///// given a string. create a string wiht the reverse characters ////
//////////////////////////////////////////////////////////////////////

function reverseString(str){
	var reversedStr = ""
	for(var i = 0; i < str.length; i++){
		reversedStr = str[i] + reversedStr
	}
	return reversedStr
}
/////////////// test ///////////////
// var revStr = "i like food"
// console.log('reverseString');
// console.log(reverseString(revStr))
//////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
///// given a string, determine wether any braces in the string are properly closed /////
/////////////////////////////////////////////////////////////////////////////////////////

function BracesValid(str){
	var ValidBracesArray = [];
	for(var i = 0; i < str.length; i++){
		console.log('number of touches: '+i)
		if(str[i] == "["){
			ValidBracesArray.push(']')
		}
		if(str[i] == "{"){
			ValidBracesArray.push('}')
		}
		if(str[i] == "("){
			ValidBracesArray.push(')')
		}
		if(str[i] == "]" && str[i] == ValidBracesArray[ValidBracesArray.length-1]){
			ValidBracesArray.pop()
		} else if(str[i] == "]"){
			return false
		}
		if(str[i] == "}" && str[i] == ValidBracesArray[ValidBracesArray.length-1]){
			ValidBracesArray.pop()
		} else if(str[i] == "}"){
			return false
		}
		if(str[i] == ")" && str[i] == ValidBracesArray[ValidBracesArray.length-1]){
			ValidBracesArray.pop()
		} else if(str[i] == ")"){
			return false
		}
	}
	if(ValidBracesArray.length > 0){
		return false
	} 
	return true
}
////////// tests //////////
// console.log("BracesValid")
// console.log(BracesValid("{}hcudibv{d(k)je}ceicbdjk"));
// console.log(BracesValid("{}hcudibvdkje}ceicbdjk"));
///////////////////////////

/////////////////////////////////////////////////////////////////////////////////////
///// Given a string return wether or not the string is a palindrone. ///////////////
///// String is the same forwards as it is backwards. (ex: "racecar" --> true) //////
/////////////////////////////////////////////////////////////////////////////////////

function IsPalindrone(str){
	for(var i = 0; i < Math.floor(str.length/2); i++){
		if(str[i] != str[str.length-i-1]){
			console.log('failing at: '+i)
			return false;
		}
	}
	return true
}
////////// tests /////////
// console.log("IsPalindrone");
// console.log(IsPalindrone('racecar'));
// console.log(IsPalindrone('racecars'));
/////////////////////////

/////////////////////////////////////////////////////////////////////////////////
//// given an array of strings determine the longest possible common suffix. ////
/////////////////////////////////////////////////////////////////////////////////

function CommonSuffix(arrayStr){
	var suffixStr = "";
	var MatchinSuffix = true;
	var CharPos = 1;
	while(CharPos)
	for(var i = 0; i < arrayStr.length-1; i++){
		console.log(arrayStr[i][arrayStr[i].length-CharPos])
		if(arrayStr[i][arrayStr[i].length-CharPos] != arrayStr[i+1][arrayStr[i+1].length-CharPos] ){
			console.log('returning false')
			return suffixStr;
		} else {
			if(i == arrayStr.length-2){
				console.log('adding to str')
				suffixStr = arrayStr[i][arrayStr[i].length-CharPos] + suffixStr;
			}
		}
	}
	return suffixStr;
}
//////////// tests ////////////
// var sf = ["caution", "attention", "retention"]
// console.log(CommonSuffix(sf))
//////////////////////////////

