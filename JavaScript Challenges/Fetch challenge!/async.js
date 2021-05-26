const fetch = require('node-fetch');

async function getJoke() {
    let getNewJoke = new Promise((resolve, reject) => {
            fetch("https://api.chucknorris.io/jokes/random")
            .then((response) => response.json())
            .then((data) => console.log(data))
    })
    let result = await joke;
    console.log(result);
}
getJoke();