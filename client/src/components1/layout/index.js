import React, { Fragment, useReducer, useState, createContext } from 'react';
import { Navber, Footer, CartModal } from "../partials";
import LoginSignup from "../auth/LoginSignup";
import { layoutState, layoutReducer } from "./layoutContext";

/* Creating Layout Context which will wrap all the app */
export const LayoutContext = createContext();

const Layout = ({ children }) => {
    const [data, dispatch] = useReducer(layoutReducer, layoutState)
    return (
        <Fragment>
	  		<LayoutContext.Provider value={{data,dispatch}} >
			    <div className="flex-grow">    	
					<Navber />
					<LoginSignup />
					<CartModal />
					{/* All Children pass from here */}
					{children}
			    </div>
			    <Footer/>
	  		</LayoutContext.Provider>
    	</Fragment>
    )
}

export default Layout;