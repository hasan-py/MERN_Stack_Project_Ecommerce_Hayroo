import React,{Fragment,useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';

import {LayoutContext} from "../layout";
import {isAuthenticate,logoutReq} from "../auth/authFetchApi";

const Navber = (props) => {
	
	const history = useHistory();

	const {data,dispatch} = useContext(LayoutContext);

	const navberToggleOpen = ()=> data.navberHamburger ? dispatch({type:"hamburgerToggle",payload:false}) : dispatch({type:"hamburgerToggle",payload:true})

	const loginModalOpen = ()=> data.loginSignupModal ? dispatch({type:"loginSignupModalToggle",payload:false}) : dispatch({type:"loginSignupModalToggle",payload:true})

	const cartModalOpen = ()=> data.cartModal ? dispatch({type:"cartModalToggle",payload:false}) : dispatch({type:"cartModalToggle",payload:true})

	const logoutBtnCall = ()=> logoutReq() && history.push('/')

  return (
    <Fragment>
    	{/* Navber Section */}
		<nav className="fixed top-0 w-full z-10 shadow-lg lg:shadow-none bg-white">
	        <div className="m-4 md:mx-12 md:my-6 grid grid-cols-4 lg:grid-cols-3">
	          <div className="hidden lg:block col-span-1 flex space-x-4 text-gray-600 mt-1">
	            <a className="relative font-light tracking-widest hover:text-gray-800" href="#">Shop</a>
	            <a className="font-light tracking-widest hover:text-gray-800" href="#">Pages</a>
	            <a className="font-light tracking-widest hover:text-gray-800" href="#">Elements</a>
	          </div>
	          <div className="col-span-2 lg:hidden flex justify-items-stretch	 items-center">
	            <svg onClick={e=> navberToggleOpen()} className="col-span-1 lg:hidden w-8 h-8 cursor-pointer text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
	            </svg>
	            <span style={{letterSpacing: '0.10rem'}} className="flex items-left text-center font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center">Hayroo</span>
	          </div>
	          <div onClick={e=> history.push('/')} style={{letterSpacing: '0.70rem'}} className="hidden lg:block flex items-left col-span-1 text-center text-gray-800 font-bold tracking-widest uppercase text-2xl cursor-pointer">
	            Hayroo
	          </div>
	        <div className="flex items-right col-span-2 lg:col-span-1 flex justify-end space-x-2 md:space-x-4">
	      	  	{/*  WishList Page Button */}
	            <div title="Wishlist">
	              <svg onClick={e=> history.push('wish-list')} className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
	              </svg>
	            </div>
	        	{ 
	        		isAuthenticate ? (
	        			/* Logout Button */
			            <div title="Logout">
			              <svg onClick={e=> logoutBtnCall()} className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
			              </svg>
			            </div>
	        		) : (
			            /* Login Modal Button */
	        			<div title="Login">
			              <svg onClick={e=> loginModalOpen()} className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
			              </svg>
	            		</div>
	        		)
	        	}
	        	{/* Cart Modal Button */}
	            <div onClick={e=> cartModalOpen()} className="relative cursor-pointer" title="Cart">
	              <svg className="w-8 h-8 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
	              </svg>
	              <span className="absolute top-0 ml-6 mt-1 bg-yellow-700 rounded px-1 text-white text-xs hover:text-gray-200 font-semibold">15</span>
	            </div>
	          </div>
	        </div>
	        <div className={ data.navberHamburger && data.navberHamburger ? "px-1 pb-2 md:pb-0 md:px-10 lg:hidden" : "hidden px-1 pb-2 md:pb-0 md:px-10 lg:hidden"}>
	          <div className="col-span-1 flex flex-col text-gray-600">
	            <a className="font-medium text-lg tracking-widest hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg" href="#">Shop</a>
	            <a className="font-medium text-lg tracking-widest hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg" href="#">Pages</a>
	            <a className="font-medium text-lg tracking-widest hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg" href="#">Elements</a>
	          </div>
	        </div>
      	</nav>
        {/* End Navber Section */}
    </Fragment>
  )
}

export default Navber;

