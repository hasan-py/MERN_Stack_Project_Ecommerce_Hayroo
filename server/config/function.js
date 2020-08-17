const userModel = require("../models/users");

exports.toTitleCase = function(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

exports.validateEmail = function(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    } else {
        return false;
    }

}

exports.emailCheckInDatabase = function(email) {
    user = userModel.findOne({ email: email })
    user.exec((err, data) => {
        if (data) {
            return true;
        } else {
            return false
        }
    })
}

exports.phoneNumberCheckInDatabase = function(phoneNumber) {
    user = userModel.findOne({ phoneNumber: phoneNumber })
    user.exec((err, data) => {
        if (data) {
            return true;
        } else {
            return false;
        }
    })
}