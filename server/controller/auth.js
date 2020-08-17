const {
    toTitleCase,
    validateEmail,
} = require('../config/function');
const bcrypt = require('bcryptjs');
const userModel = require('../models/users');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');

class Auth {

    async postSignup(req, res) {
        let { name, email, password, phoneNumber } = req.body
        if (!name || !email || !password || !phoneNumber) {
            return res.json({ message: "please fill all the fields" })
        } else {
            if (name.length < 3 || name.length > 25) {
                return res.json({ message: "Name must be 3-25 charecter" })
            } else {
                if (validateEmail(email)) {
                    name = toTitleCase(name)
                    if (password.length > 255 | password.length < 8) {
                        return res.json({ message: "Password must be 8 charecter" })
                    } else {
                        // Email & Number exists Logic
                        try {
                            password = bcrypt.hashSync(password, 10)
                            const data = await userModel.findOne({ email: email })
                            if (data) {
                                return res.json({ message: "Email already exists" })
                            } else {
                                const data = await userModel.findOne({ phoneNumber: phoneNumber })
                                if (data) {
                                    return res.json({ message: "Phone number already exists" })
                                } else {
                                    let newUser = new userModel({
                                        name,
                                        email,
                                        password,
                                        phoneNumber,
                                        userRole: "admin",
                                        verified: false,
                                    })
                                    newUser.save()
                                        .then(data => {
                                            return res.json({ success: "Account create successfully" })
                                        })
                                        .catch(err => { console.log(err) })
                                }
                            }
                        } catch (err) {
                            console.log(err)
                        }
                    }
                } else {
                    res.json({ message: "Please insert a valid email" })
                }
            }
        }
    }

    async postSignin(req, res) {
        let { email, password } = req.body
        if (!email || !password) {
            return res.json({
                error: "Please insert all filled"
            })
        }
        try {
            const data = await userModel.findOne({ email: email })
            if (!data) {
                return res.json({
                    error: "Email or password invalid"
                })
            } else {
                const login = await bcrypt.compare(password, data.password)
                if (login) {
                    const token = jwt.sign({ _id: data._id }, JWT_SECRET);
                    const encode = jwt.verify(token, JWT_SECRET)
                    return res.json({
                        message: "Login successfully",
                        token: token,
                        user: encode
                    })
                } else {
                    return res.json({
                        error: "Email or password invalid"
                    })
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
}

const authController = new Auth
module.exports = authController