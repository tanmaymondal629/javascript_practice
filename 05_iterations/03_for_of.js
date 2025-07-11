// for of loop
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const string1 = "Hello World"

for (const char of string1) {
    console.log(`Each char is ${char}`);
}

// Map
const map = new Map();

map.set('IN','INDIA')
map.set('USA','United States of America')
map.set('NL','Netherlands')

console.log(map);

for (const [key,value] of map) {
    console.log(`Country ISO CODE ${key} :- ${value}`);
}

// ******************Important note : Object is not iterable using for of loop it can be accessible using for in loop*******************
const myObj = {
    'game1': "NFS",
    "game2": "IGI", 
    "game3": "Forza"
}
for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`);
}