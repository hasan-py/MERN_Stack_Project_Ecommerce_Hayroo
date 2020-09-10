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
        type: String,
        required: true
    },
    bStatus:{
        type:String,
        required:true
    }
},{timestamps:true})

const brandModel = mongoose.model("brands", brandSchema);
module.exports = brandModel;