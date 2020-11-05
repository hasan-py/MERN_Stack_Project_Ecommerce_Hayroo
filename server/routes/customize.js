const express = require('express');
const router = express.Router();
const customizeController = require('../controller/customize')
const multer = require('multer');

// Image Upload setting
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads/customize')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname)
    }
})

const upload = multer({ storage: storage });

router.post('/upload-slide-image', upload.any(), customizeController.uploadSlideImage);
router.post('/dashboard-data', customizeController.getAllData);

module.exports = router;