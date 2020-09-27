const productModel = require("../models/products");
const { toTitleCase } = require('../config/function');
const fs = require('fs');

class Product {

    // Delete image from static folder
    static deleteImages(images) {
        for (var i = 0;  i<images.length; i++) {
            let filePath = `../server/public/uploads/products/${images[i].filename}`;
            fs.unlink(filePath, (err) => {
                if (err) { 
                    return err 
                }
            })
        }
    }

    async getAllProduct(req, res) {
        try {
            let Products = await productModel.find({}).populate("pCategory", "_id cName").sort({ _id: -1 })
            if (Products) {
                return res.json({ Products })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async postAddProduct(req, res) {
        let {pName,pDescription,pPrice,pQuantity,pCategory,pOffer,pStatus} = req.body
        let images = req.files
        // Validate other fileds
        if(!pName | !pDescription | !pPrice | !pQuantity | !pCategory | !pOffer | !pStatus){
            Product.deleteImages(images)
            return res.json({error:"All filled must be required"})
        }
        // Validate Name and description
        else if(pName.length>255 || pDescription.length>3000){
            Product.deleteImages(images)
            return res.json({error:"Name 255 & Description must not be 3000 charecter long"})
        }
        // Validate Images
        else if(images.length !== 2){
            Product.deleteImages(images)
            return res.json({ error: "Must need to provide 2 images" })
        }
        else{
            try {
                // Validate name already exists
                let productAlreadyExist = await productModel.findOne({pName:pName})
                if (productAlreadyExist){
                    Product.deleteImages(images)
                    return res.json({error:"Product name must be uniqe. Name already exist"})
                }else{
                    let allImages = [];
                    for (const img of images){
                        allImages.push(img.filename)
                    }
                    let newProduct =  new productModel({
                        pImages:allImages,
                        pName,pDescription,pPrice,pQuantity,pCategory,pOffer,pStatus
                    })
                    let save = await newProduct.save()
                    if (save){
                        return res.json({success:"Product created successfully"})
                    }
                }
            }catch(err){
                console.log(err)
            }
        }

    }

    async postEditProduct(req,res){
        return res.json("Hello")
    }

    async getDeleteProduct(req, res) {
        let { pId } = req.body
        if (!pId) {
            return res.json({ error: "All filled must be required" })
        } else {
            try {
                let deleteProductObj = await productModel.findById(pId)
                let deleteProduct = await productModel.findByIdAndDelete(pId)
                if (deleteProduct) {
                    // Deleting from static file
                    for (const img of deleteProductObj.pImages){
                        let filePath = `../server/public/uploads/products/${img}`;
                        fs.unlink(filePath, (err) => {
                            if (err) { 
                                return err 
                            }
                        })
                    }
                    return res.json({ success: "Product deleted successfully" })
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    async getSingleProduct(req,res) {
         return res.json({hello:"hi"})
    }


}

const productController = new Product
module.exports = productController