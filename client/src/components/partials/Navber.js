import React,{Fragment} from 'react';
import "./index.css"

const Navber = (props) => {
  return (
    <Fragment>
    	<nav class="navbar navbar-expand-lg topbar">
		  <div className="container">
			  <a class="navbar-brand" href="#">Navbar</a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span style={{ color:"white" }} class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarNav">
			    <ul class="navbar-nav ml-lg-auto">
			      <li class="nav-item active">
			        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Features</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">Pricing</a>
			      </li>
			   </ul>
			  </div>
		  </div>
		</nav>
    </Fragment>
  )
}

export default Navber;