const userName = "josh";
// userName = "joshua"
let age = 30;
age = 20;

function add(a: number, b: number) {
	var result;
	result = a + b;
	return result;
}

// console.log(result); //error

const addition = (a: number=111, b: number = 111) => a + b;

const printOut :(a:number|string) => void = output => console.log(output);
printOut(addition(5));

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => console.log(event))
}
