const express = require('express');

const route = express.Router();

const themeblogs = require('../Controllers/themeblogs');

route.get('/:theme',themeblogs)


module.exports = route;