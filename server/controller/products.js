const productModel = require("../models/products");
const { toTitleCase } = require('../config/function');

class Product {

    async getAllProduct(req, res) {
        try {
            let Products = await productModel.find({}).sort({ _id: -1 })
            if (Products) {
                return res.json({ Products })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async postAddProduct(req, res) {
        let {pName,pDescription,pPrice,pQuantity,pCategory,pSubCategory,pBrand,pOffer,pStatus}
        if(!pName | !pDescription | !pPrice | !pQuantity | !pCategory | !pSubCategory | !pBrand | !pOffer | !pStatus){
            return res.json({message:"All filled must be required"})
        }
        if(pName.length>255 || pDescription.length>3000){
            return res.json({message:"Name 255 & Description must not be 3000 charecter long"})
        }
        try {
            let productAlreadyExist = await findOne({pName:pName})
            if (productAlreadyExist){
                return res.json({message:"Product name must be uniqe. Name already exist"})
            }else{
                let newProduct =  new productModel({
                    pName,pDescription,pPrice,pQuantity,pCategory,pSubCategory,pBrand,pOffer,pStatus
                })
                let save = await newProduct.save()
                if (save){
                    return res.json({success:"Product created successfully"})
                }
            }
        }
    }

    async postEditProduct(req, res) {
        
    }

    async getDeleteProduct(req, res) {
        let { pId } = req.body
        if (!pId) {
            return res.json({ message: "All filled must be required" })
        } else {
            try {
                let deleteProduct = await productModel.findByIdAndDelete(pId)
                if (deleteProduct) {
                    return res.json({ success: "Product deleted successfully" })
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}

const productController = new Product
module.exports = productController