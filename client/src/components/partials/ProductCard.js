import React,{Fragment} from 'react';

const ProductCard = (props) => {
  return (
    <Fragment>
		<div className="text-left mt-3"><h4>Category Name</h4></div>
		<hr/>
    	<div className="row">
			<div className="col-md-3 mb-3">
				<div class="card customShadow customCardSize">
				  <img class="card-img-top" src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/7/9/79_2_1_1.jpg" alt="Card image cap"/>
				  <div class="card-body">
				    <div>Product Name</div>
				    <div>Price</div>
				    <button className="btn btn-dark mt-2">Buy Now</button>
				    <button className="btn btn-dark mt-2 btn-sm btn-circle ml-2"><i class="material-icons">favorite</i> <span className="badge bg-light text-dark">4</span></button>
				    
				  </div>
				</div>
			</div>
			<div className="col-md-3 mb-3">
				<div class="card customShadow customCardSize">
				  <img class="card-img-top" src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/8/8/88.jpg" alt="Card image cap"/>
				  <div class="card-body">
				  	<div>Product Name</div>
				    <div>Price</div>
				    <button className="btn btn-dark mt-2">Buy Now</button>
				    <button className="btn btn-dark mt-2 btn-sm btn-circle ml-2"><i class="material-icons">favorite</i> <span className="badge bg-light text-dark">4</span></button>
				  </div>
				</div>
			</div>
			<div className="col-md-3 mb-3">
				<div class="card customShadow customCardSize">
				  <img class="card-img-top" src="http://magento2.templatemela.com/MAG2014/MAG110246_3/pub/media/catalog/product/cache/9b42c9fe0793b3082848ac5ebfa58963/2/9/29_1.jpg" alt="Card image cap"/>
				  <div class="card-body">
					<div>Product Name</div>
				    <div>Price</div>
				    <button className="btn btn-dark mt-2">Buy Now</button>
				    <button className="btn btn-dark mt-2 btn-sm btn-circle ml-2"><i class="material-icons">favorite</i> <span className="badge bg-light text-dark">4</span></button>
				  </div>
				</div>
			</div>
			<div className="col-md-3 mb-3">
				<div class="card customShadow viewAllProdcutCard customCardSize">
				  <div class="card-body text-center">
				  <h3>Category Name</h3>
				  	<button type="button" class="btn btn-dark customShadow">View All</button>
				    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  </div>
				</div>
			</div>
    	</div>
    </Fragment>
  )
}

export default ProductCard;