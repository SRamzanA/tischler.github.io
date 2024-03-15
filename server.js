const express = require('express');
const app = express();

const port = 5000
const hostname = '0.0.0.0';

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.use(express.static('public'))

app.listen(port, hostname, (error) => {
    if (error) return console.log(error)

    console.log("server created: 127.0.0.1:5000")
})



