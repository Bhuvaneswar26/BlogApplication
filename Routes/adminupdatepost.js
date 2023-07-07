const express = require('express');

const route = express.Router();

const { adminupdatepost, adminverifyupdatepost } = require('../Controllers/adminupdatepost')

route.get('/:id', adminupdatepost)

route.patch('/:id',adminverifyupdatepost)


module.exports = route;