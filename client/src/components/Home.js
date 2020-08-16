import React,{Fragment} from 'react';
import {Slider,CategoryCard,ProductCard,Review,Footer} from "./partials";
import {Navber} from "./partials";

const Home = (props) => {
  return (
    <Fragment>
        <Navber/>
    	<Slider/>
        <div className="container">
        	<div>
        		<CategoryCard/>
        	</div>
        	<div>
        		<ProductCard/>
        		<ProductCard/>
        		<ProductCard/>
        	</div>
    		<div>
    			<Review/>
    		</div>
        </div>
    	<Footer/>
    </Fragment>
  )
}

export default Home;