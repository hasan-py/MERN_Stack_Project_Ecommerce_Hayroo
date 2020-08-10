import React from 'react';
import {Navber,Slider,Footer,CategoryCard,ProductCard,Review} from './home';

const Main = (props) => {
  return (
    <div>
    	<Navber/>
    	<Slider/>
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
    	<Footer/>
    </div>
  )
}

export default Main;