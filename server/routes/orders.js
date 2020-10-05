const express = require('express');
const router = express.Router();
const ordersController = require('../controller/orders');

router.post('/create-order', ordersController.postCreateOrder);
router.post('/update-order', ordersController.postUpdateOrder);

module.exports = router;