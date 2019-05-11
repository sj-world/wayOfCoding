// const sayHello = function(name){
// 	return 'hey there, ' + name + ' !'
// }

// console.log(sayHello('samio'));

const sayHello = (name) => `hi there ${name}`

// console.log(sayHello('samio'));

const todos = [{
	title: 'go to bank',
	isDone: true,
},{
	titiel: 'go to bath',
	isDone: true,
},{
	title: 'go to gym',
	isDone: false,
}]

const thingsDone = todos.filter((todo)=> todo.isDone === true)

// console.log(thingsDone)
// Assignment

const todo = [{
	title: 'first todo',
	isDone: false,
},{
	title: 'second todo',
	isDone: false,
},{
	title: 'third todo',
	isDone: false,
},{
	title: 'four todo',
	isDone: true,
},{
	title: 'five todo',
	isDone: true,
},{
	title: 'six todo',
	isDone: true
}]

// const notdone = todo.filter((name, index)=> {
// 	if(name.isDone === false) {
// 		console.log(`not done todo ${index + 1}: ${name.title}`)
// 	}
// })

// use of this method with arrow function

const cameras = {
	price: 600,
	weight: 2000,
	myDes: () =>  (`this Canon camera is of ${this.price}$`) 
	
}

console.log(cameras.myDes())
























