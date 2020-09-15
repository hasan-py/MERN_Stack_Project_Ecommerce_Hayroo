import React, { Fragment } from 'react';
import "./index.css"
import { Link, useHistory, Redirect } from "react-router-dom";
import { isAuthenticate } from "../auth";

const Navber = (props) => {
    const history = useHistory();
    const logout = () => {
        if(localStorage.getItem("jwt")){
			localStorage.removeItem("jwt")
		}
        history.push('/signin')
    }
    return (
        <Fragment>
    	<nav class="navbar navbar-expand-lg topbar">
		  <div className="container">
			  <Link style={{ fontSize:"30px" }} class="navbar-brand" to="/"><span className="logo">Hay</span><strong>roo</strong></Link>
			  <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarNav">
			    <ul class="navbar-nav ml-lg-auto">
			      <li class="nav-item mr-lg-4 my-2">
			        <i class="material-icons">search</i>
			      </li>
			      <li class="nav-item mr-lg-4 my-2 d-flex flex-row">
			        <a href="#">
			        <i class="material-icons">add_shopping_cart</i>
			        </a>
			        <strong style={{ color:"#FF9900",fontSize:"12px" }}>10</strong>
			      </li>
			      {
			      	!isAuthenticate() && (
			      		<Fragment>
			      			<li>
						      <Link to="/signin">Signin</Link>
						    </li>
						    <li>
						      <Link to="/signin">Signin</Link>
						    </li>
			      		</Fragment>
			      	)
			      }
			      { isAuthenticate() && <li onClick={e=> logout()} style={{ cursor:"pointer" }}>Logout</li> }
			   </ul>
			  </div>
		  </div>
		</nav>
		<nav class="navbar navbar-expand-lg bg-light text-dark customShadow mb-3">
		  <div className="container">
			  <div class="collapse navbar-collapse" id="navbarNav">
			    <ul class="navbar-nav">
					<li>
						<Link className="nav-item btn btn-light" to="/product">
							Product
						</Link>
					</li>
					<li>
						<Link className="nav-item btn btn-light" to="/product-detail">
							ProductDetails
						</Link>
					</li>
			   </ul>
			  </div>
		  </div>
		</nav>
    </Fragment>
    )
}

export default Navber;