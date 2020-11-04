const fs = require('fs');

class Customize {

    async uploadSlideImage(req, res) {
        try {
            let Categories = await categoryModel.find({}).sort({ _id: -1 })
            if (Categories) {
                return res.json({ Categories })
            }
        } catch (err) {
            console.log(err)
        }
    }

}

const customizeController = new Customize
module.exports = customizeController