import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import AdminLayout from "../layout";
import SearchFilter from "./SearchFilter";
import { isAdmin } from "../../shop";

const UserComponent = () => {
    return (
        <Fragment>
			<SearchFilter/>
		</Fragment>
    )
}

const DashboardUser = (props) => {
    if (isAdmin()) {
        return <Redirect to="/admin/dashboard" />
    } else {
        return (
            <Fragment>
		    	<AdminLayout children={<UserComponent/>} />
		    </Fragment>
        )
    }
}

export default DashboardUser;