import React,{Fragment,useContext,useState} from 'react';
import {CategoryContext} from "./index";
import {createCategroy} from "./FetchApi";

const AddCategoryModal = (props) => {
	const {data,dispatch} = useContext(CategoryContext);
	
	const [fData,setFdata] = useState({
		cName:"",
		cDescription:"",
		cImage:"",
		cStatus:"Active",
		success:false,
		error:false,
		loading:false
	})

	const submitForm = ()=> {
		let responseData = createCategroy(data);
		console.log(responseData);
		if(responseData.error){
			setFdata({...fData,error:responseData.error})
		}else if(responseData.success){
			setFdata({...fData,success:responseData.success})
		}
	}

  return (
    <Fragment>
      {/* Black Overlay */}
      <div onClick={e=> dispatch({type:"addCategoryModal",payload:false})} className={`${data.addCategoryModal ? "" : "hidden"} fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`} />
      {/* End Black Overlay */}

  	  {/* Modal Start */}
      <div className={`${data.addCategoryModal ? "" : "hidden"} fixed inset-0 m-4  flex items-center z-30 justify-center`}>
        <div className="relative bg-white w-12/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4  overflow-y-auto px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">Add Category</span>
            {/* Close Modal */}
            <span onClick={e=> dispatch({type:"addCategoryModal",payload:false})} className="cursor-pointer hover:bg-gray-300 py-2 px-2 rounded-lg"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></span>
          </div>
          { fData.error ? <div>{fData.error}</div> : ""}
          {/* <hr class="border border-gray-300 w-full"> */}
          <div className="flex flex-col space-y-1 w-full py-4">
            <label htmlFor="name">Category Name</label>
            <input onChange={e=> setFdata({...fData,error:false,loading:false,cName:e.target.value})} value={fData.cName} className="px-4 py-2 border focus:outline-none" type="text" />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="description">Category Description</label>
            <textarea onChange={e=> setFdata({...fData,error:false,loading:false,cDescription:e.target.value})} value={fData.cDescription} className="px-4 py-2 border focus:outline-none" name="description" id="description" cols={5} rows={5} defaultValue={""} />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="name">Category Image</label>
            <input onChange={e=> setFdata({...fData,error:false,loading:false,cImage:e.target.files[0]})} className="px-4 py-2 border focus:outline-none" type="file" />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="status">Category Status</label>
            <select name="status" onChange={e=> setFdata({...fData,error:false,loading:false,cStatus:e.target.value})} className="px-4 py-2 border focus:outline-none" id="status">
              <option name="status" value="Active">Active</option>
              <option name="status" value="Disabled">Disabled</option>
            </select>
          </div>
          <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6">
            <button onClick={e=> submitForm()} className="bg-gray-800 text-gray-100 text-lg font-medium py-2">Create category</button>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default AddCategoryModal;