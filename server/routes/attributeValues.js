const express = require('express');
const router = express.Router();
const attributeValuesController = require('../controller/attributeValues');

router.get('/all-attribute-value', attributeValuesController.getAllAttributeValues);
router.post('/add-attribute-value', attributeValuesController.postAddAttributeValues);
router.post('/edit-attribute-value', attributeValuesController.postEditAttributeValues);
router.post('/delete-attribute-value', attributeValuesController.getDeleteAttributeValues);

module.exports = router;