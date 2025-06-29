const myArray = [1,2,3,4,5]
console.log(typeof myArray);
console.log(myArray[0])
/*
If I copy one array object to another array object thats called Shallow copy.
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as 
those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may 
also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and 
copy are completely independent. 
*/

/*
Deep copy is fully oposite of that 
A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as 
those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can 
be assured you're not causing the other object to change too.
*/

myHeros = ["Shaktiman", "Nagraj","SpiderMan"]
console.log(myHeros[2])

// Array Methods
myArray.push(6)
console.log(myArray);
myArray.pop()
console.log(myArray);
myArray.unshift(7);
console.log(myArray);
myArray.shift(8);
console.log(myArray);
console.log(myArray.includes(9));
console.log(myArray.indexOf(9));//output = -1
console.log(myArray.indexOf(2));//output = -1
console.log(myArray.join())// same like implode in php

console.log("A ", myArray);
let arr1 = myArray.slice(0,2)
console.log(arr1);
console.log("B ", myArray);
let arr2 = myArray.splice(0,2)
console.log(arr2);
console.log("C ", myArray);
