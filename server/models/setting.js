const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
	adminSignup: {
		type: Number
	}
},{timestamps:true})

const settingModel = mongoose.model("settings", settingSchema);
module.exports = settingModel;