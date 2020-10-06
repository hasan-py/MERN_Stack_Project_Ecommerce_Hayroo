const express = require('express');
const router = express.Router();
const ordersController = require('../controller/orders');

router.get('/get-all-orders', ordersController.getAllOrders)

router.post('/create-order', ordersController.postCreateOrder);
router.post('/update-order', ordersController.postUpdateOrder);

module.exports = router;