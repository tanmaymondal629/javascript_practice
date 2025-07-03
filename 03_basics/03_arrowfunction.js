const user = {
    username: "Tanmay",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "Hitesh"
user.welcomeMessage()

// console.log(this); // if we run this in browser then this line will return dom object. But here it will return empty object

/*function chai(){
    let username = "tanmay629"
    console.log(this);
    console.log(this.username);// in this way we can't declare this inside function.this keyword allowed in only objects
}


chai()*/

// we can write function like that also

const chai = function(){
    let username = "tanmay"
    console.log(username);
      
}

// we can write function like that also which called arrow function
const arrowFunction = () =>{
    let username = "sourav123"
    console.log(username)
}

arrowFunction()

const addTwoNumbers = (num1 , num2) => { 
    return num1 + num2
}

console.log(addTwoNumbers(5,4))

// we can write arraow function like that also 
const subtractTwoNumbers = (num1 , num2) =>  ( num1 - num2) 
/* 
1. can't use this syntax : {num1 - num2}
2. can't use this syntax : return (num1 -num2) 
*/
console.log(subtractTwoNumbers(5,4))

// we can also assign object into a variable using arrow function

const objectFunction = () => ({ username: "tanmay629", passwor: "1234"})

console.log(objectFunction().username);
