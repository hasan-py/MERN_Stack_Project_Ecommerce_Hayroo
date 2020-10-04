const express = require('express');
const router = express.Router();
const brainTreeController = require('../controller/braintree');

router.post('/braintree/get-token', brainTreeController.ganerateToken);

module.exports = router;