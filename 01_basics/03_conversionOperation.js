// let score = "33abc"; // Nan (not a number)
// let score = null; // 0
// let score = undefined;// Nan
let score = true;
// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
//  "33abc" => Nan
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "zainab" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
