const change = document.querySelectorAll('p');

change.forEach(function (p) {
	// console.log(index, p);
	p.textContent = 'ok';
	document.write('fine')
})



const newElement = document.createElement('p')
newElement.textContent = 'i am new one!'
document.querySelector('body').appendChild(newElement)

const btn = document.querySelector('button');
// console.log(btn)

btn.addEventListener('click', function (event) {
	event.target.textContent = 'somebody clicked me!'
	console.log(event.target.textContent);
});

// form validation

const form = document.querySelector('#myForm');

form.addEventListener('input', function(event){
	console.log(event.target.value);
})

// console.log(form)

// form validation

document.querySelector('.myForm').addEventListener('submit', (event)=> {
	event.preventDefault();
	var usernameValue = event.target.username.value;
	var realnameValue = event.target.realname.value;
	console.log(usernameValue);
	console.log(realnameValue);
	// event.target.username.value = '';
	event.target.username.value = '';
	event.target.realname.value = '';
	document.querySelector('.uname').textContent = usernameValue;
});
