import React,{Fragment} from 'react';
import AdminLayout from "../layout";
import CategoryMenu from "./CategoryMenu";
import AllCategories from "./AllCategories";

const CategoryComponent = ()=> {
	return (
		<div className="grid grid-cols-1 space-y-4 p-4">
			<CategoryMenu/>
			<AllCategories/>
		</div>
	)
}

const Categories = (props) => {
  return (
    <Fragment>
    	<AdminLayout children={<CategoryComponent/>} />
    </Fragment>
  )
}

export default Categories;