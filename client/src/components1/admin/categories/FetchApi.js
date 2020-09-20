import axios from 'axios';
const apiURL = process.env.REACT_APP_API_URL

export const createCategroy = ({cName,cImage,cDescription,cStatus})=> {
	let formData = new FormData();
	formData.append("cImage",cImage)
	formData.append("cName",cName)
	formData.append("cDescription",cDescription)
	formData.append("cStatus",cStatus)
    const OPTIONS = {
		url:`${apiURL}/api/add-category`,
		method:"POST",
		data:formData,
		headers:{
			"content-type":'application/json'
		}
	}
	axios(OPTIONS)
	.then(res=>{
		console.log(res.data)
		return res.data
	})
	.catch(err=>{
		console.log(err)
	})
}