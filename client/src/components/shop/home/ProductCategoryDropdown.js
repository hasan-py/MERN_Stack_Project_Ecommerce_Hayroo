import React, { Fragment, useContext, useState, useEffect } from 'react';
import {HomeContext} from "./index";
import {getAllCategory} from "../../admin/categories/FetchApi";
const apiURL = process.env.REACT_APP_API_URL

const CategoryList = () => {
	const {data} = useContext(HomeContext);
	const [categories,setCategories] = useState(null)

	useEffect(()=> {
		fetchData()
	},[])

	const fetchData = async ()=> {
		try {
			let responseData = await getAllCategory();
			if(responseData && responseData.Categories){
				setCategories(responseData.Categories)
			}
		}catch(error){
			console.log(error)
		}
	}

    return (
        <div className={`${data.categoryListDropdown ? "" : "hidden"} my-4`}>
        	<hr />
	        <div className="py-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	          	{
	          		categories && categories.length>0 
	          		? categories.map(item=>{
	          			return(
		          			<Fragment>
			          			<div className="col-span-1 m-2 flex flex-col items-center justify-center space-y-2">
			          				<img src={`${apiURL}/uploads/categories/${item.cImage}`} alt=""/>
			          				<div className="font-medium">{item.cName}</div>
			          			</div>
		          			</Fragment>
	          			)
	          		})
	          		: <div className="text-2xl text-center">No Category</div>
	          	}
	        </div>
      	</div>
    )
}

const FilterList = () => {
	const {data} = useContext(HomeContext);

    return (
        <div className={`${data.filterListDropdown ? "" : "hidden"} my-4`}>
        	<hr />
	        <div className="py-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	          <div className="col-span-1 m-2">
	            <div className="font-medium">Sort by</div>
	            <div>
	              <ul>
	                <li><a href="#">Iphone</a></li>
	                <li><a href="#">Iphone</a></li>
	                <li><a href="#">Iphone</a></li>
	                <li><a href="#">Iphone</a></li>
	                <li><a href="#">Iphone</a></li>
	              </ul>
	            </div>
	          </div>
	          <div className="col-span-1 m-2">
	            <div className="font-medium">Price</div>
	            <div>
	              <ul>
	                <li><a href="#">Iphone</a></li>
	                <li><a href="#">Iphone</a></li>
	              </ul>
	            </div>
	          </div>
	        </div>
      	</div>
    )
}


const Search = () => {
	const {data,dispatch} = useContext(HomeContext);

    return (
        <div className={`${data.searchDropdown ? "" : "hidden"} my-4 flex items-center justify-between`}>
	        <input className="px-4 text-xl py-4 focus:outline-none" type="text" placeholder="Search products..." />
	        <div onClick={e=> dispatch({type:"searchDropdown",payload:!data.searchDropdown})} className="cursor-pointer">
	          <svg className="w-8 h-8 text-gray-700 hover:bg-gray-200 rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
	        </div>
      	</div>
    )
}


const ProductCategoryDropdown = (props) => {
    return (
        <Fragment>
    		<CategoryList/>
    		<FilterList/>
    		<Search/>
    	</Fragment>
    )
}

export default ProductCategoryDropdown;