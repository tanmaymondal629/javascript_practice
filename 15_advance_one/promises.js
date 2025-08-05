// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

//     pending: initial state, neither fulfilled nor rejected.
//     fulfilled: meaning that the operation was completed successfully.
//     rejected: meaning that the operation failed.

// Promise 1 - Basic Promise structure
const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // DB calls, cryptography, network, files reaading etc
    setTimeout(function(){
        console.log('Async task 1')
        resolve() // it is connecting to .then
    },1000)
})
// The above promise is created now need to be consumed with .then

promiseOne.then(function(){
    console.log("Async task 1 resolved")
})



// Promise 2 - Basic Promise structure without storing any reference variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    },1000)
}).then(()=>console.log("Async task 2 resolved"))


// Promise 3 - pass data through resolve
new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username:"admin@example.com",pass:"12345"})  //we can pass obkject, array, function etc through resolve to then function
    },1000)
    
}).then(function(userData){
    console.log(`Async task 3=> UserData:${userData.username}`)
})

// Promise 4: rejection and error handling
const promiseFour = new Promise(function(resolve, reject){
    let error = false
    setTimeout(function(){
        if(!error){
            resolve({username:"admin@example.com",pass:"12345"})
        }else{
            reject("Async task 4: Somethimng went wrong")
        }
    },1000)
    
})

promiseFour.then(function(userData){
    console.log("Async task 4:");
    
    console.log(userData)
    return userData.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Async task 4: Either Promise is resolved or rejected");
})


// Promise 5: Promise handling with async and await

const promiseFive = new Promise(function(resolve, reject){
    let error = true
    setTimeout(function(){
        if(!error){
            resolve({username:"javascript@example.com",pass:"12345"})
        }else{
            reject("Async task 5: Somethimng went wrong")
        }
    },1000)
    
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log("Async task 5:")
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    
}

consumePromiseFive()


// async await function 6:

// async function consumePromiseSix() {
//     try {
//         const allUsers = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await allUsers.json()  //*******data convertion into json also take time thats why need await ********/
//         console.log(data);
//     } catch (error) {
//         console.log(`Async function 6: ${error}`);
        
//     }
    
// }

// consumePromiseSix()


// Another way to fetch API data and log using then() and catch()

fetch("https://api.github.com/users/hiteshchoudhary")
.then(function(response){
    return response.json()
}).then(function(jsonData){
    console.log(jsonData)
}).catch((error)=> console.log(error))