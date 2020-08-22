import React,{Fragment} from 'react';

const ProductCard = (props) => {
  return (
    <Fragment>
		<div className="text-left mt-3"><h4>Category Name</h4></div>
		<hr/>
    	<div className="row">
			<div className="col-md-3 mb-3">
				<div class="card customShadow customCardSize">
				  <img style={{ objectFit:"cover" }} class="card-img-top border" src="https://source.unsplash.com/2FGPidtk00E" alt="Card image cap"/>
				  <div class="card-body">
				    <div>Product Name</div>
				    <div>Price</div>
				    <button className="btn customShadow btn-dark customBtn mt-2">Buy Now</button>
				    <button className="btn customShadow btn-dark customBtn1 mt-2 btn-sm btn-circle ml-2"><i class="material-icons">favorite</i> <span className="badge customBtn1 bg-light text-dark">4</span></button>
				    
				  </div>
				</div>
			</div>
			<div className="col-md-3 mb-3">
				<div class="card customShadow customCardSize">
				  <img style={{ objectFit:"cover" }} class="card-img-top border" src="https://source.unsplash.com/HM-Y497t5CU" alt="Card image cap"/>
				  <div class="card-body">
				  	<div>Product Name</div>
				    <div>Price</div>
				    <button className="btn customShadow btn-dark customBtn mt-2">Buy Now</button>
				    <button className="btn customShadow btn-dark  customBtn1 mt-2 btn-sm btn-circle ml-2"><i class="material-icons">favorite</i> <span className="badge customBtn1 bg-light text-dark">4</span></button>
				  </div>
				</div>
			</div>
			<div className="col-md-3 mb-3">
				<div class="card customShadow customCardSize">
				  <img style={{ objectFit:"cover" }} class="card-img-top border" src="https://source.unsplash.com/QhF3YGsDrYk" alt="Card image cap"/>
				  <div class="card-body">
					<div>Product Name</div>
				    <div>Price</div>
				    <button className="btn customShadow btn-dark customBtn mt-2">Buy Now</button>
				    <button className="btn customShadow btn-dark customBtn1 mt-2 btn-sm btn-circle ml-2"><i class="material-icons">favorite</i> <span className="badge customBtn1 bg-light text-dark">4</span></button>
				  </div>
				</div>
			</div>
			<div className="col-md-3 mb-3">
				<div class="card customShadow viewAllProdcutCard customCardSize">
				  <div class="card-body text-center">
				  <h3>Category Name</h3>
				  	<button type="button" class="btn customShadow btn-dark customShadow customBtn">View All</button>
				    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  </div>
				</div>
			</div>
    	</div>
    </Fragment>
  )
}

export default ProductCard;