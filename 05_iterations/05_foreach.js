const coading = ["js","ruby","Java", "python","CPP"]
// option 1
coading.forEach(function (item){
    console.log(item);
    
})

// option 2 : using arrow function

coading.forEach((val)=>{
    console.log(val);
    
})

// option 3 : pass function as a parameter

function printMe(item){
    console.log(item);
    
}
coading.forEach(printMe)

// more details about foreach

coading.forEach((item,index,arr)=>{
    console.log(`${item} at index ${index} : ${arr}`);
    
})

// how to iterate database fatched data using foreach

const myCoding = [
    {
        languageName:"Java",
        extention: ".java"
    },
    {
        languageName:"C++",
        extention: ".cpp"
    },
    {
        languageName:"PHP",
        extention: ".php"
    },
    {
        languageName:"JavaScript",
        extention: ".js"
    },
]

myCoding.forEach((item)=>{
    console.log(`Language : ${item.languageName} , Expention : ${item.extention}`)
})