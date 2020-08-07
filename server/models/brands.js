const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const brandSchema = new mongoose.Schema({
    bName: {
        type: String,
        required: true
    },
    bDescription: {
        type: String,
        required: true
    },
    bImage: {
        type: Number,
        required: true
    },
    bTotalRating: {
        type: String,
        required: true
    },
    bTotalReview: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

const brandModel = mongoose.model("brands", brandSchema);
module.exports = brandModel;