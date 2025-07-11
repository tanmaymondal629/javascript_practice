// for in loop we use for iterate objects in ES6 JS, Which was not possible with for of loop
const myObj = {
    'game1': "NFS",
    "game2": "IGI",
    "game3": "Forza"
}

for (const key in myObj) {
    console.log(`${key} is shortcut of ${myObj[key]}`);
    
}

const programming= ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
    
}

// Important notes: map object is not accessable using for in loop....