let myTodo = {
	monday: 'you will have to go to bank',
	tuesday: 'on tuesday is your ll test ..!',
	day: 'Monday',
	meetings: 0,
	meetDone: 0
}

let addMeeting = function(todo, meet = 0) {
	todo.meetings = todo.meetings + meet
}

// console.log(addMeeting(myTodo, 2));

let meetDone = function(todo, meet = 0) {
	todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo) {
	todo.meetings = 0
	todo.meetDone = 0
}

let getSummaryOfDay = function(todo) {
	let MeetingLeft = todo.meetings + todo.meetDone
	return `you have ${MeetingLeft} meeting today!`
}


addMeeting(myTodo, 4)


addMeeting(myTodo, 2)

meetDone(myTodo, 5)

// resetDay(myTodo)


console.log(getSummaryOfDay(myTodo))

// console.log(myTodo)

