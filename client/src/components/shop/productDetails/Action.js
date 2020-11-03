import React from 'react';
import { postAddReview, postDeleteReview } from './FetchApi';
import { isAuthenticate } from '../auth/fetchApi';

export const Alert = (color, text) => <div className={`bg-${color}-200 px-4 py-2 my-2 rounded`}>{text}</div>

export const reviewSubmitHanlder = (fData, setFdata, fetchData) => {
    if (!fData.rating || !fData.review) {
        setFdata({ ...fData, error: "Rating and review must be required" })
    } else if (!isAuthenticate()) {
        setFdata({ ...fData, error: "You must need login to review" })
    } else {
        addReview(fData, setFdata, fetchData)
    }
}

export const deleteReview = async (reviewId, productId, fetchData, setFdata) => {
    try {
        let responseData = await postDeleteReview({ rId: reviewId, pId: productId });
        if (responseData.success) {
            fetchData()
            setFdata({ success: responseData.success })
        } else if (responseData.error) {
            fetchData()
        }
    } catch (error) {
        console.log(error)
    }
}

export const addReview = async (fData, setFdata, fetchData) => {
    let formData = {
        rating: fData.rating,
        review: fData.review,
        pId: fData.pId,
        uId: JSON.parse(localStorage.getItem('jwt')).user._id
    }
    try {
        let responseData = await postAddReview(formData);
        if (responseData.success) {
            setFdata({ ...fData, success: responseData.success, review: "", rating: "" })
            fetchData()
        } else if (responseData.error) {
            setFdata({ ...fData, error: responseData.error, review: "", rating: "" })
            fetchData()
        }
    } catch (error) {
        console.log(error)
    }
}