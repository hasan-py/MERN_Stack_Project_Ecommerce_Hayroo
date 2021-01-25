const express = require("express");
const router = express.Router();
const ordersController = require("../controller/orders");

router.get("/get-all-orders", ordersController.getAllOrders);
router.post("/order-by-user", ordersController.getOrderByUser);

router.post("/create-order", ordersController.postCreateOrder);
router.post("/update-order", ordersController.postUpdateOrder);
router.post("/delete-order", ordersController.postDeleteOrder);

module.exports = router;
