const { toTitleCase } = require('../config/function');
const subCategoryModel = require("../models/subCategories");

class subCategory {

    async getAllsubCategory(req, res) {
    	try {
            let subCategories = await subCategoryModel.find({}).populate("category","cName cDescription cStatus").sort({ _id: -1 })
            if (subCategories) {
                return res.json({ subCategories })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async postAddsubCategory(req, res) {
    	let { subCname, subCstatus, category } = req.body
        if (!subCname || !subCstatus || !category) {
            return res.json({ message: "All filled must ce required" })
        } else {
            subCname = toTitleCase(subCname)
            try {
                let checksubCategoryExists = await subCategoryModel.findOne({ subCname: subCname })
                if (checksubCategoryExists) {
                    return res.json({ message: "SubCategory's name already exists" })
                } else {
                    let newsubCategory = new subCategoryModel({
                        subCname,
                        subCstatus,
                        category
                    })
                    let save = await newsubCategory.save();
                    if (save) {
                        return res.json({ success: "SubCategory created successfully" })
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    async postEditsubCategory(req, res) {
    	let { subcId , subCstatus, category } = req.body
        if (!subcId || !subCstatus || !category) {
            return res.json({ message: "All filled must be required" })
        }
        try {
            let editsubCategory = subCategoryModel.findByIdAndUpdate(subcId, {
                subCstatus,
                category,
                updated_at: Date.now()
            })
            let edit = await editsubCategory.exec()
            if (edit) {
                return res.json({ message: "SubCategory edit successfully" })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async getDeletesubCategory(req, res) {
    	let { subcId } = req.body
        if (!subcId) {
            return res.json({ message: "All filled must be required" })
        } else {
            try {
                let deleteSubCategory = await subCategoryModel.findByIdAndDelete(subcId)
                if (deleteSubCategory) {
                    return res.json({ success: "subCategory deleted successfully" })
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}

const subCategoryController = new subCategory
module.exports = subCategoryController