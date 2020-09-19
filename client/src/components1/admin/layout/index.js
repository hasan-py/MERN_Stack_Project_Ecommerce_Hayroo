import React, { Fragment, useReducer, useState, createContext } from 'react';

import AdminNavber from "../partials/AdminNavber";
import AdminSidebar from "../partials/AdminSidebar";
import UserSidebar from "../partials/UserSidebar";
import AdminFooter from "../partials/AdminFooter";

import {isAdmin} from "../../shop";

const AdminLayout = ({ children }) => {
    return (
        <Fragment>
		   	<AdminNavber/>
	    	<section class="flex bg-gray-100">
	    		{ isAdmin() ? <AdminSidebar/> : <UserSidebar/>}
	    		<div class="w-full md:w-11/12 h-full">
	    			{/* All Children pass from here */}
					{children}
	    		</div>
			</section>
			<AdminFooter/>
    	</Fragment>
    )
}

export default AdminLayout;