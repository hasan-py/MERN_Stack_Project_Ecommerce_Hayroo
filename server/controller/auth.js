const {
    toTitleCase,
    validateEmail,
    emailCheckInDatabase
} = require('../config/function');
const bcrypt = require('bcryptjs');
const userModel = require('../models/users');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');

class Auth {
    async allUser(req,res){
        try{        
            let allUser = await userModel.find({})
            res.json({users:allUser})
        }catch{
            res.status(404)
        }
    }   

    async postSignup(req, res) {
        let { name, email, password } = req.body
        if (!name || !email || !password ) {
            return res.status(400).json({ error: "please fill all the fields" })
        }
        if (name.length < 3 || name.length > 25) {
            return res.status(400).json({ error: "Name must be 3-25 charecter" })
        } else {
            if (validateEmail(email)) {
                name = toTitleCase(name)
                if (password.length > 255 | password.length < 8) {
                    return res.status(400).json({ error: "Password must be 8 charecter" })
                } else {
                    // Email & Number exists Logic
                    try {
                        password = bcrypt.hashSync(password, 10)
                        const data = await userModel.findOne({ email: email })
                        if (data) {
                            return res.status(400).json({ error: "Email already exists" })
                        } else {
                            let newUser = new userModel({
                                name,
                                email,
                                password
                            })
                            newUser.save()
                                .then(data => {
                                    return res.status(200).json({ success: "Account create successfully" })
                                })
                                .catch(err => { console.log(err) })
                        }
                    } catch (err) {
                        console.log(err)
                    }
                }
            } else {
                res.status(400).json({ error: "Invalid email or password" })
            }
        }
    }

    async postSignin(req, res) {
        let { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                error: "Please insert all filled"
            })
        }
        try {
            const data = await userModel.findOne({ email: email })
            if (!data) {
                return res.status(400).json({
                    error: "Email or password invalid"
                })
            } else {
                const login = await bcrypt.compare(password, data.password)
                if (login) {
                    const token = jwt.sign({ _id: data._id }, JWT_SECRET);
                    const encode = jwt.verify(token, JWT_SECRET)
                    return res.status(200).json({
                        success: "Login successfully",
                        token: token,
                        user: encode
                    })
                } else {
                    return res.status(400).json({
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