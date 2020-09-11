import React,{Fragment,useState} from 'react';
import {Link} from "react-router-dom";
import {signupReq,alert} from "./auth";

const Signup = (props) => {
	const [values,setValues] = useState({
		name:"",
		email:"",
		password:"",
		confirmPassword:"",
		error:"",
		success:false
	})
	
	const formSubmit = async (e)=> {
		e.preventDefault();
		setValues({...values,error:"",success:false})

		// Password does't match error
		if(values.confirmPassword !== values.password){
			setValues({...values,error:"Password doesn't match",password:"",confirmPassword:""})
			return setValues
		}

		try{
			// It return a promise
			let data = await signupReq(values)
			if(data.error){
				setValues({...values,error:data.error,password:"",confirmPassword:""});
			}else if(data.success){
				setValues({...values,success:data.success,name:"",password:"",email:"",confirmPassword:""})
			}
		}catch{
			setValues({...values,error:"Server error. try again",success:false})
		}
	}


  return (
  	<Fragment>
	    <div className="container mt-3">
			<div className="col-md-6 offset-md-3 shadow p-md-5 p-sm-3 p-3">
				<form onSubmit={e=> formSubmit(e)}>
					<div><h3 className="font-weight-light">Signup | Hayroo</h3></div>
					<hr/>
					{values.error.length >0 ? alert(values.error,"warning") : ""}
					{values.success ? alert(values.success,"success"): ""}
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input value={values.name} onChange={e=> setValues({...values,name:e.target.value})} type="text" className="form-control" name="name" id="name" />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input value={values.email} onChange={e=> setValues({...values,email:e.target.value})} type="email" className="form-control" name="email" id="email" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input value={values.password} onChange={e=> setValues({...values,password:e.target.value})} type="password" className="form-control" name="password" id="password" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Confirm Password</label>
						<input value={values.confirmPassword} onChange={e=> setValues({...values,confirmPassword:e.target.value})} type="password" className="form-control" name="confirmPassword" id="confirmPassword" />
					</div>
					<button type="submit" class="btn customBtn btn-primary btn-block mb-1">SIGNUP NOW</button>
					<Link className="linkTag"  to="/signin"> Have account? Signin here </Link>
					<Link className="d-block" to="/">Goto home</Link>
				</form>
			</div>
	    </div>
  	</Fragment>
  )
}

export default Signup;