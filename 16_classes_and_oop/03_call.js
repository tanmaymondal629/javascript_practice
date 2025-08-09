function setUsername(username){
    this.username = username
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const userOne = new createUser("tanmay","matainja088@gmail.com",'123')
console.log(userOne);
