const express = require('express');
const server = express();
const body_parser = require('body-parser');
const route = require('./routes/routes');
const path = require('path');
const statickPath = path.join(__dirname, 'views/');
const port = 5010;
console.log(path.join(__dirname, 'views/'));

server.use(express.static(statickPath));
server.use('/', route);
server.set("view engine", "ejs");
server.use(body_parser.urlencoded({extended: true}));


server.listen(port, () => {
    console.log(`server run on port ${port}`);
})