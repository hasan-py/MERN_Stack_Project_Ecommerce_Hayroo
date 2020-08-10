import React,{Fragment} from 'react';
import "./index.css"

const Navber = (props) => {
  return (
    <Fragment>
    	<nav class="navbar navbar-expand-lg topbar">
		  <div className="container">
			  <a style={{ fontSize:"30px" }} class="navbar-brand" href="#"><span className="logo">Hoo</span><strong>wind</strong></a>
			  <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarNav">
			    <ul class="navbar-nav ml-lg-auto">
			      <li class="nav-item mr-lg-4">
			        <i class="material-icons">search</i>
			      </li>
			      <li class="nav-item mr-lg-5">
			        <a href="#">
			        <i class="material-icons">add_shopping_cart</i> <strong>10</strong></a>
			      </li>
			      <li class="nav-item mr-lg-4">
			        <div class="dropdown">
					  <a class="btn btn-light text-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    More
					  </a>
					  <div class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuLink">
					    <a class="dropdown-item" href="#">Login</a>
					    <a class="dropdown-item" href="#">Seller Login</a>
					    <a class="dropdown-item" href="#">Something else here</a>
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
			      <li class="nav-item secondNavItem">
			        <div class="dropdown">
					  <a class="btn btn-light text-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    Mobile & Accessoris
					  </a>

					  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
					    <a class="dropdown-item" href="#">Login</a>
					    <a class="dropdown-item" href="#">Seller Login</a>
					    <a class="dropdown-item" href="#">Something else here</a>
					  </div>
					</div>
			      </li>
			      <li class="nav-item secondNavItem">
			        <div class="dropdown">
					  <a class="btn btn-light text-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    Cloth & Uses Item
					  </a>

					  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
					    <a class="dropdown-item" href="#">Login</a>
					    <a class="dropdown-item" href="#">Seller Login</a>
					    <a class="dropdown-item" href="#">Something else here</a>
					  </div>
					</div>
			      </li>
			      <li class="nav-item secondNavItem">
			        <div class="dropdown">
					  <a class="btn btn-light text-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    Electrnics
					  </a>

					  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
					    <a class="dropdown-item" href="#">Login</a>
					    <a class="dropdown-item" href="#">Seller Login</a>
					    <a class="dropdown-item" href="#">Something else here</a>
					  </div>
					</div>
			      </li>
			   </ul>
			  </div>
		  </div>
		</nav>
    </Fragment>
  )
}

export default Navber;