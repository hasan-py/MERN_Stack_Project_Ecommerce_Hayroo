const express = require('express');
const router = express.Router();
const customizeController = require('../controller/customize')

router.post('/upload-slide-image', customizeController.uploadSlideImage);

module.exports = router;