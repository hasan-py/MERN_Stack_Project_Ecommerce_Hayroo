import React,{Fragment} from 'react';

const ProductCard = (props) => {
  return (
    <Fragment>
    	<div className="row">
			<div className="col-md-3 mb-3">
				<div class="card customShadow customCardSize">
				  <img style={{ objectFit:"cover" }} class="card-img-top border" src="https://source.unsplash.com/2FGPidtk00E" alt="Card image cap"/>
				  <div class="card-body">
				    <div className="truncate">Casio F91W-1 Classic Resin Strap Digital Sport Watch</div>
				    <div>$36</div>
				  </div>
				  	<div className="px-3 pb-3 d-flex flex-row justify-content-between align-items-center">
					    <svg style={{ width:"30px",color:"orange" }} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
					   	<div>
					   		<svg style={{ width:"14px",color:"orange" }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
					   		<span>4.40</span>
					   	</div>
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