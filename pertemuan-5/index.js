const students = [
    {
        id: 1,
        name: 'John',
        isActive: true,
        grade:100
    },
    {
        id: 2,
        name: 'Bob',
        isActive: true,
        grade:200
    },
    {
        id: 3,
        name: 'Marley',
        isActive: true,
        grade:300
    },
];
//menampilkan elemen array semuanya
// console.log(students);
// //menampilkan elemen array item by item
// for(let i=0; i<students.length; i++){
//     console.log(students[i]);
// }

//array built-in method
//1. forEach()
// students.forEach(function(item){
//     console.log(item)
// });

//2. ArrayMap()
// let output = students.map(function(item){
//     return item;
// });
// console.log(students);
// console.log(output);

// const array1 = [1, 4, 9, 16];
// const map1 = array1.map(function(item){
//     return item*2;
// });
// console.log(array1);
// console.log(map1);

//filter()
let filteredStudent = students.filter(function(item){
    return item.isActive === true;
});
console.log(filteredStudent);

//find
let findStudent = students.find(function(item){
    return item.isActive === true;
});
console.log(findStudent);