import React,{Fragment} from 'react';

const SingleWishProduct = (props) => {
  return (
    <Fragment>
    	<section className="mx-4 mt-20 md:mx-12 md:mt-24">
        <div className="text-2xl mx-2 mb-6">Wishlist</div>
    	{/* Product List */}
        <div className="grid grid-cols-2 md:grid-cols-1">
        	{/* Product Start */}
          <div className="relative m-2 md:py-6 md:border-t md:border-b md:my-2 md:mx-0 col-span-1 md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:flex md:items-center">
              <img className="md:h-20 md:w-20 object-cover object-center" src="https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-pendant-lamp-680x844.jpg" alt="" />
              <div className="text-lg md:ml-6 truncate">Pendant Lamp</div>
            </div>
            <div className="md:w-1/2 md:flex md:items-center md:justify-around">
              <div>$79.00</div>
              <div className="text-green-500 my-1 md:my-0">In stock</div>
              <div style={{background: '#303031'}} className="inline-block px-4 py-2 text-white text-xs md:text-base text-center cursor-pointer">Select options</div>
            </div>
            <div className="absolute top-0 right-0 mx-2 my-2 md:relative">
              <svg className="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default SingleWishProduct;