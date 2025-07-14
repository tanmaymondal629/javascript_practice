// reduce() method does sum of all elements in an array

const arr = [1,2,3,4,5,6,7,8,9,10]

let intialvalue = 0

let arrTotal = arr.reduce(function (accumulator,currentval){
    console.log(`accumulator: ${accumulator} and currentval: ${currentval}`);
    
    return accumulator + currentval
}, intialvalue)

// in short
// let arrTotal = arr.reduce((accu,curr)=> accu+curr,0)
console.log(`Array Total: ${arrTotal}`);

//  now same operation on 
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let shoppingTotal = shoppingCart.reduce((acc,item)=> acc + item.price, 0)

console.log(shoppingTotal);
