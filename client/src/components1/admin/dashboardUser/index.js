import React,{Fragment} from 'react';
import AdminLayout from "../layout";
import SearchFilter from "./SearchFilter";

const DashboardUser = (props) => {
  return (
    <Fragment>
    	<AdminLayout children={<SearchFilter/>} />
    </Fragment>
  )
}

export default DashboardUser;