enum Role {
	ADMIN = "ADMIN",
	READ_ONLY = 100,
	AUTHOR = 500,
}
const person = {
	name: "josh",
	age: 32,
	hobbies: ["Sports", "Cooking"],
	role: Role.ADMIN,
};

console.log(person.name);

if (person.role === Role.AUTHOR) {
	console.log("THIS IS AUTHOR");
}
