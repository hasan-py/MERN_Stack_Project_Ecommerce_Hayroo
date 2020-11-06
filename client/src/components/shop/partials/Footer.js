import React, { Fragment } from 'react';
import moment from 'moment';

const Footer = (props) => {
    return (
        <Fragment>
		     <footer id="shop" style={{background: '#303031', color: '#87898A'}} className="mt-12 py-8 px-4 md:px-12">
		        <ul className="md:flex md:space-x-4 justify-center align-center">
		          <li className="my-2 md:my-0"><a href="/"> Develop & Design | Hasan-py © {moment().format('YYYY')} </a></li>
		        </ul>
	      </footer>
	    </Fragment>
    )
}

export default Footer;