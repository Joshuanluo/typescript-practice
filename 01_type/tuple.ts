const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: "josh",
	age: 32,
	hobbies: ["Sports", "Cooking"],
	role: [2, "author"],
};

person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toLocaleUpperCase());
	// console.log(hobby.map()); //error
}
