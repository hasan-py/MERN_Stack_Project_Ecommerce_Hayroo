const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const productSchema = new mongoose.Schema({
    pName: {
        type: String,
        required: true
    },
    pDescription: {
        type: String,
        required: true
    },
    pPrice: {
        type: Number,
        required: true
    },
    pSold: {
        type: Number,
        default:0
    },
    pQuantity: {
        type: Number,
        default:0
    },
    pCategory: {
        type: ObjectId,
        ref: "categories"
    },
    pSubCategory: {
        type: ObjectId,
        ref: "subCategories"
    },
    pBrand: {
        type: ObjectId,
        ref: "brands"
    },
    pImages: {
        type: String,
        required: true
    },
    pOffer: {
        type: String,
        default: null
    },
    pRatings: [{ 
        type: ObjectId,
        ref: "users"
    }],
    pReviews: [{
        review: String,
        user: { type: ObjectId, ref: "users" }
    }],
    pStatus: {
        type: String,
        required: true
    }

},{timestamps:true})

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;