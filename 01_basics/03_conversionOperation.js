let score1 = 33
console.log(typeof score1)

let score2 = "33"
console.log(typeof(score2))

let valueInNumber = Number(score2) //datatype conversion from string to number
console.log(typeof(valueInNumber))

let score3 = "33abc"
let valueInNumber1 = Number(score3) //datatype conversion from string to number
console.log(typeof(valueInNumber1))
console.log(valueInNumber1) //NaN - Not a Number - datatype number
console.log(typeof(NaN)) // NaN to number = number
console.log("Number(null) value is : "+Number(null)) // Null to number = 0
console.log("Number(undefined) value is: "+Number(undefined)) // undefined to number = NaN
console.log("Number(true) value is: "+Number(true)) //boolean to number = 1
console.log("Number(false) value is: "+Number(false))//boolean to number = 0
console.log("Number('Tanmay') value is: "+Number("Tanmay"))//string to number = NaN
console.log("Boolean(1) value is: "+Boolean(1))//Number to Boolean = True
console.log("Boolean(0) value is: "+Boolean(0))//Number to Boolean = False
console.log("Boolean('') value is: "+Boolean(""))//Number to Boolean = False
console.log("String(33) value is: "+String(33)+", And the datatype is "+ typeof String(33))//Number to Boolean = False