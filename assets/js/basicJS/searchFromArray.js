const arr = ['Buy Bread', 'Go to gym', 'Record']

// console.log(arr.indexOf('Buy Bread'));

const newTodos = [{
	title: 'Buy Bread',
	isDone: false,
}, {
	title: 'Go to Gym',
	isDone: false,
}, {
	title: 'Record',
	isDone: false,
}]

// console.log(newTodos[0])

// let index = newTodos.findIndex(function(todo, index) {
// 	console.log(todo)
// 	return todo.title === 'Go to Gym'
// })
// console.log(index)

const findTodos = function(myTodos, title) {
	const index = myTodos.findIndex(function(todo, index){
		return todo.title.toLowerCase() === title.toLowerCase()
	})
	return myTodos[index]
}

let print = findTodos(newTodos, 'Go To Gym')

console.log(print)
