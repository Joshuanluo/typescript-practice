function add(n1: number, n2: number) {
	return n1 + n2;
}

function printResult(num: number): void {
	console.log("Result: " + num);
}

console.log(printResult(add(5, 12)));  

// let combineValues: Function;
let combineValues: (a:number, b:number)=> number;

combineValues = add;
// combineValues=5; //error
// combineValues=printResult;// error

console.log(combineValues(8,8));