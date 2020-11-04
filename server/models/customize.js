const mongoose = require('mongoose');

const customizeSchema = new mongoose.Schema({
    slideImage:{
        type: String,
    }
},{timestamps:true})

const customizeModel = mongoose.model("customizes", customizeSchema);
module.exports = customizeModel;