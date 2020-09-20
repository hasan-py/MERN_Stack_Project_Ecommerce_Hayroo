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
        type: String,
    },
    cStatus:{
        type:String,
        required: true
    }
},{timestapms:true})

const categoryModel = mongoose.model("categories", categorySchema);
module.exports = categoryModel;