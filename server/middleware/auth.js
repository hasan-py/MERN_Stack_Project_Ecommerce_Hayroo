const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');

exports.loginCheck = (req, res, next) => {
    try {
        let token = req.headers.token
        token = token.replace("Bearer ", "")
        decode = jwt.verify(token, JWT_SECRET)
        req.userDetails = decode
        next()
    } catch (err) {
        res.json({
            error: "You must be logged in"
        })
    }
}