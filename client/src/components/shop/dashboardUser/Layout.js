import React, { Fragment, createContext, useReducer, useEffect } from 'react';
import { Navber, Footer, CartModal } from "../partials";
import Sidebar from './Sidebar'
import {dashboardUserState,dashboardUserReducer} from './DashboardUserContext'
import {fetchData} from './Action'

export const DashboardUserContext = createContext()

const Layout = ({ children }) => {
	const [data,dispatch] = useReducer(dashboardUserReducer,dashboardUserState)

	useEffect(()=>{
		fetchData(dispatch)
	},[])

    return (
        <Fragment>
	        <DashboardUserContext.Provider value={{ data, dispatch }}>
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
			</DashboardUserContext.Provider>
    	</Fragment>
    )
}

export default Layout;