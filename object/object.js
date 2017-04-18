///////////////// associated arrays (objects) /////////////////////////////
///////////////////////////////////////////////////////////////////////////

/////////////// take two arrays and convert into an object ///////////////
/////////////// where first array are keys and second values ///////////////
function ZipIntoMap(keyArr, valueArr){
	if(keyArr.length != valueArr.length){
		return null
	} 
	var ZipObj = {};
	for(var i = 0; i < keyArr.length; i++){
		ZipObj[keyArr[i]] = valueArr[i];
	}
	return ZipObj;
}
console.log("ZipIntoMap")
// console.log(ZipIntoMap([1,2,3,4], ["a","b","c","d"]));

var dictionary = {"1": "A", "2": "B", "3": "C"}
function InvertHash(Obj){
	var InvertH = {};
	for(key in Obj){
		InvertH[Obj[key]] = key
	}
	return InvertH;
}
// console.log("InvertHash")
// console.log(dictionary)
// console.log(InvertHash(dictionary))

function ObjectLength(Obj){
	var count = 0;
	for(key in Obj){
		count ++
	}
	return count
}
// console.log("ObjectLength");
// console.log(ObjectLength(dictionary));