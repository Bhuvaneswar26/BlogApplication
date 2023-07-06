const express = require('express');

const route = express.Router();

const { updateprofile, verifyupdateprofile } = require('../Controllers/updateprofile')

route.get('/:mail', updateprofile)

route.patch('/:mail',verifyupdateprofile)


module.exports = route;