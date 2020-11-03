const productModel = require("../models/products");
const fs = require('fs');

class Product {

    // Delete image from static folder
    static deleteImages(images) {
        for (var i = 0; i < images.length; i++) {
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
        let { pName, pDescription, pPrice, pQuantity, pCategory, pOffer, pStatus } = req.body
        let images = req.files
        // Validate other fileds
        if (!pName | !pDescription | !pPrice | !pQuantity | !pCategory | !pOffer | !pStatus) {
            Product.deleteImages(images)
            return res.json({ error: "All filled must be required" })
        }
        // Validate Name and description
        else if (pName.length > 255 || pDescription.length > 3000) {
            Product.deleteImages(images)
            return res.json({ error: "Name 255 & Description must not be 3000 charecter long" })
        }
        // Validate Images
        else if (images.length !== 2) {
            Product.deleteImages(images)
            return res.json({ error: "Must need to provide 2 images" })
        } else {
            try {
                let allImages = [];
                for (const img of images) {
                    allImages.push(img.filename)
                }
                let newProduct = new productModel({
                    pImages: allImages,
                    pName,
                    pDescription,
                    pPrice,
                    pQuantity,
                    pCategory,
                    pOffer,
                    pStatus
                })
                let save = await newProduct.save()
                if (save) {
                    return res.json({ success: "Product created successfully" })
                }
            } catch (err) {
                console.log(err)
            }
        }

    }

    async postEditProduct(req, res) {
        let { pId, pName, pDescription, pPrice, pQuantity, pCategory, pOffer, pStatus } = req.body

        // Validate other fileds
        if (!pId | !pName | !pDescription | !pPrice | !pQuantity | !pCategory | !pOffer | !pStatus) {
            return res.json({ error: "All filled must be required" })
        }
        // Validate Name and description
        else if (pName.length > 255 || pDescription.length > 3000) {
            return res.json({ error: "Name 255 & Description must not be 3000 charecter long" })
        } else {
            try {
                let editProduct = productModel.findByIdAndUpdate(pId, {
                    pName,
                    pDescription,
                    pPrice,
                    pQuantity,
                    pCategory,
                    pOffer,
                    pStatus
                })
                editProduct.exec(err => {
                    if (err) console.log(err);
                    return res.json({ success: "Product edit successfully" })
                })

            } catch (err) {
                console.log(err)
            }
        }
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
                    for (const img of deleteProductObj.pImages) {
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

    async getSingleProduct(req, res) {
        let { pId } = req.body
        if (!pId) {
            return res.json({ error: "All filled must be required" })
        } else {
            try {
                let singleProduct = await productModel.findById(pId).populate('pCategory', 'cName').populate('pRatingsReviews.user', 'name email userImage')
                if (singleProduct) {
                    return res.json({ Product: singleProduct })
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    async getProductByCategory(req, res) {
        let { catId } = req.body
        if (!catId) {
            return res.json({ error: "All filled must be required" })
        } else {
            try {
                let products = await productModel.find({ pCategory: catId }).populate('pCategory', 'cName')
                if (products) {
                    return res.json({ Products: products })
                }
            } catch (err) {
                return res.json({ error: "Search product wrong" })
            }
        }
    }

    async getProductByPrice(req, res) {
        let { price } = req.body
        if (!price) {
            return res.json({ error: "All filled must be required" })
        } else {
            try {
                let products = await productModel.find({ pPrice: { $lt: price } }).populate('pCategory', 'cName').sort({ pPrice: -1 })
                if (products) {
                    return res.json({ Products: products })
                }
            } catch (err) {
                return res.json({ error: "Filter product wrong" })
            }
        }
    }

    async getWishProduct(req, res) {
        let { productArray } = req.body
        if (productArray.length === 0) {
            return res.json({ error: "All filled must be required" })
        } else {
            try {
                let wishProducts = await productModel.find({ _id: { $in: productArray } });
                if (wishProducts) {
                    return res.json({ Products: wishProducts })
                }
            } catch (err) {
                return res.json({ error: "Filter product wrong" })
            }
        }
    }

    async getCartProduct(req, res) {
        let { productArray } = req.body
        if (productArray.length === 0) {
            return res.json({ error: "All filled must be required" })
        } else {
            try {
                let cartProducts = await productModel.find({ _id: { $in: productArray } });
                if (cartProducts) {
                    return res.json({ Products: cartProducts })
                }
            } catch (err) {
                return res.json({ error: "Cart product wrong" })
            }
        }
    }


    async postAddReview(req, res) {
        let { pId, uId, rating, review } = req.body
        if (!pId || !rating || !review || !uId) {
            return res.json({ error: "All filled must be required" })
        } else {
            let checkReviewRatingExists = await productModel.findOne({ _id: pId })
            if (checkReviewRatingExists.pRatingsReviews.length > 0) {
                checkReviewRatingExists.pRatingsReviews.map((item) => {
                    if (item.user === uId) {
                        return res.json({ error: "Your already reviewd the product" })
                    } else {
                        try {
                            let newRatingReview = productModel.findByIdAndUpdate(pId, {
                                $push: { pRatingsReviews: { review: review, user: uId, rating: rating }, }
                            })
                            newRatingReview.exec((err, result) => {
                                if (err) {
                                    console.log(err);
                                }
                                return res.json({ success: "Thanks for your review" })
                            })
                        } catch (err) {
                            return res.json({ error: "Cart product wrong" })
                        }
                    }
                })
            } else {
                try {
                    let newRatingReview = productModel.findByIdAndUpdate(pId, {
                        $push: { pRatingsReviews: { review: review, user: uId, rating: rating }, }
                    })
                    newRatingReview.exec((err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        return res.json({ success: "Thanks for your review" })
                    })
                } catch (err) {
                    return res.json({ error: "Cart product wrong" })
                }
            }

        }
    }

    async deleteReview(req, res) {
        let { rId, pId } = req.body
        if (!rId) {
            return res.json({ message: "All filled must be required" })
        } else {
            try {
                let reviewDelete = productModel.findByIdAndUpdate(pId, {
                    $pull: { pRatingsReviews: { _id: rId } }
                })
                reviewDelete.exec((err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    return res.json({ success: "Your review is deleted" })
                })
            } catch (err) {
                console.log(err)
            }
        }
    }

}

const productController = new Product
module.exports = productController