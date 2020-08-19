const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const attributeSchema = new mongoose.Schema({
    aName: {
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

const attributeModel = mongoose.model("attributes", attributeSchema);
module.exports = attributeModel;