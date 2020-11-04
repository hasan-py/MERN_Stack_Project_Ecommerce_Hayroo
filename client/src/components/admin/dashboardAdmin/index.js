import React, { Fragment } from 'react';
import AdminLayout from "../layout";
import DashboardCard from "./DashboardCard";
import Customize from "./Customize";

const DashboardComponent = ()=> {
	return (
		<Fragment>
			<DashboardCard/>
			<Customize/>
		</Fragment>
	)
}

const DashboardAdmin = (props) => {
    return (
        <Fragment>
	    	<AdminLayout children={<DashboardComponent/>} />
	    </Fragment>
    )
}

export default DashboardAdmin;