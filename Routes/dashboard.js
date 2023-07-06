const express = require('express');


const dashboard = require('../Controllers/dashboard')

const route = express.Router();

route.get('/',dashboard)


module.exports = route;