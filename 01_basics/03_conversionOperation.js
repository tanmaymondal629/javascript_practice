let score1 = 33
console.log(typeof score1)

let score2 = "33"
console.log(typeof(score2))

let valueInNumber = Number(score2) //datatype conversion from string to number
console.log(typeof(valueInNumber))

let score3 = "33abc"
let valueInNumber1 = Number(score3) //datatype conversion from string to number
console.log(typeof(valueInNumber1))
console.log(valueInNumber1) //NaN - Not a Number - datatype number
console.log(typeof(NaN)) // NaN to number = number
console.log("Number(null) value is : "+Number(null)) // Null to number = 0
console.log("Number(undefined) value is: "+Number(undefined)) // undefined to number = NaN
console.log("Number(true) value is: "+Number(true)) //boolean to number = 1
console.log("Number(false) value is: "+Number(false))//boolean to number = 0
console.log("Number('Tanmay') value is: "+Number("Tanmay"))//string to number = NaN
console.log("Boolean(1) value is: "+Boolean(1))//Number to Boolean = True
console.log("Boolean(0) value is: "+Boolean(0))//Number to Boolean = False
console.log("Boolean('') value is: "+Boolean(""))//Number to Boolean = False
console.log("String(33) value is: "+String(33)+", And the datatype is "+ typeof String(33))//Number to Boolean = False

/**************************************** Operstions ****************************************************/

let value = 3
let negvalue = - value
console.log(negvalue);
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)// 2 to the power 2
console.log(2/2)
console.log(2%2);

let str1 = "hello "; let str2 = "world"
str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+ true)
// console.log(true +) // syntax error
console.log(+ "")

// pre-increment & post-increment

let gamecounter = 100
// console.log(gamecounter++);
console.log(++gamecounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


/* MDN LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment */