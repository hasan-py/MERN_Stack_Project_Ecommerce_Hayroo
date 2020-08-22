import React,{Fragment} from 'react';
import {Footer,ProductCard} from "./partials";
import {Navber} from "./partials";

const ProductDetail = (props) => {
  return (
    <Fragment>
    <Navber/>  
    	<div className="container">
			<div className="row">
				<div className="col-md-6">
					<img style={{ height:"500px;", objectFit:"cover" }} src="https://mms-images-secure-prod.imgix.net/https%3A%2F%2Fmms-images.out.customink.com%2Fmms%2Fimages%2Fcatalog%2F69103847929597d5884171ee512a2db7%2Fcolors%2F15007%2Fviews%2Falt%2Ffront_medium_extended.png%3FautoNegate%3D1%26digest%3D0000000013%26placeMax%3D1%26placeMaxPct%3D0.8%26placeUseProduct%3D1%26placeUseView%3Dfront%26design%3Ddjn0-00by-wu36?w=412&h=470&fit=fill&dpr=1&bg=ffffff&fm=pjpg&trim=auto&trimmd=0&q=39&auto=compress&ixlib=js-2.1.0&s=c5119b0b2a150fbdfdbf40e8124a08ff" alt=""/>
				</div>
				<div style={{ lineHeight:"3.0rem" }} className="col-md-6">
					<h1>Product Name</h1>
					<div>Rating: 2421543</div>
					<div>Review: 23</div>
					<div>
						<button type="button" class="btn btn-outline-dark">Shipping 24 days offer</button>
					</div>
					<div className="mb-3">Short Descriptions</div>
					<div>
						<button type="button" class="btn customBtn btn-primary btn-block customShadow">Add to cart</button>
					</div>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col-md-6 mb-3">
					<form action="">
						<label htmlFor="reviewBody">Your Review</label>
						<textarea className="form-control" name="reviewBody" placeholder="Type something about the product..." id="reviewBody" cols="5" rows="3"></textarea>
						<button className="btn btn-sm customBtn customShadow btn-dark mt-3">Submit</button>
					</form>
				</div>
				<div className="col-md-6 mb-3">
					<h4>Reviews</h4>
					<hr/>
					<div className="row mb-3">
						<div>
							<div className="col-md-12">
								Username
							</div>
							<div className="col-md-12">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quaerat, expedita quibusdam et esse repudiandae asperiores magnam nesciunt. Sequi sed quam quaerat, ipsum eveniet nulla, natus in laboriosam vitae nemo!
							</div>
							<div className="col-md-12">
								Rating 4 Star
							</div>
						</div>
					</div>
					<div className="row mb-3">
						<div>
							<div className="col-md-12">
								Username
							</div>
							<div className="col-md-12">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quaerat, expedita quibusdam et esse repudiandae asperiores magnam nesciunt. Sequi sed quam quaerat, ipsum eveniet nulla, natus in laboriosam vitae nemo!
							</div>
							<div className="col-md-12">
								Rating 4 Star
							</div>
						</div>
					</div>
					<div className="row mb-3">
						<div>
							<div className="col-md-12">
								Username
							</div>
							<div className="col-md-12">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quaerat, expedita quibusdam et esse repudiandae asperiores magnam nesciunt. Sequi sed quam quaerat, ipsum eveniet nulla, natus in laboriosam vitae nemo!
							</div>
							<div className="col-md-12">
								Rating 4 Star
							</div>
						</div>
					</div>
				</div>
			</div>
			<h2 className="text-center">Recommended Product</h2>
			<br/>
			<ProductCard/>
    	</div>
    	<Footer/>
    </Fragment>
  )
}

export default ProductDetail;