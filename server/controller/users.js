const userModel = require("../models/users");

class User {

    async getAllUser(req, res) {
        try {
            let Users = await userModel.find({}).populate('allProduct.id', 'pName pImages pPrice').populate('user', 'name email').sort({ _id: -1 })
            if (Users) {
                return res.json({ Users })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async getSingleUser(req, res) {
        let {uId} = req.body
        if(!uId){
            return res.json({error:"All filled must be required"})
        }else{        
            try {
                let User = await userModel.findById(uId).select('name email phoneNumber userImage updatedAt createdAt')
                if (User) {
                    return res.json({ User })
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    async postAddUser(req, res) {
        let { allProduct, user, amount, transactionId, address, phone } = req.body
        if (!allProduct || !user || !amount || !transactionId || !address || !phone) {
            return res.json({ message: "All filled must be required" })
        } else {
            try {
                let newUser = new userModel({
                    allProduct,
                    user,
                    amount,
                    transactionId,
                    address,
                    phone
                })
                let save = await newUser.save();
                if (save) {

                    return res.json({ success: "User created successfully" })
                }
            } catch (err) {
                return res.json({ error: error })
            }
        }
    }

    async postEditUser(req, res) {
        let { uId, name, phoneNumber } = req.body
        if (!uId || !name || !phoneNumber) {
            return res.json({ message: "All filled must be required" })
        } else {
            let currentUser = userModel.findByIdAndUpdate(uId, { name: name, phoneNumber:phoneNumber, updatedAt: Date.now() })
            currentUser.exec((err, result) => {
                if (err) console.log(err);
                return res.json({ success: "User updated successfully" })
            })
        }
    } 

    async getDeleteUser(req, res) {
        let { oId, status } = req.body
        if (!oId || !status) {
            return res.json({ message: "All filled must be required" })
        } else {
            let currentUser = userModel.findByIdAndUpdate(oId, { status: status, updatedAt: Date.now() })
            currentUser.exec((err, result) => {
                if (err) console.log(err);
                return res.json({ success: "User updated successfully" })
            })
        }
    }
}

const ordersController = new User
module.exports = ordersController