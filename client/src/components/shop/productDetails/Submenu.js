import React,{Fragment} from 'react';

const Submenu = (props) => {
  return (
  	<Fragment>
  		{/* Submenu Section */}
	      <section className="mx-4 mt-20 md:mx-12 md:mt-24">
	        <div className="flex justify-between items-center">
	          <div className="text-sm">
	            <a className="hover:text-yellow-700" href="#">Shop</a> /
	            <a className="hover:text-yellow-700" href="#">Interior</a> /
	            <a className="text-gray-600" href="#">Classic Chari</a>
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