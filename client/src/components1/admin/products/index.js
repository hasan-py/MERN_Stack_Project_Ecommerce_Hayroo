import React,{Fragment,createContext,useReducer} from 'react';
import AdminLayout from "../layout";
import ProductMenu from "./ProductMenu";
import {productState,productReducer} from "./ProductContext";

/* This context manage all of the products component's data */
export const ProductContext = createContext();

const ProductComponent = ()=> {
	return (
		<div className="grid grid-cols-1 space-y-4 p-4">
			<ProductMenu/>
		</div>
	)
}

const Products = (props) => {
	/* To use useReducer make sure that reducer is the first arg */
	const [data,dispatch] = useReducer(productReducer,productState);

  return (
    <Fragment>
		<ProductContext.Provider value={{data,dispatch}}> 
    		<AdminLayout children={<ProductComponent/>} />
    	</ProductContext.Provider> 
    </Fragment>
  )
}

export default Products;