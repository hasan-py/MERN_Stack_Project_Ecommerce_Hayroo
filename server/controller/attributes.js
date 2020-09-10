const { toTitleCase } = require('../config/function');
const attributeModel = require("../models/attributes");

class Attribute {

    async getAllAttribute(req, res) {
    	try {
            let Attributes = await attributeModel.find({}).sort({ _id: -1 })
            if (Attributes) {
                return res.json({ Attributes })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async postAddAttribute(req, res) {
    	let { aName } = req.body
        if (!aName) {
            return res.json({ message: "All filled must be required" })
        } else {
            aName = toTitleCase(aName)
            try {
                let checkAttributeExists = await attributeModel.findOne({ aName: aName })
                if (checkAttributeExists) {
                    return res.json({ message: "Attribute already exists" })
                } else {
                    let newAttribute = new attributeModel({
                        aName
                    })
                    let save = await newAttribute.save();
                    if (save) {
                        return res.json({ success: "Attribute created successfully" })
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    async postEditAttribute(req, res) {
    	let { aId, aName} = req.body
        aName = toTitleCase(aName)
        if (!aId || !aName) {
            return res.json({ message: "All filled must be required" })
        }
        try {
            let currentAttribute = attributeModel.findOne({_id:aId})
            if(currentAttribute.aName === aName){
                let editAttribute = attributeModel.findByIdAndUpdate(aId, {
                    aName,
                    updatedAt: Date.now()
                })
                let edit = await editAttribute.exec()
                if (edit) {
                    return res.json({ message: "Attribute edit successfully" })
                }
            }else{
                let checkAttributeExists = await attributeModel.findOne({ aName: aName })
                if (checkAttributeExists) {
                    return res.json({ message: "Attribute's name already exists" })
                } else {
                    let editAttribute = attributeModel.findByIdAndUpdate(aId, {
                        aName,
                        updatedAt: Date.now()
                    })
                    let edit = await editAttribute.exec()
                    if (edit) {
                        return res.json({ message: "Attribute edit successfully" })
                    }
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    async getDeleteAttribute(req, res) {
    	let { aId } = req.body
        if (!aId) {
            return res.json({ message: "All filled must be required" })
        } else {
            try {
                let deleteAttribute = await attributeModel.findByIdAndDelete(aId)
                if (deleteAttribute) {
                    return res.json({ success: "Attribute deleted successfully" })
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}

const attributeController = new Attribute
module.exports = attributeController