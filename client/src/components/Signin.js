import React, { Fragment, useState } from 'react';
import { Link,useHistory } from "react-router-dom";
import { signinReq, alert, authenticate } from "./auth";

const Signin = (props) => {
	const history = useHistory();
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false
    })

    const formSubmit = async (e) => {
        e.preventDefault();
        setValues({ ...values, error: "", loading: true });
        try {
            let data = await signinReq(values);
            if (data.error) {
                setValues({ ...values, loading: false, error: data.error, password: "" })
            } else if (data.success) {
                setValues({ email: "", loading: false, error: "", password: "" })
                authenticate(data,()=>{
                	history.push("/")
                })
                console.log(data);
            }
        } catch {
            console.log("Something went wrong!!");
        }

    }

    if (values.loading) {
        return (
            <div style={{ height:"700px"}} className="d-flex justify-content-center align-items-center">			
	    		<div className="spinner-grow text-warning" role="status">
				  <span className="sr-only">Loading...</span>
				</div>
    		</div>
        )
    }
    return (
        <Fragment>	
	    <div style={{ marginBottom:"300px" }} className="container mt-5">
			<div className="col-md-6 offset-md-3 shadow p-md-5 p-sm-3 p-3">
				<form onSubmit={e=> formSubmit(e)} >
					<div><h3 className="font-weight-light">Signin | Hayroo</h3></div>
					<hr/>
					{values.error.length >0 ? alert(values.error,"warning") : ""}
					<div className="form-group">
						<label htmlFor="emailPhone">Email or phone number</label>
						<input values={values.email} onChange={e=> setValues({...values,email:e.target.value})} type="email" className="form-control" id="emailPhone" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input values={values.password} onChange={e=> setValues({...values,password:e.target.value})} type="password" className="form-control" id="password" />
					</div>
					<button type="submit" class="btn customBtn btn-primary btn-block mb-1">SIGNIN</button>
					<Link className="linkTag" to="/signup"> Haven't account? Singup here </Link>
					<Link className="d-block" to="/">Goto home</Link>
				</form>
			</div>
	    </div>
  	</Fragment>
    )
}

export default Signin;