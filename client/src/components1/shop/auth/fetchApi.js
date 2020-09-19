const apiURL = process.env.REACT_APP_API_URL

export const isAuthenticate = ()=> localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")) : false

export const isAdmin = ()=> localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")).user.role : false

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

export const signupReq = async ({name,email,password,cPassword})=> {
	const data = { name, email, password, cPassword }
    try {
        let res = await fetch(`${apiURL}/api/signup`, {
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
