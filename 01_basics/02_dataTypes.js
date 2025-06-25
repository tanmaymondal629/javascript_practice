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