// Immediately Invoked Function Expression (IIFE)

// This is a normal function
function chai(){
    console.log("DB CONNECTION");
}
chai(); // Here we are calling the function chai()


// But in IIFE we don't call function.. It automatically invoked . IIFE Example below
(function chaiAurCode(){
    console.log("DB CONNECTION TWO");
})();

// ES6 standard IIFE example
(() => {console.log(`THIS IS ES6 EXAMOPLE`)})();

// Ok now IIFE example with aurguments and Parameters: Addition of two numbers

((num1,num2)=> {console.log(`Result of addition of number ${num1} and ${num2} is ${num1 + num2}`)})(5, 4);