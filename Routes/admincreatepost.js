const express = require('express');

const multer = require('multer');

const { admincreatepost, admincreatepostverify } = require('../Controllers/admincreatepost');

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


route.get('/', admincreatepost)
route.post('/', uploads.single('file'), admincreatepostverify);


module.exports = route;