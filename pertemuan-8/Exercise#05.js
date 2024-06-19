// Ubahlah syntax ES5 berikut ke dalam ES6
// 1. let & const
// 2. String literal
// 3. Arrow Function
// 4. Default parameter

//1 
const calculateAge = (birthYear) => {
	return 2019 - birthYear;
};

const yearUntilRetirement = (object) => {
	const age = calculateAge(object.year);
	const retirement = 60 - age;

	if (retirement > 0) {
    	console.log(`${object.firstName} retires in ${retirement} years`);
	} else {
    	console.log(`${object.firstName} is already retired.`);
	}
};

yearUntilRetirement({year: 1987, firstName: 'John'});


//2.
const addNumber = (...numbers) => {
 	const numbers = [a, b, c, d, e, f, g];
 	let sum = 0;
    //Change to map function
    numbers.map(number => {
        sum += number;
    });
    return sum;
 };
 
console.log(addNumber(1,2,3,4,5,6,7));


//3.
const phi = 3.14;
const power = 2;
let radius = 0;

const calculateArea = (obj) => {
    const { radius, power } = obj;
    return phi * Math.pow(radius, power);
  };

radius = 21;
const area21 = calculateArea({ radius, power });
  
radius = 7;
const area7 = calculateArea({ radius, power });
  
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
console.log(calculateArea(1, 2, 3, 4, 5, 6, 7));


// 4.
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(`${url}, ${method}`);
  };
  
  makeAjaxRequest('www.google.com');