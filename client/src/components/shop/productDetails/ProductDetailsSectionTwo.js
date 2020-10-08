import React, { Fragment, useContext, useEffect, useState } from 'react';
import AllReviews from './AllReviews';
import ReviewForm from './ReviewForm';

import { ProductDetailsContext } from './';
import { LayoutContext } from '../layout';

import './style.css';

const Menu = () => {

	const { data, dispatch } = useContext(ProductDetailsContext)
	const { data:layoutData, dispatch:layoutDispatch } = useContext(LayoutContext)

    return (
        <Fragment>
	    	<div className="flex flex-col md:flex-row items-center justify-center">
		        <div onClick={e=> dispatch({type:"menu",payload:true})} className={`${data.menu ? "border-b-2 border-yellow-700": ""} px-4 py-3 cursor-pointer`}>Description</div>
		        <div onClick={e=> dispatch({type:"menu",payload:false})} className={`${!data.menu ? "border-b-2 border-yellow-700" : "" } px-4 py-3 relative flex cursor-pointer`}>
		          <span>Reviews</span>
		          <span className="absolute text-xs top-0 right-0 mt-2 bg-yellow-700 text-white rounded px-1">{layoutData.singleProductDetail.pRatingsReviews.length}</span>
		        </div>
	      	</div>
	    </Fragment>
    )
}

const RatingReview = ()=> {
	return (
		<Fragment>
			<AllReviews/>
			<ReviewForm/>
		</Fragment>
	)
}

const ProductDetailsSectionTwo = (props) => {

	const { data, dispatch } = useContext(ProductDetailsContext)
	const { data:layoutData, dispatch:layoutDispatch } = useContext(LayoutContext)
	const [ singleProduct, setSingleproduct ] = useState({})

	useEffect(()=> {
		setSingleproduct(layoutData.singleProductDetail ? layoutData.singleProductDetail : "")
	},[])

    return (
        <Fragment>
		    <section className="m-4 md:mx-12 md:my-8">
		    	<Menu/>
		    	{
		    		data.menu
		    		? <div className="mt-6">{singleProduct.pDescription}</div> 
		    		: <RatingReview/>
		    	}
		    </section>
		    <div className="m-4 md:mx-8 md:my-6 flex justify-center capitalize font-light tracking-widest bg-white border-t border-b text-gray-800 px-4 py-4 space-x-4">
		        <div>
		          <span>Category :</span>
		          <span className="text-sm text-gray-600"> {singleProduct.pCategory ? singleProduct.pCategory.cName : ""}</span>
		        </div>
		    </div>
	    </Fragment>
    )
}

export default ProductDetailsSectionTwo;