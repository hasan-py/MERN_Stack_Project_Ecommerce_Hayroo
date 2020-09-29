import React, { Fragment, useContext } from 'react';
import { LayoutContext } from '../index';

const CartModal = (props) => {
    const { data, dispatch } = useContext(LayoutContext);
    const cartModalOpen = () => data.cartModal ? dispatch({ type: "cartModalToggle", payload: false }) : dispatch({ type: "cartModalToggle", payload: true })

    return (
        <Fragment>
			{/* Black Overlay */}
	    	<div className={`${!data.cartModal ? "hidden" : ""} fixed top-0 z-30 w-full h-full bg-black opacity-50`} />
	    	{/* Cart Modal Start */}
	    	<section className={`${!data.cartModal ? "hidden" : ""} fixed z-40 inset-0 flex items-start justify-end`}>
		        <div style={{background: '#303031'}} className="w-full md:w-5/12 lg:w-4/12 h-full flex flex-col justify-between">
		          <div className="overflow-y-auto"> 
		            <div className="border-b border-gray-700 flex justify-between">
		              <div className="p-4 text-white text-lg font-semibold">Cart</div>
	              		{/* Cart Modal Close Button */}
		              <div className="p-4 text-white">
		                <svg onClick={e=> cartModalOpen()} className="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
		              </div>
		            </div>
		            <div className="m-4 flex-col">
		              {/* Cart Product Start */}
		              <div className="text-white flex space-x-2 my-4 items-center">
		                <img className="w-16 h-16" src="https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-henry-backpack-450x558.jpg" alt="" />
		                <div className="relative w-full flex flex-col">
		                  <div className="my-2">Henry Backpack</div>
		                  <div className="flex items-center justify-between">
		                    <div className="flex items-center justify-between space-x-2">
		                      <div className="text-sm text-gray-400">Qty</div>
		                      <div className="flex items-end"> 
		                        <span><svg className="w-5 h-5 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg></span>
		                        <span className="text-sm text-gray-200">12</span>
		                        <span><svg className="w-5 h-5 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></span>
		                      </div>
		                    </div>
		                    <div>$79.00</div>
		                  </div>
		              	 {/* Cart Product Remove Button */}
		                  <div className="absolute top-0 right-0 text-white">
		                    <svg className="w-5 h-5 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="m-4 space-y-4">
		            <div className="px-4 py-2 border border-gray-400 text-white text-center cursor-pointer">Continue shipping</div>
		            <div className="px-4 py-2 bg-black text-white text-center cursor-pointer">Checkout</div>
		          </div>
		        </div>
	      	</section>
	      {/* Cart Modal End */}
	    </Fragment>
    )
}

export default CartModal;