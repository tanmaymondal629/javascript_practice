class User{
    constructor(username){
        this.username = username
    }

    logMe()
    {
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this. password = password
    }

    addCourse()
    {
        console.log(`A new course added by ${this.username}`);
        
    }
}

const chai = new Teacher('Chai', 'chai@gmail.com', '123')

chai.logMe()

const masalaChai = new User('MasalaChai')

masalaChai.logMe()
// masalaChai.addCourse()  X

console.log(chai === masalaChai);

console.log(chai instanceof User);

console.log(chai instanceof Teacher);

console.log(masalaChai instanceof Teacher);

console.log(masalaChai instanceof User);
