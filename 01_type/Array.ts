const person = {
	name: "josh",
	age: 32,
    hobbies:['Sports','Cooking']
};

let favoriteActivities: string[];
favoriteActivities=['Sports']

console.log(person.name);

for (const hobby of person.hobbies){
	console.log(hobby.toLocaleUpperCase());
	// console.log(hobby.map()); //error
	
}