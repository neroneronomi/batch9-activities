class User {
    constructor(firstName, age, email) {
        this.firstName = firstName ;
        this.age = age;
        this.email = email;
    }
}

let user = new User("Oliver", "28", "oliver_nero11@icloud.com")

const findUserData = (user) => {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {

            if (user) {
                resolve(user)
            } else {
                reject("Cannot find user data")
            }

        },1000)
    })
}

findUserData(user).then((success) => console.log(success)).catch((error) => console.log(error));

findUserData(null).then((success) => console.log(success)).catch((error) => console.log(error));