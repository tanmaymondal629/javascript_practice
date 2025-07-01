function userLoggedIn(username){
    console.log(`${username} just logged in.`);
}

userLoggedIn() // no argument passed in means username holds undefined
userLoggedIn("Tanmay")