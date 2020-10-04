const userModel = require('../models/users');
var braintree = require('braintree')
require('dotenv').config();

var gateway = new braintree.BraintreeGateway({
    environment:  braintree.Environment.Sandbox,
    merchantId:   process.env.BRAINTREE_MERCHANT_ID,
    publicKey:    process.env.BRAINTREE_PUBLIC_KEY,
    privateKey:   process.env.BRAINTREE_PRIVATE_KEY
});

class brainTree {

    ganerateToken(req,res) {
        let {uId} = req.body
        gateway.clientToken.generate({},(err,response)=> {
            if(err) {
                return res.json(err)
            }
            return res.json(response)
        })
    }
}

const brainTreeController = new brainTree
module.exports = brainTreeController