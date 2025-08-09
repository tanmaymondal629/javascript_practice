// ES6
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptedPassword(){
        console.log(`${this.password}abc`);
        
    }

    usernameUpper(){
        console.log(this.username.toUpperCase());   
    }
}

const chai = new User('Tanmay','matainja088@gmail.com', '123')

chai.encryptedPassword()
chai.usernameUpper()

// behind the scene

const coffe = function (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

coffe.prototype.encryptedPassword = function(){
    console.log(`${this.password}abc`);
}

coffe.prototype.usernameUpper = function(){
    console.log(this.username.toUpperCase());
}
const tea = new coffe('Tanmay','matainja088@gmail.com', '123');
tea.encryptedPassword()
tea.usernameUpper()