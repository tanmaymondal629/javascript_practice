// object literals
const mySymbol = Symbol("key1")
const JsUser ={
    name: "Tanmay",
    "Full Name": "Tanmay Mondal",
    age: 22,
    location: "Bira",
    email: "matainja088@gmail.com",
    isLoggedIn: false,
    logindays: ["Monday", "Saturday"],
    [mySymbol]: "myKey1"
}

// two ways to access object properties in JS
console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser["Full Name"]);
console.log(JsUser[mySymbol])
console.log(typeof JsUser[mySymbol])

// value replacement of an object
JsUser.email = "tanmaymondal629@gmail.com";

console.log(JsUser.email);

// object Freeze example
// Object.freeze(JsUser);

// JsUser.email = "mondaltanmay629@gmail.com" // this is not allowed after object freeze, it will not change email value

// console.log(JsUser.email)

// we can use a function as an object property

JsUser.gretting= function(){
    console.log(`Hello JS User ${this["Full Name"]}`);
}
console.log(JsUser.gretting())
