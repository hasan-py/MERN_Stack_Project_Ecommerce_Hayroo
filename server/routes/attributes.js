const express = require('express');
const router = express.Router();
const attributeController = require('../controller/attributes');

router.get('/all-attribute', attributeController.getAllAttribute);
router.post('/add-attribute', attributeController.postAddAttribute);
router.post('/edit-attribute', attributeController.postEditAttribute);
router.post('/delete-attribute', attributeController.getDeleteAttribute);

module.exports = router;