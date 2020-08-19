const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const attributeValueSchema = new mongoose.Schema({
    attributeName:{
        type:ObjectId,
        ref:"attributes"
    },
    aValue: {
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

const attributeValueModel = mongoose.model("attributeValues", attributeValueSchema);
module.exports = attributeValueModel;