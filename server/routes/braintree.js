const express = require('express');
const router = express.Router();
const brainTreeController = require('../controller/braintree');

router.post('/braintree/get-token', brainTreeController.ganerateToken);
router.post('/braintree/payment', brainTreeController.paymentProcess);

module.exports = router;