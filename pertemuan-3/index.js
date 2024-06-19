// IIFE & Callback Function

BMI = berat / (tinggi * tinggi)
function calculateBMI(berat, tinggi){
    let bmi = berat / (tinggi * tinggi)
    let classification;
    if (bmi < 18.5) {
        classification = 'Underweight'
    } else if(bmi >= 18.5 && bmi < 24.9){
        classification = 'Normal Range'
    } else if (bmi >= 25){
        classification = 'Overweight'
    } else if (bmi > 25 && bmi <= 29.9){
        classification = 'Pre obese'
    } else {
        classification = 'Obese'
    }
    return classification
}

let output = calculateBMI(90, 1.7)
console.log('Clasifikasi BMI anda adalah ' + output)


//IIFE (Immediately Invoked Function Expression)
// No params and arguments
(function (){
    console.log("Hello IIFE")
})()
// With params and arguments
(function (name){
    console.log("Hello " + name)
})('John')

//Callback function
//No params and arguments
// function sayHello(callback){
//     callback()
// }

// sayHello(function (){
//     console.log('Hello')
// })

//With params and arguments and return value
function sayHello(callback){
    let output = callback('John')
    console.log(output)
}

sayHello(function (name){
   return 'Hello ' + name
})