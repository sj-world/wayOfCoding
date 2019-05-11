let getMygrade = function(currentMarks = Number, totalMarks = Number) {
let myPercentage = (currentMarks/totalMarks) * 100;

	let myGrade = '';

	if(myPercentage >= 90) {
		myGrade = 'A';
		
	} else if(myPercentage >= 80) {
		myGrade = 'B';
	
	} else if(myPercentage >= 70) {
		myGrade = 'C';
	
	} else if(myPercentage >= 60) {
		myGrade = 'D';
	
	} else if (myPercentage < 60) {
		myGrade = 'F';

	}
	
	else if(currentMarks === Number && totalMarks === Number) {
		myGrade = 'notDefine';
		myPercentage = null;

	} 
	else if (currentMarks !== Number || totalMarks !== Number) {
		
		return 'String value is not allowed!';

	} 
	else {
		return 'i don\'t understant!';
	}
	
	return `Your grade is: ${myGrade} and percentage is ${myPercentage}`

} 

let yourResult = getMygrade(1,100);

console.log(yourResult);




