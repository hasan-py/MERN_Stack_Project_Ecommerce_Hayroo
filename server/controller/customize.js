const fs = require('fs');
const categoryModel = require("../models/categories");
const productModel = require("../models/products");
const orderModel = require("../models/orders");
const userModel = require("../models/users");
const customizeModel = require("../models/customize");

class Customize {

    async getImages(req, res) {
        try {
            let Images = await customizeModel.find({})
            if (Images) {
                return res.json({ Images })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async uploadSlideImage(req, res) {
        let image = req.file.filename
        console.log(image);
        if (!image) {
            return res.json({ error: "All field required" })
        }
        try {
            let newCustomzie = new customizeModel({
                slideImage: image
            })
            let save = await newCustomzie.save()
            if (save) {
                return res.json({ success: "Image upload successfully" })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async deleteSlideImage(req, res) {
        let { id } = req.body
        if (!id) {
            return res.json({ error: "All field required" })
        } else {
            try {
                let deletedSlideImage = await customizeModel.findById(id)
                const filePath = `../server/public/uploads/customize/${deletedSlideImage.slideImage}`;

                let deleteImage = await customizeModel.findByIdAndDelete(id)
                if (deleteImage) {
                    // Delete Image from tem folder
                    fs.unlink(filePath, (err) => {
                        if (err) { console.log(err) }
                        return res.json({ success: "Image deleted successfully" })
                    })
                }

            } catch (err) {
                console.log(err)
            }
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