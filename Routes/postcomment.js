const express = require('express');


const postcomment = require('../Controllers/postcomment')

const route = express.Router();


route.post('/:id',postcomment)


module.exports = route;