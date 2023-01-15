const userName = "josh";

console.log(userName);

// function add(n1:number,n2:number){
//     if(n1+n2>0){
//         return n1+n2
//     }
//     // return;
// }

function clickHandler(message: string){
    console.log('Clicked!' + message);
    // const userName="josh";
}

// const button = document.querySelector('button')!;
const button = document.querySelector("button");
if (button) {
	button.addEventListener("click", clickHandler.bind(null,"You're welcome!"));
}

//this is a comment
