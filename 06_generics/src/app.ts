// // const names = ["Max", "josh"];
// const names: Array<string> = [];
// names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(10);
// 	}, 2000);
// });

// promise.then(data=>{
//     // data.split(' ')
// })

function merge<T extends object, U extends object>(objA: U, objB: T) {
	return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "josh", hobbies: ["Sports"] }, { age: 18 });

console.log(mergeObj);

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = "Got no value.";
	if (element.length === 1) {
		descriptionText = "Got 1 element.";
	} else if (element.length > 1) {
		descriptionText = "Got " + element.length + " elements.";
	}
	return [element, descriptionText];
}

console.log(countAndDescribe("Hi, there"));
console.log(countAndDescribe(["Hi", "there"]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
	return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Max" }, "name"));

class DataStorage<T extends string | number| boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}
	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}
	getItem() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Josh");
textStorage.addItem("Max");
textStorage.removeItem("Max");

console.log(textStorage.getItem());

const numberStorage = new DataStorage<number>();
// const objectStorage = new DataStorage<object>();
// const joshObj = {name: 'josh'}
// objectStorage.addItem(joshObj);
// objectStorage.addItem({ name: "Max" });
// console.log(objectStorage.getItem());
// objectStorage.removeItem(joshObj);

// console.log(objectStorage.getItem());
