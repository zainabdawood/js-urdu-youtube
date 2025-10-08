const name = "Zainab";
const repoCount = 50;

// console.log(name + repoCount + "value");  // outdated syntax
/////////////////////// NOT recommend///////////////////////

//////// String interpolation////////////
console.log(`hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String("hitesh-hc-com"); // string declare krnai ka tareqa
// console.log(gameName[0]); // keys
// console.log(gameName.__proto__);
// console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt("2")); // output=> t
console.log(gameName.indexOf("t")); // output=> 2

const newString = gameName.substring(0, 4); // -ve value ni dai skhtai
console.log(newString);

const anotherString = gameName.slice(-6, 4); // -ve value dai skhtai hai
console.log(anotherString);

const newStringOne = "    Zainab   ";
console.log(newStringOne);
console.log(newStringOne.trim()); /// spaces ko remove krdeta hai

const url = "https://hitesh.com/hitesh%20chaudhry";
console.log(url.replace("%20", "-"));

console.log(url.includes("zaianb"));
console.log(gameName.split("-"));
