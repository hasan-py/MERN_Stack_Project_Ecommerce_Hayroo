import axios from 'axios'
const apiURL = process.env.REACT_APP_API_URL

export const wishListProducts = async () => {
	let wishListProductArray = JSON.parse(localStorage.getItem("wishList"))
    try {
        let res = await axios.post(`${apiURL}/api/product/wish-product`,{wishListProductArray})
        return res.data;
    } catch (error) {
        console.log(error);
    }
}