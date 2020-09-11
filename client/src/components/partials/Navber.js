import React,{Fragment} from 'react';
import "./index.css"
import {Link,useHistory,Redirect} from "react-router-dom";
import {isAuthenticate,signout} from "../auth";

const Navber = (props) => {
	const history = useHistory();
	const isAuth = localStorage.getItem("jwt")
	const logout = ()=> {
		signout();
		return (
			<Redirect to="/" />
		)
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
			      <li class="nav-item mr-lg-4 my-2">
			        <div class="dropdown">
					  <a style={{ background:"#000000", border:"none" }} class="btn btn-dark txt-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    More
					  </a>
					  <div class="dropdown-menu bg-dark cutomColor" aria-labelledby="dropdownMenuLink">
					    { 
					    	isAuth && <a className="dropdown-item" onClick={e=> logout()}>Logout</a> 
					    }
					    {
					    	!isAuth &&	(<Fragment>
						    		<Link className="dropdown-item" to="/signin">Signin</Link>
						    		<Link className="dropdown-item" to="/signup">Signup</Link>
					    		</Fragment>)
					    }
					    
					  </div>
					</div>
			      </li>
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
						<Link className="nav-item btn btn-light" to="/product/details">
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