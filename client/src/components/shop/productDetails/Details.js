import React,{Fragment} from 'react';
import Submenu from "./Submenu";
import ProductDetailsSection from "./ProductDetailsSection";

const Details = (props) => {
  return (
    <Fragment>
        <Submenu/>
        <ProductDetailsSection/>
	</Fragment>
  )
}

export default Details;