let myYouTubeVidieo = {
	title: 'Loops in javascript',
	videoLength: 15,
	author: 'samio',
	videoDescription: 'this is a video description!'
}

let myYouTubeVidieoTwo = {
	title: 'Loops in javascript',
	videoLength: 10,
	author: 'samio',
	videoDescription: 'this is a video description!'
}

// console.log(myYouTubeVidieo);

let getMyObj = function(object) {
	return {

		formatOne: `here is your object ${object.videoLength + 2}`,
		formatTwo: `here is your object ${object.videoLength + 5}`

	}
}

// getMyObj(myYouTubeVidieoTwo);

// console.log(getMyObj(myYouTubeVidieoTwo.formatOne));

let a =  getMyObj(myYouTubeVidieo);

// console.log(a.formatOne);

console.log(getMyObj(myYouTubeVidieo));


