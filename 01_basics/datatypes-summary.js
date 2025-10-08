// primitive   (call by value)

// 7 types : string, number, Boolean , null(mean empty) , undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null; // null ka type of object hi ata hai
let userEmail; // undefined    // undefined ka type of undefined ata hao

const id = Symbol("123");
const anotherid = Symbol("123");

console.log(id === anotherid);

const bigNumber = 67536862944295056n;

// Reference (non-primitive)
// array , object, functions

const heros = ["salman", "sharuk khann", "sidharth"];
let myObj = {
	name: "zainab",
	age: 22,
};

const myFunction = function () {
	console.log("hello world");
};

console.log(typeof bigNumber);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory
// Stack(primitive) , Heap(non-primitive)

let myYoutubeName = "food crave";

let anotherName = myYoutubeName;
anotherName = "chai or code";
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
	email: "user@gmail.com",
};

let userTwo = userOne;
userTwo.email = "hitesh@youtube.com";
console.log(userOne.email);
console.log(userTwo.email);
