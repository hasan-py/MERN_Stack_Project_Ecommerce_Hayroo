import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL

const BearerToken = ()=> localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")).token : false
const Headers = ()=> {
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

export const createProduct = async ({ pImage }) => {
    let formData = new FormData();
    formData.append("pImage", pImage)

    try {
        let res = await axios.post(`${apiURL}/api/product/add-product`, formData)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const editProduct = async (cId, des, status) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/edit-product`, { cId: cId, cDescription: des, cStatus: status })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (cId) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/delete-product`, { cId })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}