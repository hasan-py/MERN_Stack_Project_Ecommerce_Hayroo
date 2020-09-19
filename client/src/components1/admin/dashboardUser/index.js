import React,{Fragment} from 'react';
import AdminLayout from "../layout";
import SearchFilter from "./SearchFilter";

const UserComponent = ()=> {
	return (
		<Fragment>
			<SearchFilter/>
		</Fragment>
	)
}

const DashboardUser = (props) => {
  return (
    <Fragment>
    	<AdminLayout children={<UserComponent/>} />
    </Fragment>
  )
}

export default DashboardUser;