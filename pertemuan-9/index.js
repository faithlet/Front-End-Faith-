//JavaScript EcmaScript (ES)6

//1. Let & Const

// Penggunaan const pada array dan object
// const number = [1, 2, 3, 4, 5];
// number[2] = 10;
// console.log(number);

// const john = {
//   name: "John Doe",
//   age: 30,
//   isActive: true,
// };
// john.age = 31;
// console.log(john);

//2. String literal
// const john = {
//   name: "John Doe",
//   age: 30,
//   isActive: true,
// };
//Hi, nama saya John Doe. Umur saya 30 tahun
// let string5 =
//   "Hi, nama saya " + john.name + ". Umur saya " + john.age + " tahun";
// console.log(string5);

// let string6 = `Hi, nama saya ${john.name}. Umur saya ${john.age} tahun.`;
// console.log(string6);

//3. Arrow Function

// function greetings5(name) {
//   return `Hello ${name}}`;
// }

//Deklarasi arrow function
// const greetings6 = (name) => {
//   return `Hello ${name}`;
// };

//Implicit return value
// const greetings6 = (name) => `Hello ${name}`;

//Penggunaan Arrow function pada callback function
// let numbers = [1, 2, 3, 4, 5];
// let output = numbers.map((item) => item * 5);

//4. Default parameter
const greetings = (name = "John", age = 30) =>
  `Hi, nama saya ${name}. Umur saya ${age} tahun.`;

console.log(greetings());