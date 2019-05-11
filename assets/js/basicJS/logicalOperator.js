let isUserVerified = false;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;

if(isUserVerified && isLoggedIn && hasPaymentToken) {
	console.log("you can come inside !");
	console.log("Grant access to paid course");
} else if(isUserVerified || isGuest) {
	console.log("Alowed only free courses!");
} else {
	console.log("please contact admin");
}



