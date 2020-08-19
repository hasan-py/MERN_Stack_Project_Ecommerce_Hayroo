const express = require('express');
const router = express.Router();
const brandController = require('../controller/brands');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads/brands') // Must need to create a folder like this
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname)
    }
})
const upload = multer({ storage: storage });

router.get('/all-brand', brandController.getAllBrand);
router.post('/add-brand', upload.single('bImage'), brandController.postAddBrand);
router.post('/edit-brand', upload.single('bImage'), brandController.postEditBrand);
router.post('/delete-brand', brandController.getDeleteBrand);

module.exports = router;