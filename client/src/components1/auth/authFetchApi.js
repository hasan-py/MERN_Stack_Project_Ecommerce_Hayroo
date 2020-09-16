const apiURL = process.env.REACT_APP_API_URL

export const isAuthenticate = ()=> {
	if(localStorage.getItem("jwt")){
		return true;
	}
	return false;
}


export const logoutReq = ()=> {
	if(localStorage.getItem("jwt")){
		localStorage.removeItem("jwt");
		return true
	}
	return false;
}

export const loginReq = async ({email,password})=> {
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
