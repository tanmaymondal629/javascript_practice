// how to do objects destructuring

const course = {
    courseName : "ES6 JS turorials",
    courseFee : 999,
    courseInstructor : "Hitesh Choudhary"
}

const {courseInstructor : instructor} = course // this is called object destructuring.. like that way we can create array destructuring
console.log(instructor);


/*json structure is like objects but we define js objects and hold in a variable , but json don't need to store in variable. 
its standalone a json object in JS. And in json keys are always string

{
    "courseName" : "ES6 JS turorials",
    "courseFee" : 999,
    "courseInstructor" : "Hitesh Choudhary"
}

*/