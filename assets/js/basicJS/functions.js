
let name = function(name) {
	console.log(`my name is ${name}`);
	console.log(`Greetings ${name}`);
}

let fullNameMaker = function(firstName, lastName) {
	console.log(`happy to meet you mr. ${firstName} ${lastName}`);
}

// fullNameMaker('sam', 'jain');

let address = function(address) {
	console.log(`my address is ${address}`);
}

// address('76/161')

let added = function(num1, num2) {
	const adder = num1 + num2;
	return adder;
}

// console.log(added(1,4));

let myMulti = function(num1, num2) {
	// let multiplyer = num1 * num2;
	return num1 * num2;
}

// let mult = myMulti(3,3);
// console.log(myMulti(2,4));

let guestUSer = function(name = 'unName', courseCount = 0) {
	return 'Hello ' + name + ' and your course count is: ' + courseCount;
}

console.log(guestUSer('john', 1));




