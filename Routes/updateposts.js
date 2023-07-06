const express = require('express');

const route = express.Router();

const { updateposts, verifyupdateposts } = require('../Controllers/updateposts')

route.get('/:id', updateposts)

route.patch('/:id',verifyupdateposts)


module.exports = route;