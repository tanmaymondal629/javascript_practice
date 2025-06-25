"use strict"

 // treat all JS code as newer version
// alert(3 + 3) // alert doesn't work on node.js it works on browser javascript engine


//interview question : different between null and undefined 

/*

Note:
null =>standalone value
symbol=> unique
object datatype
*/

//interview question : primitive and non-primitive datatypes 

// Primitive (call by value) dataTypes:
// Total 7 types : number, string, boolean, null, undefined, symbol, BigInt
 console.table([typeof "Tanmay", typeof 123, typeof true, typeof null, typeof undefined, typeof(Symbol('123')), typeof 1231232132132132312n])

/* interview question : Javascript dynamic type language or static type language?
 Ans: Javascript is a Dynamic type language, because in Javascript defines datatype of a veriable Dynamically, we don't need to 
        declare it manually(like int, string, float etc)
*/

/*****Symbol datatype ***/

const id = Symbol('123')
const anotherId = Symbol('123')

// note: values inside variable id and anotherId are not same although Symbol contains same value

console.log(id===anotherId);


// Non-premitive (Call by reference) datatypes
// total 3 types: object, array, Function

const heros = ["Shaktimaan", "NaagRaj", "Krish"]

let userObj = {
    name: "Hitesh",
    age: 22
}

const myFunction = function(){
    console.log("Hello World")
}

console.table([typeof heros, typeof userObj, typeof myFunction]);

// https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html

// +++++++++++++++++++++++++++++ Stack and Heap memory ++++++++++++++++++++++++++++++++++++++++++++++

/* Stack stores Primitive datatypes means when we declare a primitive type data then it stores in a stack memory 
 and if I copy the value to another variable then stack memory will share copy of the value not reference. */

/* Heap stores reference datatypes means when we declare a reference type data then it stores in heap memory and if I 
 do copy of it to another variable then heap memory will share it's reference */

//  stack example
let numberOne = 3
let numberTwo = numberOne
console.log(`Now numberTwo value is: ${numberTwo}`);
numberTwo = 4
console.log(`After changeof numberTwo, value is: ${numberTwo}`);

// heap example
let userOne = {
    name: "Tanmay",
    email: "matainja088@gmail.com",
}

let userTwo = userOne;

console.log("userOne email before call by reference: "+ userOne.email);
console.log("userTwo email before call by reference: "+ userTwo.email);

userTwo.email = "tanmaymondal629@gmail.com"

console.log("userOne email after call by reference: "+ userOne.email);
console.log("userTwo email after call by reference: "+ userTwo.email);