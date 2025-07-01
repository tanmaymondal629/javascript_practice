// const tinderUser = new Object(); // this is called singleton
const tinderUser = {} // this is non-singleton object

tinderUser.id = 12312
tinderUser.name = "Tanmay"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "matainja088@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Tanmay",
            lastname: "Mondal"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"e",5:"f",6:"g"}
const obj3 = {7:"h",8:"i",9:"j"}

const obj4 = Object.assign({},obj1,obj2,obj3); // like array_mearge() in php
console.log(obj4);

const obj5 = { ...obj1, ...obj2, ...obj3} // another type to array merge// "..."=> spread operator
console.log(obj5);

const users =[
    {
        id: 1,
        email: "matainja088@gmail.com"
    },
    {
        id: 2,
        email: "matainja089@gmail.com"
    },
    {
        id: 3,
        email: "matainja090@gmail.com"
    }
]

console.log(users)
console.log(users[0].email)

console.log(Object.keys(tinderUser))// like array_keys() in php
console.log(Object.values(tinderUser))// like array_values() in php
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // like in_array() in php