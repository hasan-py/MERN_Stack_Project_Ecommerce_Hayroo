const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const orderSchema = new mongoose.Schema({
    allProduct: [{
        id: { type: ObjectId, ref: "products" },
        quantitiy: Number
    }],
    user: {
        type: ObjectId,
        ref: "users",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "Not processed",
        enum: ["Not processed", "Processing", "Shipped", "Delivered", "Cancelled"]
    }
}, { timestamps: true })

const orderModel = mongoose.model("orders", orderSchema);
module.exports = orderModel;