const fname = "Tanmay"
const lname = "Mondal"
// bactrics use insted of concatination operator +
console.log(`My name id ${fname} ${lname}`);

// String object declacation
const gameName = new String(`pubg-mobile-game`)
console.log(typeof gameName);
console.log(gameName.__proto__);
console.log(`Length of the string is ${gameName.length}`);
console.log(`String on 0th posithon ${gameName[0]}`);
// different functions based on string in javascript-------------------
console.log(gameName.charAt(1));
console.log(`Index of 'p' in the string is ${gameName.indexOf('p')}`);
console.log(`string to array based on seperator '-' ${gameName.split('-')}`);
console.log(gameName.substring(0,4));
console.log(gameName.substring(-8,4))
console.log("   Tanmay    ".trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh')) //  searche substring inside a string
console.log(gameName.bold())
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())