import React, { Fragment } from 'react';
import Layout from "../layout";
import Slider from "./Slider";

const HomeComponent = () => {
    return (
        <Fragment>
			<Slider/>
		</Fragment>
    )
}

const Home = (props) => {
    return (
        <Layout children={<HomeComponent/>} />
    )
}

export default Home;