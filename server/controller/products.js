const productModel = require("../models/products");
const { toTitleCase } = require('../config/function');
const fs = require('fs');

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
        // let {pName,pDescription,pPrice,pQuantity,pCategory,pOffer,pStatus} = req.body
        let images = req.files
        console.log(req.files);
        if(images.length !== 3){
            for (var i = 0;  i<images.length; i++) {
                let filePath = `../server/public/uploads/products/${images[i].filename}`;
                fs.unlink(filePath, (err) => {
                    if (err) { console.log(err) }
                    console.log("Deleted",filePath);
                })
            }
            return res.json({ error: "Please provide only 3 images" })
        }else {
            return res.json({success:"Upload sucess",images})
        }


/*        if(!pName | !pDescription | !pPrice | !pQuantity | !pCategory | !pOffer | !pStatus){
            return res.json({error:"All filled must be required"})
        }
        if(pName.length>255 || pDescription.length>3000){
            return res.json({error:"Name 255 & Description must not be 3000 charecter long"})
        }
        try {
            let productAlreadyExist = await productModel.findOne({pName:pName})
            if (productAlreadyExist){
                return res.json({error:"Product name must be uniqe. Name already exist"})
            }else{
                let newProduct =  new productModel({
                    pImages:"not given",
                    pName,pDescription,pPrice,pQuantity,pCategory,pOffer,pStatus
                })
                let save = await newProduct.save()
                if (save){
                    return res.json({success:"Product created successfully"})
                }
            }
        }catch(err){
            console.log(err)
        }*/
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
                let deleteProduct = await productModel.findByIdAndDelete(pId)
                if (deleteProduct) {
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