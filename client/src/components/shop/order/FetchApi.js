import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL

export const getBrainTreeToken = async () => {
    let uId = JSON.parse(localStorage.getItem('jwt')).user._id
    try {
        let res = await axios.post(`${apiURL}/api/braintree/get-token`,{uId:uId})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}