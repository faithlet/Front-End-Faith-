//JavaScript EcmaScript (ES)6

//1. Let & Const

// Penggunaan const pada array dan object
// const number = [1, 2, 3, 4, 5];
// number[4] = 10;
// console.log(number);

// const john = {
//     name: "John Doe",
//     age: 30,
//     isActive: true,
// };
// john.age = 31;
// console.log(john);

// //2. String Literal
// const john = {
//     name: "John Doe",
//     age: 30,
//     isActive: true,
// };
//Hi, nama saya john doe. umur saya 30 tahun
// let string5= "Hi, nama saya " + john.name + ". Umur saya " + john.age  + " tahun.";
// console.log(string5);

// let string6 = `Hi, nama saya ${john.name}. Umur saya ${john.age} tahun.`
// console.log(string6);

//3. arrow function
// function greetings() {
//     return `Hello World`;
// }
// const greetings6 = () => {
//     return `Hello World`;
// };

//Implicit return balue
// const greetings6 = (name) => `hello ${name}`;

// penggunaan arrow function pada callback function
// let numbers = [1, 2, 3, 4, 5];
// let output = numbers.map((item) => item * 5);

//4. default parameter
const greetings = (name = "john", age = 30) =>
 `Hi, nama saya ${john.name}. Umur saya ${john.age} tahun.`;

console.log(greetings());