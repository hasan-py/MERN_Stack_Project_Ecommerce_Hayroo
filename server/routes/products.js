const express = require('express');
const router = express.Router();
const productController = require('../controller/products');
const multer = require('multer');

// Image Upload setting
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads/products')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname)
    }
})

const upload = multer({ storage: storage });

router.get('/all-product', productController.getAllProduct);
router.post('/add-product', upload.single('bImage'),  productController.postAddProduct);
router.post('/edit-product', upload.single('bImage'), productController.postEditProduct);
router.post('/delete-product', productController.getDeleteProduct);
router.post('/get-product', productController.getSingleProduct);

module.exports = router;