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

interface Lengthy{
    length:number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{
    let describptionText = 'Got no value.';
    if (element.length===1) {
        describptionText='Got 1 element.'
    } else if(element.length>1){
        describptionText = 'Got '+element.length+' elements.'
    }
    return [element,describptionText];
}

console.log(countAndDescribe("Hi, there"));
console.log(countAndDescribe(["Hi","there"]));
