import React,{Fragment} from 'react';
import {Footer} from "./partials";

const Signin = (props) => {
  return (
  	<Fragment>	
	    <div style={{ marginBottom:"300px" }} className="container mt-3">
			<div className="col-md-6 offset-md-3 shadow p-md-5 p-sm-3 p-3">
				<form action="">
					<div><h3 className="font-weight-light">Signin | Hayroo</h3></div>
					<hr/>
					<div className="form-group">
						<label htmlFor="emailPhone">Email or phone number</label>
						<input type="text" className="form-control" name="emailPhone" id="emailPhone" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" className="form-control" name="password" id="password" />
					</div>
					<button type="button" class="btn customBtn btn-primary btn-block mb-1">SIGNIN</button>
					<a className="linkTag" href="/signup"> Haven't account? Singup here </a>
				</form>
			</div>
	    </div>
	    <Footer/>
  	</Fragment>
  )
}

export default Signin;