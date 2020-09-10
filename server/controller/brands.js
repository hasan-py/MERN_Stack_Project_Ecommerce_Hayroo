const brandModel = require("../models/brands");
const { toTitleCase } = require('../config/function');

class Brand {

    async getAllBrand(req, res) {
        try {
            let Brands = await brandModel.find({}).sort({ _id: -1 })
            if (Brands) {
                return res.json({ Brands })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async postAddBrand(req, res) {
        let { bName, bDescription, bStatus } = req.body
        let bImage = req.file.filename
        if (!bName || !bDescription || !bImage || !bStatus) {
            return res.json({ message: "All filled must be required" })
        } else {
            bName = toTitleCase(bName)
            try {
                let checkBrandExists = await brandModel.findOne({ bName: bName })
                if (checkBrandExists) {
                    return res.json({ message: "Brand's name already exists" })
                } else {
                    let newBrand = new brandModel({
                        bName,
                        bDescription,
                        bImage,
                        bStatus
                    })
                    let save = await newBrand.save();
                    if (save) {
                        return res.json({ success: "Brand created successfully" })
                    }
                }
            } catch (err) {
                console.log(err)
            }

        }
    }

    async postEditBrand(req, res) {
        let { bId, bDescription, bStatus } = req.body
        if (!bId || !bDescription || !bStatus) {
            return res.json({ message: "All filled must be required" })
        }
        try {
            let editBrand = brandModel.findByIdAndUpdate(bId, {
                bDescription,
                bStatus,
                updatedAt: Date.now()
            })
            let edit = await editBrand.exec()
            if (edit) {
                return res.json({ message: "Brand edit successfully" })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async getDeleteBrand(req, res) {
        let { bId } = req.body
        if (!bId) {
            return res.json({ message: "All filled must be required" })
        } else {
            try {
                let deleteBrand = await brandModel.findByIdAndDelete(bId)
                if (deleteBrand) {
                    return res.json({ success: "Brand deleted successfully" })
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}

const brandsController = new Brand
module.exports = brandsController