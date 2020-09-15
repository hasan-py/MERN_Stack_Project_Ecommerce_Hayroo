import React,{Fragment} from 'react';

const Footer = (props) => {
  return (
    <Fragment>
	     <footer style={{background: '#303031', color: '#87898A'}} className="mt-12 py-8 px-4 md:px-12">
	        <ul className="md:flex md:space-x-4">
	          <li className="my-2 md:my-0"><a href="#">About us</a></li>
	          <li className="my-2 md:my-0"><a href="#">Blog</a></li>
	          <li className="my-2 md:my-0"><a href="#">Order Tracking</a></li>
	          <li className="my-2 md:my-0"><a href="#">Contact</a></li>
	          <li className="my-2 md:my-0"><a href="#"> © Hasan-py </a></li>
	        </ul>
      </footer>
    </Fragment>
  )
}

export default Footer;