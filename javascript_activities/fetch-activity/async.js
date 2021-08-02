const fetch = require('node-fetch');

async function getUser() {
    let user = new Promise((resolve, reject) => {
            fetch("https://randomuser.me/api")
            .then((response) => response.json())
            .then((data) => data.results[0])
    })
    let result = await user;
    console.log(result);
}
var user = getUser();
console.log(user);