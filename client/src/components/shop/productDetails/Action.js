import React from 'react';
import { postAddReview } from './FetchApi';
import { isAuthenticate } from '../auth/fetchApi';

export const Alert = (color,text)=> <div className={`bg-${color}-200 px-4 py-2 my-2 rounded`}>{text}</div>

export const reviewSubmitHanlder = (fData,setFdata)=> {
	if(!fData.rating || !fData.review){
		setFdata({...fData, error:"Rating and review must be required"})
	}else if(!isAuthenticate()) {
		setFdata({...fData, error:"You must need login to review"})
	}else{
		addReview(fData,setFdata)
	}
}

export const addReview = async (fData,setFdata) => {
	let formData = {
		rating:fData.rating,
		review:fData.review,
		pId:fData.pId,
		uId:JSON.parse(localStorage.getItem('jwt')).user._id
	}
	console.log(formData);
    try {
        let responseData = await postAddReview(formData);
        if (responseData.success) {
            setFdata({...fData, success:responseData.success, review:"", rating:""})
        } else if (responseData.error) {
            setFdata({...fData, error:responseData.error, review:"", rating:""})
        }
    } catch (error) {
        console.log(error)
    }
}