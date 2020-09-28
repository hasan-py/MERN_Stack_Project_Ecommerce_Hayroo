const attributeValueModel = require("../models/attributeValues");

class attributeValues {

    async getAllAttributeValues(req, res) {
        try {
            let attributeValues = await attributeValueModel.find({}).populate("attributeName", "aName").sort({ _id: -1 })
            if (attributeValues) {
                return res.json({ attributeValues })
            }
        } catch (err) {
            console.log(err)
        }
    }

    async postAddAttributeValues(req, res) {
        let { attributeName, aValue } = req.body
        if (!aValue) {
            return res.json({ message: "All filled must be required" })
        } else {
            try {
                let checkAttributeValuesExists = await attributeValueModel.findOne({ aValue: aValue })
                if (checkAttributeValuesExists) {
                    return res.json({ message: "AttributeValue's name already exists" })
                } else {
                    let newattributeValues = new attributeValueModel({
                        aValue,
                        attributeName
                    })
                    let save = await newattributeValues.save();
                    if (save) {
                        return res.json({ success: "AttributeValue created successfully" })
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    async postEditAttributeValues(req, res) {
        let { avId, aValue, attributeName } = req.body
        if (!avId || !aValue) {
            return res.json({ message: "All filled must be required" })
        }
        try {
            let currentattributeValues = await attributeValueModel.findOne({ _id: avId })
            if (currentattributeValues.aValue === aValue) {
                let editattributeValues = attributeValueModel.findByIdAndUpdate(avId, {
                    aValue,
                    attributeName,
                    updatedAt: Date.now()
                })
                let edit = await editattributeValues.exec()
                if (edit) {
                    return res.json({ message: "AttributeValue edit successfully" })
                }
            } else {
                let checkAttributeValuesExists = await attributeValueModel.findOne({ aValue: aValue })
                if (checkAttributeValuesExists) {
                    return res.json({ message: "AttributeValue's name already exists" })
                } else {
                    let editattributeValues = attributeValueModel.findByIdAndUpdate(avId, {
                        aValue,
                        attributeName,
                        updatedAt: Date.now()
                    })
                    let edit = await editattributeValues.exec()
                    if (edit) {
                        return res.json({ message: "AttributeValue edit successfully" })
                    }
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    async getDeleteAttributeValues(req, res) {
        let { avId } = req.body
        if (!avId) {
            return res.json({ message: "All filled must be required" })
        } else {
            try {
                let deleteAttributeValues = await attributeValueModel.findByIdAndDelete(avId)
                if (deleteAttributeValues) {
                    return res.json({ success: "attributeValues deleted successfully" })
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}

const attributeValuesController = new attributeValues
module.exports = attributeValuesController