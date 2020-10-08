import React,{ Fragment, useState, useContext } from 'react';
import { Alert, reviewSubmitHanlder } from './Action';
import { LayoutContext } from '../layout';

const ReviewForm = (props) => {

	const { data, dispatch } = useContext(LayoutContext)

	const [ fData,setFdata ] = useState({
		rating:"",
		review:"",
		error:false,
		success:false,
		pId:data.singleProductDetail._id
	})

	if(fData.error || fData.success ){
		setTimeout(()=> {
			setFdata({...fData,error:false,success:false})
		},2000)
	}

  return (
    <Fragment>
    	<div className="mb-12 md:mx-16 lg:mx-20 xl:mx-24 flex flex-col">
			{ fData.error ? Alert("red",fData.error) : "" }
			{ fData.success ? Alert("green",fData.success) : "" }
	        <div className="flex flex-col space-y-2">
	          <span className="text-2xl font-medium">Add a review</span>
	          <span className="text-gray-600 text-sm">Your email address will not be published. Required fields are marked *</span>
	        </div>
	        {/* Input Rating */}
	        <div className="mb-4">
	          <fieldset onChange={e=> setFdata({...fData, rating:e.target.value })} className="rating">
		        <input type="radio" className="rating" id="star5" name="rating" defaultValue={5} /><label className="full" htmlFor="star5" title="Awesome - 5 stars" />
		        <input type="radio" className="rating" id="star4" name="rating" defaultValue={4} /><label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
		        <input type="radio" className="rating" id="star3" name="rating" defaultValue={3} /><label className="full" htmlFor="star3" title="Meh - 3 stars" />
		        <input type="radio" className="rating" id="star2" name="rating" defaultValue={2} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
		        <input type="radio" className="rating" id="star1" name="rating" defaultValue={1} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
		      </fieldset>
	        </div>
	        {/* Review Form */}
	        <div className="space-y-4">
	          <div className="flex flex-col">
	            <label htmlFor="textArea">Review <span className="text-sm text-gray-600">*</span></label>
	            <textarea onChange={e=> setFdata({...fData, review:e.target.value })} value={fData.review} className="border px-4 py-2 focus:outline-none" name="textArea" id="textArea" cols={30} rows={3} placeholder="Your review..." />
	          </div>
	          <div onClick={e=> reviewSubmitHanlder(fData,setFdata)} style={{background: '#303031'}} className="inline-block rounded px-4 py-2 text-white text-center cursor-pointer">Submit</div>
	        </div>
      	</div>
    </Fragment>
  )
}

export default ReviewForm;