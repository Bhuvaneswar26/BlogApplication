const express = require('express');

const route = express.Router();

const allblogs = require('../Controllers/allblogs')

route.get('/',allblogs)


module.exports = route;