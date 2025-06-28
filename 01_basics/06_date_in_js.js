let date = new Date();
console.log(`todays's date ${date.getDate()}`)
console.log(`Current month ${date.getMonth()+1}`)
console.log(`Current year ${date.getFullYear()}`)
console.log(date);
console.log(typeof date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());



let created_at = new Date(2025,0,1) // 0 => jan, 1=>Feb and so on
console.log(created_at);
console.log(created_at.toDateString());
console.log(created_at.toLocaleString());

let myCreatedDate = new Date("2025-06-28");//yyyy-mm-dd
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("06-28-2025");// syntax : mm-dd-YYYY
console.log(myCreatedDate2);
console.log(myCreatedDate2.getTime());// output in timestamp miliseconds

let timestamp = Date.now();
console.log(Math.floor(timestamp/1000)); //output is differnce between two date 1970-01-01  and current date in seconds




