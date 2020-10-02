import React,{Fragment} from 'react';
import {useHistory} from "react-router-dom";

const Submenu = (props) => {
	const {category,product} = props.value
	const history = useHistory()
  return (
  	<Fragment>
  		{/* Submenu Section */}
	      <section className="mx-4 mt-24 md:mx-12 md:mt-32 lg:mt-24">
	        <div className="flex justify-between items-center">
	          <div className="text-sm flex space-x-2">
	            <a className="hover:text-yellow-700" onClick={e=> history.push('/')}>Shop</a>
	            <a className="hover:text-yellow-700" onClick={e=> history.push('/')}>{category}</a>
	            <span className="text-yellow-700 cursor-default">{product}</span>
	          </div>
	          <div>
	            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
	          </div>
	        </div>
	      </section>
      {/* Submenu Section */}
  	</Fragment>
  )
}

export default Submenu;