const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // first = 2
const [,,,second] = numbers; // second = 5
const [,,,,,,,,third] = numbers; // third = 2
//Predict the output
console.log(first == second); // false
console.log(first == third); // true

