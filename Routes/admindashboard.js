const express = require('express');


const admindashboard = require('../Controllers/admindashboard')

const route = express.Router();

route.get('/',admindashboard)


module.exports = route;