const {
    toTitleCase,
    validateEmail
} = require('../config/function');
const bcrypt = require('bcryptjs');
const userModel = require('../models/users');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');

class Auth {

    async isAdmin(req,res){
        let {loggedInUserId} = req.body
        try{        
            let loggedInUserRole = await userModel.findById(loggedInUserId)
            res.json({role:loggedInUserRole.userRole})
        }catch{
            res.status(404)
        }
    }

    async allUser(req,res){
        try{        
            let allUser = await userModel.find({})
            res.json({users:allUser})
        }catch{
            res.status(404)
        }
    }   

    async postSignup(req, res) {
        let { name, email, password, cPassword } = req.body
        let error = {}
        if (!name || !email || !password || !cPassword) {
            error = {...error,name:"Filed must not be empty",email:"Filed must not be empty",password:"Filed must not be empty",cPassword:"Filed must not be empty"}
            return res.json({error})
        }
        if (name.length < 3 || name.length > 25) {
            error = {...error,name:"Name must be 3-25 charecter"}
            return res.json({error})
        } else {
            if (validateEmail(email)) {
                name = toTitleCase(name)
                if (password.length > 255 | password.length < 8) {
                    error = {...error,password:"Password must be 8 charecter",name:"",email:""}
                    return res.json({error})
                } else {
                    // Email & Number exists Logic
                    try {
                        password = bcrypt.hashSync(password, 10)
                        const data = await userModel.findOne({ email: email })
                        if (data) {
                            error = {...error,password:"",name:"",email:"Email already exists"}
                            return res.json({error})
                        } else {
                            let newUser = new userModel({
                                name,
                                email,
                                password
                            })
                            newUser.save()
                                .then(data => {
                                    return res.json({ success: "Account create successfully. Please login" })
                                })
                                .catch(err => { console.log(err) })
                        }
                    } catch (err) {
                        console.log(err)
                    }
                }
            } else {
                error = {...error,password:"",name:"",email:"Email is not valid"}
                return res.json({error})
            }
        }
    }

    async postSignin(req, res) {
        let { email, password } = req.body
        if (!email || !password) {
            return res.json({
                error: "Fields must not be empty"
            })
        }
        try {
            const data = await userModel.findOne({ email: email })
            if (!data) {
                return res.json({
                    error: "Invalid email or password"
                })
            } else {
                const login = await bcrypt.compare(password, data.password)
                if (login) {
                    const token = jwt.sign({ _id: data._id, role:data.userRole }, JWT_SECRET);
                    const encode = jwt.verify(token, JWT_SECRET)
                    return res.json({
                        token: token,
                        user: encode
                    })
                } else {
                    return res.json({
                        error: "Invalid email or password"
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