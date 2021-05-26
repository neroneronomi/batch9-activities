const fetch = require('node-fetch');
const { resolve } = require('path/posix');
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data))
