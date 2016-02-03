// palidrome #1 2 options:
var palidrome = function(string){
    var zebra = ['z', 'e', 'b', 'r', 'a'];//set demo array
    for (var i=0; i <5; i++){
        console.log(zebra[i]);//log front
    }
    console.log(zebra);
    
    for (var j=0; j>=0; j--){
        console.log(zebra[j]);//log back
    } 
}

var palindrome2 = function(string){
	var backwardsArray = []; //
	for(var i = 0; i < string.length; i++){ //loop over string
		backwardsArray.push(string.charAt((string.length-1) - i)); //work backwards push into a new array	
	}
	var reverse = backwardsArray.join(''); //join array back
	if(string === reverse){  //compare
		return true
	} else {
		return false
	}
}
console.log(palindrome2('zebra'))


//inset das #2
var dashInsert = function(num){
	var numerals = (""+num).split("")
	console.log(numerals)
	for(var i = 0; i < numerals.length-1; i++){
		if(numerals[i] %2 !== 0 && numerals[i+1] %2 !== 0) {
			i++
			numerals.splice(i, 0,'-')
		} 
	}
	return numerals.join('')
}
console.log(dashInsert(454793))

