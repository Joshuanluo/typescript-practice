const userName = "josh";
// userName = "joshua"
let age1 = 30;
age1 = 20;

function add(a: number, b: number) {
	var result;
	result = a + b;
	return result;
}

// console.log(result); //error

const addition = (a: number, b: number = 111) => a + b;

const printOut :(a:number|string) => void = output => console.log(output);
printOut(addition(5));

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => console.log(event))
}

const hobbies = ['Sports','Cooking'];
const activeHobbies = ['Hiking',...hobbies];
activeHobbies.push(...hobbies);

const person={
    firstName:'josh',
    age:30
}
const  copiedPerson = {...person};

const add1=(...numbers:number[])=>{
    
    return numbers.reduce((curResult, curValue)=>{
        return curResult+curValue;
    })
}
const addNumbers= add1(5,10,2,3.7);
console.log(addNumbers);

const [hobby1,hobby2,...remainingHobbies] = hobbies;

console.log(hobbies,hobby1,hobby2,remainingHobbies);

const {firstName:lastName, age} =person;
console.log(lastName,age,person);
