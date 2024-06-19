// // Array Exercises
let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.forEach(person => {
    console.log(person);
});

people.shift();
people.pop();
people.unshift("Matt");

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

let peopleCopy = people.slice(2);

people = ["Matt", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
people.push("Your Name");

people = people.filter(person => person !== "James");

let withBob = people.concat("Bob");
console.log(withBob); 


//Object Exercises
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");
programming["difficulty"] = 7;
delete programming.jokes;
programming.isFun = true;
let updatedLanguages = programming.languages.map(function(language, index) {
    return index + " - " + language;
});
console.log(updatedLanguages);

