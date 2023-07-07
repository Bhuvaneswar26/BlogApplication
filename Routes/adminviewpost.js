const express = require('express');

const route = express.Router();

const adminviewpost = require('../Controllers/adminviewpost')

route.get('/',adminviewpost)


module.exports = route;