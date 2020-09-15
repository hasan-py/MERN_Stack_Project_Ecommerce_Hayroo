import React from 'react';
const apiURL = process.env.REACT_APP_API_URL

export const alert = (msg, type) => {
    return (<div className={"alert "+"alert-"+type}>{msg}</div>)
}


export const signinReq = async ({ email, password }) => {
    const data = { email, password }
    try {
        let res = await fetch(`${apiURL}/api/signin`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        return res.json()
    } catch {
        console.log("Something went wrong!!");
    }
}

export const signupReq = async ({name,email,password})=> {
	const data = {name,email,password}
	try{
		let res = await fetch(`${apiURL}/api/signup`,{
			method: 'POST',
			headers: {
	            Accept: 'application/json',
	            'Content-Type': 'application/json',
	        },
	        body: JSON.stringify(data)
		})
		return res.json()
	}catch{
		console.log("Something went wrong!!");
	}
}


export const isAuthenticate = ()=> {
	if(typeof window == undefined){
		return false;
	}
	if(localStorage.getItem("jwt")){
		return true
	}else{
		return false;
	}
}