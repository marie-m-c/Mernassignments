const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // undefined
console.log(otherName); // Elon

// Wrong prediction : console.log(name); throw an Error and stopped the script

