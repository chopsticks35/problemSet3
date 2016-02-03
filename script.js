// palidrome #1 2 options:

var palidrome = function(string){
    var zebra = {'z', 'e', 'b', 'r', 'a'};//set demo array
    for (var i=0; i <5; i++){
        console.log(zebra[i]);//log front
    }
    console.log(zebra);
    
    for (var j=0; j>=0; j--){
        comsole.log(zebra[j]);//log back
    } 
}

function palindrome2(string){
	var backwardsArray = []; //
	for(var i = 0; i < string.length; i++){ //loop over string
		backwardsArray.push(string.charAt((string.length-1) - i)); //work backwards pushing into a new array	
	}
	var reverse = backwards.join(''); //join array back
	if(string === reverse){  //compare
		return true
	} else {
		return false
	}
}
console.log(palindrome2('zebra'))


