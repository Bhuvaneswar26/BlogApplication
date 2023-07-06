const express = require('express');

const route = express.Router();

const readblog = require('../Controllers/readblog')

route.get('/:id', readblog)


module.exports = route;