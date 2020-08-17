const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: { unique: true },
        match: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    },
    password: {
        type: String,
        required: true
    },
    userRole: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        index: { unique: true }
    },
    country: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    region: {
        type: String,
        default: null
    },
    userImage: {
        type: String,
        default: "user.png"
    },
    verified: {
        type: String,
        required: true
    },
    secretKey: {
        type: String,
        default: null
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

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;