//load express into the project
const express = require('express');
const api = express();

api.use(express.static(__dirname + '/public'));

api.listen(3000, () => {
    console.log('api is up!');
});

// api.get('/', (req, res) => {
// res.send('Hello, world!');
// })