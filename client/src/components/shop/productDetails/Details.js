import React, { Fragment } from 'react';
import Submenu from "./Submenu";
import ProductDetailsSection from "./ProductDetailsSection";

const apiURL = process.env.REACT_APP_API_URL


const Details = (props) => {
  return (
    <Fragment>
        <Submenu/>
        <ProductDetailsSection/>
	</Fragment>
  )
}

export default Details;