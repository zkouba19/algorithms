////////////////////////////////////////////////////////
///////////////////// Strings //////////////////////////
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

// var string = "I Am Always Hungry"
// console.log(RemoveBlanks(string));


function StringGetDigits(str){
	var DigitString = ""
	for(var i = 0; i < str.length; i++){
		if(Number(str[i])){
			DigitString += str[i];
		}
	}
	return Number(DigitString);
}

// var S = "hi12for4three3";
// console.log(StringGetDigits(S))

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
// console.log('Acronyms');
// console.log(Acronyms("there is no free lunch - gotta pay your way"))

function CountNonSpaces(str){
	var countNonSpaces = 0;
	for(var i = 0; i < str.length; i++){
		if(str[i] != " "){
			countNonSpaces++
		}
	}
	return countNonSpaces
}
// console.log("countNonSpaces")
// console.log(CountNonSpaces("there is no free lunch - gotta pay your way"))

//// given an array of strings and a minimum length ////
//// remove any strings that are shorter than min length//

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

// var arrSting = ['dude', 'bro', 'brodude', 'somethingcool', 'idk', 'chye']
// console.log('RemoveShortStrings');
// console.log(RemoveShortStrings(arrSting, 4))
// console.log(RemoveShortStrings(arrSting, 5))


function reverseString(str){
	var reversedStr = ""
	for(var i = 0; i < str.length; i++){
		reversedStr = str[i] + reversedStr
	}
	return reversedStr
}

// var revStr = "i like food"
// console.log('reverseString');
// console.log(reverseString(revStr))

// function IntegerToRomanNum(num){
// 	var RomanNumeral = ""
// 	while(num > 0){
// 		if(num >= 1000){
// 			num = num - 1000
// 			RomanNumeral += "M"			
// 		} else if(num < 1000 && num >= 900){
// 			num = num - 900
// 			RomanNumeral += "IM"	
// 		} else if(num < 1000 && num >= 800){
// 			num = num - 800
// 			RomanNumeral += "IIM"
// 		} else if(num >= 500){
// 			num = num -
// 			RomanNumeral += "D"
// 		} else if(num >= 100){
// 			num = num -
// 			RomanNumeral += "C"
// 		} else if(num >= 50){
// 			num = num -
// 			RomanNumeral += "L"
// 		} else if(num >= 10){
// 			num = num -
// 			RomanNumeral += "X"
// 		} else if(num >= 5){
// 			num = num -
// 			RomanNumeral += "V"
// 		} else if(num >= 1){
// 			num = num -
// 			RomanNumeral += "I"
// 		}
// 	}
// }


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

// console.log("BracesValid")
// console.log(BracesValid("{}hcudibv{d(k)je}ceicbdjk"));
// console.log(BracesValid("{}hcudibvdkje}ceicbdjk"));


function IsPalindrone(str){
	for(var i = 0; i < Math.floor(str.length/2); i++){
		if(str[i] != str[str.length-i-1]){
			console.log('failing at: '+i)
			return false;
		}
	}
	return true
}
// console.log("IsPalindrone");
// console.log(IsPalindrone('racecar'));
// console.log(IsPalindrone('racecars'));

// function RemoveLeadinTrailingSpaces(str){
// 	var newStr = "";
// 	var firstCharHit = false;
// 	var lastCharHit = false;
// 	while(firstCharHit == false || lastCharHit == false)
// }

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

var sf = ["caution", "attention", "retention"]
console.log(CommonSuffix(sf))


