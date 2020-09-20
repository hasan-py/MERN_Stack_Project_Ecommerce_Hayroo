const { toTitleCase } = require('../config/function');
const categoryModel = require("../models/categories");

class Category {

    async getAllCategory(req, res) {
    	try {
            let Categories = await categoryModel.find({}).sort({ _id: -1 })
            if (Categories) {
                return res.status(200).json({ Categories })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async postAddCategory(req, res) {
    	let { cName, cDescription, cStatus } = req.body
        let cImage = req.file.filename
        console.log(req.file);
        if (!cName || !cDescription || !cStatus || !cImage) {
            return res.status(400).json({ error: "All filled must be required" })
        } else {
            cName = toTitleCase(cName)
            try {
                let checkCategoryExists = await categoryModel.findOne({ cName: cName })
                if (checkCategoryExists) {
                    return res.status(400).json({ error: "Category already exists" })
                } else {
                    let newCategory = new categoryModel({
                        cName,
                        cDescription,
                        cStatus,
                        cImage
                    })
                    let save = await newCategory.save();
                    if (save) {
                        return res.status(200).json({ success: "Category created successfully" })
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    async postEditCategory(req, res) {
    	let { cId, cDescription, cStatus } = req.body
        if (!cId || !cDescription || !cStatus) {
            return res.status(400).json({ error: "All filled must be required" })
        }
        try {
            let editCategory = categoryModel.findByIdAndUpdate(cId, {
                cDescription,
                cStatus,
                updatedAt: Date.now()
            })
            let edit = await editCategory.exec()
            if (edit) {
                return res.status(200).json({ error: "Category edit successfully" })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async getDeleteCategory(req, res) {
    	let { cId } = req.body
        if (!cId) {
            return res.status(400).json({ error: "All filled must be required" })
        } else {
            try {
                let deleteCategory = await categoryModel.findByIdAndDelete(cId)
                if (deleteCategory) {
                    return res.status(200).json({ success: "Category deleted successfully" })
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}

const categoryController = new Category
module.exports = categoryController