import React,{Fragment} from 'react';
import {useParams} from 'react-router-dom';

const ProductDetailsSection = (props) => {
	let { id } = useParams();
	
  return (
    <Fragment>
	    <section className="m-4 md:mx-12 md:my-6">
	        <div className="grid grid-cols-2 md:grid-cols-12">
	          <div className="hidden md:block md:col-span-1 md:flex md:flex-col md:space-y-4 md:mr-2">
	            <img className="cursor-pointer w-20 h-20" src="https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-classic-chair-2-680x844.jpg" alt="" />
	            <img className="opacity-50 cursor-pointer w-20 h-20" src="https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-pendant-lamp-680x844.jpg" alt="" />
	          </div>
	          <div className="col-span-2 md:col-span-7">
	            <div className="relative">
	              <img className="w-full" src="https://savoy-webstack.netdna-ssl.com/wp-content/uploads/2015/08/product-classic-chair-2-680x844.jpg" alt="" />
	              <div className="absolute inset-0 flex justify-between items-center mb-4">
	                <svg className="flex justify-center  w-12 h-12 text-gray-700 opacity-25 cursor-pointer hover:text-yellow-700 hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
	                <svg className="flex justify-center  w-12 h-12 text-gray-700 opacity-25 cursor-pointer hover:text-yellow-700 hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
	              </div>
	            </div>
	          </div>
	          <div className="col-span-2 mt-8 md:mt-0 md:col-span-4 md:ml-6 lg:ml-12">
	            <div className="flex flex-col leading-8">
	              <div className="text-2xl tracking-wider">Pendant Lamp</div>
	              <div className="flex justify-between items-center">
	                <span className="text-xl tracking-wider text-yellow-700">$79.00</span>
	                <span>
	                  <svg className="cursor-pointer w-6 h-6 fill-current text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
	                </span>
	              </div>
	            </div>
	            <div className="my-4 md:my-6 text-gray-600">
	              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus assumenda voluptatum aut aliquam incidunt ab facere corrupti voluptatib.
	            </div>
	            <div className="my-4 md:my-6">
	              <div className="flex justify-between items-center px-4 py-2 border">
	                <div>Quantity</div>
	                <div className="flex items-center space-x-2">
	                  <span><svg className="w-5 h-5 fill-current cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg></span>
	                  <span className="font-semibold">1</span>
	                  <span><svg className="w-5 h-5 fill-current cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></span>
	                </div>
	              </div>
	              <div style={{background: '#303031'}} className="px-4 py-2 text-white text-center cursor-pointer">Add to cart</div>
	            </div>
	          </div>
	        </div>
	    </section>
    </Fragment>
  )
}

export default ProductDetailsSection;