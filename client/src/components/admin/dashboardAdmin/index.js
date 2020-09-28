import React, { Fragment } from 'react';
import AdminLayout from "../layout";
import DashboardCard from "./DashboardCard";

const DashboardAdmin = (props) => {
    return (
        <Fragment>
	    	<AdminLayout children={<DashboardCard/>} />
	    </Fragment>
    )
}

export default DashboardAdmin;