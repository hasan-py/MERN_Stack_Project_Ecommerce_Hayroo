const orderModel = require("../models/orders");
const productModel = require("../models/products");

class Order {

    async getAllOrders(req, res) {
        try {
            let Orders = await orderModel.find({}).populate('allProduct.id', 'pName pImages pPrice').populate('user', 'name email').sort({ _id: -1 })
            if (Orders) {
                return res.json({ Orders })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async postCreateOrder(req, res) {
        let { allProduct, user, amount, transactionId, address, phone } = req.body
        if (!allProduct || !user || !amount || !transactionId || !address || !phone) {
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
        let { oId, status } = req.body
        if (!oId || !status) {
            return res.json({ message: "All filled must be required" })
        } else {
            let currentOrder = orderModel.findByIdAndUpdate(oId, { status: status, updatedAt: Date.now() })
            currentOrder.exec((err, result) => {
                if (err) console.log(err);
                return res.json({ success: "Order updated successfully" })
            })
        }
    }
}

const ordersController = new Order
module.exports = ordersController