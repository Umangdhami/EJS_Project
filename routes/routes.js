const express = require('express');
const server = express();
const controller = require('../controllers/controllers')

server.get('/', controller.defaulRoute);
server.get('/about', controller.aboutRoute);
server.get('/gallery', controller.galleryRoute);
server.get('/contact', controller.contactRoute);


module.exports = server