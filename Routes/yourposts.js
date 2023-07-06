const express = require('express');

const route = express.Router();

const yourposts = require('../Controllers/yourposts')

route.get('/',yourposts)


module.exports = route;