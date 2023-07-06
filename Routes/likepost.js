const express = require('express');


const likepost = require('../Controllers/likepost')

const route = express.Router();

route.get('/:id',likepost)


module.exports = route;