import React, { Fragment, useContext } from 'react';
import { LayoutContext } from '../layout';
import moment from 'moment';

const AllReviews = (props) => {

    const { data } = useContext(LayoutContext)
    const { pRatingsReviews } = data.singleProductDetail

    return (
        <Fragment>
	        <div className="mt-6 mb-12 md:mx-16 lg:mx-20 xl:mx-24">
	        	{/* List start */}
	        	{
	        		pRatingsReviews.length > 0
	        		? pRatingsReviews.map((item,index)=> {
	        			return (
	        				<Fragment key={index}>	
						        <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-start">
						          <img className="mx-2 w-16 h-16 rounded-full" src="https://secure.gravatar.com/avatar/676d90a1574e9d3ebf98dd36f7adad60?s=60&d=mm&r=g" alt="pic" />
						          <div className="mx-2 flex justify-between w-full">
						            <div className="flex flex-col">
						              <div className="flex flex-col">
						                <span>{item.user.name}</span>
						                <span className="text-sm text-yellow-700">{moment(item.createdAt).format('lll')}</span>
						              </div>
						              <div className="leading-tight mt-3">{item.review}</div>
						            </div>
						            <div className="flex">
						            	{/* Yellow Star */}
						              {
						              	[...Array(Number(item.rating))].map(index=>{
						              		return (
						              			<span><svg className="w-4 h-4 fill-current text-yellow-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg></span>
						              		)
						              	})
						              }
						              	{/* White Star */}
						              {
						              	[...Array(5-Number(item.rating))].map(index=>{
						              		return (
						              			<span><svg className="w-4 h-4 fill-current text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg></span>
						              		)
						              	})
						              }
						              
						            </div>
						          </div>
						        </div>
			        		</Fragment>
	        			)
	        		}) 
	        		: <div>No Review found</div>
	        	}
		    </div>
	    </Fragment>
    )
}

export default AllReviews;