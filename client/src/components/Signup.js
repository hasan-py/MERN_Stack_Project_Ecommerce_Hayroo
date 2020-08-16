import React,{Fragment} from 'react';
import {Link} from "react-router-dom";

const Signup = (props) => {
  return (
  	<Fragment>
	    <div className="container mt-3">
			<div className="col-md-6 offset-md-3 shadow p-md-5 p-sm-3 p-3">
				<form action="">
					<div><h3 className="font-weight-light">Signup | Hayroo</h3></div>
					<hr/>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" className="form-control" name="name" id="name" />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" className="form-control" name="email" id="email" />
					</div>
					<div className="form-group">
						<label htmlFor="phone">Phone Number</label>
						<input type="number" className="form-control" name="phone" id="phone" />
					</div>
					<div className="form-group">
						<label htmlFor="address">Address</label>
						<input type="text" className="form-control" name="address" id="address" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" className="form-control" name="password" id="password" />
					</div>
					<div className="form-group">
						<label htmlFor="password">Confirm Password</label>
						<input type="confirmPassword" className="form-control" name="confirmPassword" id="confirmPassword" />
					</div>
					<button type="button" class="btn customBtn btn-primary btn-block mb-1">SIGNUP NOW</button>
					<Link className="linkTag"  to="/signin"> Have account? Signin here </Link>
					<Link className="d-block" to="/">Goto home</Link>
				</form>
			</div>
	    </div>
  	</Fragment>
  )
}

export default Signup;