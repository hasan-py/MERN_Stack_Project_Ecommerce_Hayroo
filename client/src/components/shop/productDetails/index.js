import React, { Fragment, createContext, useReducer } from 'react';
import Layout from "../layout";
import { productDetailsState, productDetailsReducer } from "./ProductDetailsContext";
import Details from "./Details";

export const ProductDetailsContext = createContext();

const DetailsComponent = () => {
    return (
        <Fragment>
        	<Details/>
		</Fragment>
    )
}

const ProductDetails = (props) => {
    const [data, dispatch] = useReducer(productDetailsReducer, productDetailsState)
    return (
        <Fragment>
	    	<ProductDetailsContext.Provider value={{data,dispatch}}>
	        	<Layout children={<DetailsComponent/>} />
	        </ProductDetailsContext.Provider>
        </Fragment>
    )
}

export default ProductDetails;