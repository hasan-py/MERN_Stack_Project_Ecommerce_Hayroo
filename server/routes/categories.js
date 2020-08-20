const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categories');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads/categories')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const upload = multer({storage});

router.get('/all-category', categoryController.getAllCategory);
router.post('/add-category', upload.single('cImage'), categoryController.postAddCategory);
router.post('/edit-category', upload.single('cImage'), categoryController.postEditCategory);
router.post('/delete-category', categoryController.getDeleteCategory);

module.exports = router;