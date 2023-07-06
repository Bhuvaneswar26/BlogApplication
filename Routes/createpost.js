const express = require('express');

const multer = require('multer');

const { createpost, createpostverify } = require('../Controllers/createpost');

const route = express.Router();


const storage = multer.diskStorage({
    destination: 'uploads',
    filename : (req,file , cb) => {
        cb(null,file.originalname)
}
})

const uploads = multer({
    storage:storage
})


route.get('/', createpost)
route.post('/', uploads.single('file'), createpostverify);


module.exports = route;