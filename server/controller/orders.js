const orderModel = require("../models/orders");
const productModel = require("../models/products");

class Order {

    async postCreateOrder(req, res) {
        let { allProduct, user, amount, transactionId, address, phone } = req.body
        if (!allProduct || !user || !amount || !transactionId || !address || !phone ) {
            return res.json({ message: "All filled must be required" })
        } else {
            try {
                let newOrder = new orderModel({
                    allProduct,
                    user,
                    amount,
                    transactionId,
                    address,
                    phone
                })
                let save = await newOrder.save();
                if (save) {
                    
                    return res.json({ success: "Order created successfully" })
                }
            } catch (err) {
                return res.json({ error: error })
            }
        }
    }

    async postUpdateOrder(req, res) {
        console.log("awesome");
    }
}

const ordersController = new Order
module.exports = ordersController