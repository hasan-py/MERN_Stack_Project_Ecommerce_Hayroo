import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL

const BearerToken = () => localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")).token : false
const Headers = () => {
    return {
        headers: {
            'token': `Bearer ${BearerToken()}`
        }
    }
}

export const getAllProduct = async () => {
    try {
        let res = await axios.get(`${apiURL}/api/product/all-product`)
        return res.data;
    } catch (error) {
        console.log(error);
    }

}

export const createPorductImage = async ({ pImage }) => {
    /* Most important part for uploading multiple image  */
    let formData = new FormData();
    for (const file of pImage) {
        formData.append("pImage", file)
    }
    /* Most important part for uploading multiple image  */
}

export const createProduct = async ({ pName, pDescription, pImage, pStatus, pCategory, pQuantity, pPrice, pOffer }) => {
    /* Most important part for uploading multiple image  */
    let formData = new FormData();
    for (const file of pImage) {
        formData.append("pImage", file)
    }
    /* Most important part for uploading multiple image  */
    formData.append("pName", pName)
    formData.append("pDescription", pDescription)
    formData.append("pStatus", pStatus)
    formData.append("pCategory", pCategory)
    formData.append("pQuantity", pQuantity)
    formData.append("pPrice", pPrice)
    formData.append("pOffer", pOffer)

    try {
        let res = await axios.post(`${apiURL}/api/product/add-product`, formData)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const editProduct = async (product) => {
    console.log(product);
    try {
        let res = await axios.post(`${apiURL}/api/product/edit-product`, {
            pId: product.pId,
            pName: product.pName,
            pDescription: product.pDescription,
            pStatus: product.pStatus,
            pCategory: product.pCategory,
            pQuantity: product.pQuantity,
            pPrice: product.pPrice,
            pOffer: product.pOffer,
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (pId) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/delete-product`, { pId })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const productByCategory = async (catId) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/product-by-category`, { catId })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const productByPrice = async (price) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/product-by-price`, { price })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}