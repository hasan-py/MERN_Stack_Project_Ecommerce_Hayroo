class Auth {
    getSignup(req, res) {
        return res.json("HEllo world")
    }
}

const authController = new Auth
module.exports = authController