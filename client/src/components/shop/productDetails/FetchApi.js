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

export const getSingleProduct = async (pId) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/single-product`,{pId:pId})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const postAddReview = async (formData) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/add-review`,formData)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}