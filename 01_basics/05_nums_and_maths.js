const score = 100
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length)

console.log(123.5455.toFixed(2));

console.log(23.63543.toPrecision(3))

console.log(123.63543.toPrecision(3))

console.log(123.8966.toPrecision(4))

console.log(100000 .toLocaleString()) //us standard

console.log(100000 .toLocaleString('en-IN'))

//++++++++++++++++++++++++++ Maths +++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //it provides value between 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)