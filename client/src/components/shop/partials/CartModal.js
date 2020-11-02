import React, { Fragment, useContext, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { LayoutContext } from '../index';
import { cartListProduct } from './FetchApi';
import { isAuthenticate } from "../auth/fetchApi";
import { cartList } from "../productDetails/Mixins"
import { subTotal, quantity, totalCost } from './Mixins'

const apiURL = process.env.REACT_APP_API_URL

const CartModal = (props) => {

	const history = useHistory()

    const { data, dispatch } = useContext(LayoutContext);
    const products = data.cartProduct

    const cartModalOpen = () => dispatch({ type: "cartModalToggle", payload: !data.cartModal })

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            let responseData = await cartListProduct();
            if (responseData && responseData.Products) {
                dispatch({ type: "cartProduct", payload: responseData.Products })
                dispatch({ type: "cartTotalCost", payload: totalCost() })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const removeCartProduct = (id) => {
        let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
        if (cart.length !== 0) {
            cart = cart.filter(item => item.id !== id)
            localStorage.setItem("cart", JSON.stringify(cart))
            fetchData()
            dispatch({ type: "inCart", payload: cartList() })
            dispatch({ type: "cartTotalCost", payload: totalCost() })
        }
        if (cart.length === 0) {
            dispatch({ type: "cartProduct", payload: null })
            fetchData()
            dispatch({ type: "inCart", payload: cartList() })
        }
    }

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
		            {
		            	products && products.length !== 0
		            	&& products.map((item,index)=>{
		            		return (
		            			<Fragment key={index}>
			            		{/* Cart Product Start */}
					              <div className="text-white flex space-x-2 my-4 items-center">
					                <img className="w-16 h-16 object-cover object-center" src={`${apiURL}/uploads/products/${item.pImages[0]}`} alt="cartProduct" />
					                <div className="relative w-full flex flex-col">
					                  <div className="my-2">{item.pName}</div>
					                  <div className="flex items-center justify-between">
					                    <div className="flex items-center justify-between space-x-2">
					                      <div className="text-sm text-gray-400">Quantity :</div>
					                      <div className="flex items-end"> 
					                        <span className="text-sm text-gray-200">{ quantity(item._id) }</span>
					                      </div>
					                    </div>
					                    <div> <span className="text-sm text-gray-400">Subtotoal :</span> ${ subTotal(item._id,item.pPrice) }.00</div> {/* SUbtotal Count */}
					                  </div>
					              	 {/* Cart Product Remove Button */}
					                  <div onClick={e=> removeCartProduct(item._id)} className="absolute top-0 right-0 text-white">
					                    <svg className="w-5 h-5 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
					                  </div>
					                </div>
					              </div>
			              		{/* Cart Product Start */}
			            	  	</Fragment>
		            		)
		            	})
		            }

		            {
		            	products === null && <div className="m-4 flex-col text-white text-xl text-center">No product in cart</div>
		            }
		            </div>
		          </div>
		          <div className="m-4 space-y-4">
		            <div onClick={e=> cartModalOpen()} className="cursor-pointer px-4 py-2 border border-gray-400 text-white text-center cursor-pointer">Continue shipping</div>
		            {
		            	data.cartTotalCost
		            	? <Fragment>
		            		 {
		            		 	isAuthenticate()
		            		 	? <div className="px-4 py-2 bg-black text-white text-center cursor-pointer" onClick={e=> { history.push('/checkout'); cartModalOpen() }}>Checkout ${data.cartTotalCost}.00</div>
		            		 	: <div className="px-4 py-2 bg-black text-white text-center cursor-pointer" onClick={e=> { history.push('/'); cartModalOpen(); dispatch({type:"loginSignupError",payload:!data.loginSignupError}); dispatch({type:"loginSignupModalToggle",payload:!data.loginSignupModal}) }}>Checkout ${data.cartTotalCost}.00</div>
		            		 }
		            	  </Fragment>
		            	: <div className="px-4 py-2 bg-black text-white text-center cursor-not-allowed">Checkout</div>
		            }
		          </div>
		        </div>
	      	</section>
	      {/* Cart Modal End */}
	    </Fragment>
    )
}

export default CartModal;