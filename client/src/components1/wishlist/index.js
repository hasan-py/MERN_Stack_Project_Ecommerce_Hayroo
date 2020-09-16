import React,{Fragment} from 'react';
import Layout from "../layout";
import SingleWishProduct from "./SingleWishProduct";

const WishList = (props) => {
  return (
    <Fragment>
    	<Layout children={<SingleWishProduct/>} />
    </Fragment>
  )
}

export default WishList;