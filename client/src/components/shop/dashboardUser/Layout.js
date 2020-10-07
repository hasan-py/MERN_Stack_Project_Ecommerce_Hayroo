import React, { Fragment } from 'react';
import { Navber, Footer, CartModal } from "../partials";
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <Fragment>
		    <div className="flex-grow">    	
				<Navber />
				<CartModal />
				<div className="mx-4 mt-24 md:mx-12 md:mt-32 lg:mt-24 flex flex-col md:flex-row">				
					<Sidebar/>
					{/* All Children pass from here */}
					{children}
				</div>
		    </div>
		    <Footer/>
    	</Fragment>
    )
}

export default Layout;