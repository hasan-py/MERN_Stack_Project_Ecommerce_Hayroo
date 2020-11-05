const fs = require('fs');
const categoryModel = require("../models/categories");
const productModel = require("../models/products");
const orderModel = require("../models/orders");
const userModel = require("../models/orders");

class Customize {

    async uploadSlideImage(req, res) {
        try {
            let Categories = await categoryModel.find({}).sort({ _id: -1 })
            if (Categories) {
                return res.json({ Categories })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async getAllData(req, res) {
        try {
            let Categories = await categoryModel.find({}).count()
            let Products = await productModel.find({}).count()
            let Orders = await orderModel.find({}).count()
            let Users = await userModel.find({}).count()
            if (Categories && Products && Orders) {
                return res.json({ Categories, Products, Orders, Users })
            }
        } catch (err) {
            console.log(err)
        }
    }

}

const customizeController = new Customize
module.exports = customizeController