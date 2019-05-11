let email = 'abc'

let password = '123'

// console.log(password.length)

// console.log(email.toUpperCase())
// console.log(email.trim())

let userChecker = function(string) {
	if((string.includes(123)) && (string.length > 6)) {
		return true
	} 
	
	return false
}

let passChecker = function(pass) {
	if ((pass.includes(123)) && (pass.length > 6)) {
		return true
	}

	return false
}


console.log(passChecker(password));





