const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const categorySchema = new mongoose.Schema({
    cName: {
        type: String,
        required: true
    },
    cDescription: {
        type: String,
        required: true
    },
    cImage: {
        type: Number,
        required: true
    },
    subCategories: [{ type: ObjectId, ref: "subCategories" }],
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
})

const categoryModel = mongoose.model("categories", categorySchema);
module.exports = categoryModel;