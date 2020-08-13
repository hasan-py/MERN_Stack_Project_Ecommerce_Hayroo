import React from 'react';
import {Slider,CategoryCard,ProductCard,Review,Footer} from "./partials";

const Home = (props) => {
  return (
    <div>
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
    </div>
  )
}

export default Home;