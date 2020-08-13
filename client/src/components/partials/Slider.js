import React,{Fragment} from 'react';

const Slider = (props) => {
  return (
    <Fragment>
    	<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
		  <ol class="carousel-indicators">
		    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
		    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
		    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		  </ol>
		  <div class="carousel-inner">
		    <div class="carousel-item active">
		      <img class="d-block w-100" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/107312566/original/4ef810792c139575d41e7decb7cdbd2fbd3e97ab/design-youtube-thumbnail-facebook-banners-ecommerce-ads.jpg" alt="First slide"/>
		    </div>
		    <div class="carousel-item">
		      <img class="d-block w-100" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/107312566/original/4ef810792c139575d41e7decb7cdbd2fbd3e97ab/design-youtube-thumbnail-facebook-banners-ecommerce-ads.jpg" alt="Second slide"/>
		    </div>
		    <div class="carousel-item">
		      <img class="d-block w-100" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/107312566/original/4ef810792c139575d41e7decb7cdbd2fbd3e97ab/design-youtube-thumbnail-facebook-banners-ecommerce-ads.jpg" alt="Third slide"/>
		    </div>
		  </div>
		  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
		    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span class="sr-only">Previous</span>
		  </a>
		  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
		    <span class="carousel-control-next-icon" aria-hidden="true"></span>
		    <span class="sr-only">Next</span>
		  </a>
		</div>
    </Fragment>
  )
}

export default Slider;