const express = require('express');
const router = express.Router();
const subCategoryController = require('../controller/subCategories');

router.get('/all-subcategory', subCategoryController.getAllsubCategory);
router.post('/add-subcategory', subCategoryController.postAddsubCategory);
router.post('/edit-subcategory', subCategoryController.postEditsubCategory);
router.post('/delete-subcategory', subCategoryController.getDeletesubCategory);

module.exports = router;