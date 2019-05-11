//  All about arrays : - arrays are very useful for storing and removing data.

// const superHeroes = ['Iron man', 'Spider Man', 'Capt. America'];

// console.log(superHeroes[0]);

// console.log(superHeroes[superHeroes.length - 1]);


// console.log(`We have ${superHeroes[superHeroes.length - 1]} super heroes!`);




//  3 most important methods for arrays 

const numbers = ['one', 'two', 'three men were there', 'four', 'five', 'six'];

// Rule No. 1 :- Do operation at the start of array.

// 'shift' method remove the first element of the array
// 'unshift' method put a element to the first position of the array

// numbers.shift();
// numbers.unshift('oneAgain');

// Rule No. 2 :- Do operation at the end of array.

// 'pop' method remove the last element of the array
// 'push' method put a element to last position of the array

// numbers.pop();
// console.log(`the deleted elment is : ${numbers.push('sixAgain')}`);


// Rule No. 3 :- Do operation at the our choice of array.

numbers.splice(2,1, 'ok');


console.log(numbers);



