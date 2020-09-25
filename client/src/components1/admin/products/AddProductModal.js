import React,{Fragment,useContext,useState} from 'react';
import {ProductContext} from "./index";
import {createProduct,getAllProduct} from "./FetchApi";

const AddProductModal = (props) => {
  
  const {data,dispatch} = useContext(ProductContext);

  const alert = (msg,type)=> <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
  
  const [fData,setFdata] = useState({
    pName:"",
    pDescription:"",
    pStatus:"Active",
    pImage:[],
    pCategory:"",
    pQuantity:"",
    pPrice:"",
    pOffer:0,
    pQuantity:"",
    success:false,
    error:false
  })

/*  const fetchData = async () => {
      let responseData = await getAllProduct();
      if (responseData.Categories) {
          dispatch({type:"fetchProductAndChangeState",payload:responseData.Categories})
      }
  }
*/
  
  /* Handle Multiple image */
  const imageHandle = (e)=> {
    let imageArray = []
    for (var i = 0; i<e.target.files.length; i++) {
      imageArray.push(e.target.files[i])
    }
    setFdata({...fData,pImage:imageArray})
  }

  const submitForm = async (e)=> {
    // Reset and prevent the form
    e.preventDefault();
    e.target.reset();

    try {
      let responseData = await createProduct(fData);
      if(responseData.success){
        // fetchData();
        setFdata({...fData,cName:"",cDescription:"",cImage:"",cStatus:"Active",success:responseData.success,error:false})
        setTimeout(()=> {
          setFdata({...fData,cName:"",cDescription:"",cImage:"",cStatus:"Active",success:false,error:false})
        },2000)
      }else if(responseData.error){
        setFdata({...fData,success:false,error:responseData.error})
        setTimeout(()=> {
          return setFdata({...fData,error:false,success:false})
        },2000)
      }
    } catch(error){
      console.log(error);
    }

  }

  return (
    <Fragment>
      {/* Black Overlay */}
      <div onClick={e=> dispatch({type:"addProductModal",payload:false})} className={`${data.addProductModal ? "" : "hidden"} fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`} />
      {/* End Black Overlay */}

      {/* Modal Start */}
      <div className={`${data.addProductModal ? "" : "hidden"} fixed inset-0 flex items-center z-30 justify-center overflow-auto`}>
        <div className="mt-32 md:mt-0 relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">Add Product</span>
            {/* Close Modal */}
            <span onClick={e=> dispatch({type:"addProductModal",payload:false})} className="cursor-pointer hover:bg-gray-300 py-2 px-2 rounded-lg"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></span>
          </div>
          { fData.error ? alert(fData.error,"red") : ""}
          { fData.success ? alert(fData.success,"green") : ""}
          <form className="w-full" onSubmit={e=> submitForm(e)}>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="name">Product Name *</label>
                <input 
                  value={fData.pName} 
                  onChange={e=> setFdata({...fData,error:false,success:false,pName:e.target.value})}
                  className="px-4 py-2 border focus:outline-none" type="text" />
              </div>
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="price">Product Price *</label>
                <input 
                  value={fData.pPrice} 
                  onChange={e=> setFdata({...fData,error:false,success:false,pPrice:e.target.value})}
                  type="number"  className="px-4 py-2 border focus:outline-none" id="price" />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="description">Product Description *</label>
              <textarea 
                value={fData.pDescription} 
                onChange={e=> setFdata({...fData,error:false,success:false,pDescription:e.target.value})} 
                className="px-4 py-2 border focus:outline-none"
                name="description" 
                id="description" cols={5} rows={2} />
            </div>
            {/* Image Field & function */}
            <div className="flex flex-col mt-4">
              <label htmlFor="image">Product Images *</label>
              <span className="text-gray-600 text-xs">Must need three images</span>
              <input 
                onChange={e=> imageHandle(e)} 
                type="file" 
                className="px-4 py-2 border focus:outline-none" 
                id="image" 
                accept=".jpg, .jpeg, .png"
                multiple />
            </div>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="status">Product Status *</label>
                <select 
                  value={fData.pStatus} 
                  onChange={e=> setFdata({...fData,error:false,success:false,pStatus:e.target.value})} 
                  name="status"
                  className="px-4 py-2 border focus:outline-none" 
                  id="status">
                  <option name="status" value="Active">Active</option>
                  <option name="status" value="Disabled">Disabled</option>
                </select>
              </div>
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="status">Product Category *</label>
                <select 
                  value={fData.pCategory} 
                  onChange={e=> setFdata({...fData,error:false,success:false,pCategory:e.target.value})}
                  name="status" 
                  className="px-4 py-2 border focus:outline-none" id="status">
                  <option name="status" value="Active">Active</option>
                  <option name="status" value="Disabled">Disabled</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="quantity">Product Quantitiy *</label>
                <input 
                  value={fData.pQuantity} 
                  onChange={e=> setFdata({...fData,error:false,success:false,pQuantity:e.target.value})}
                  type="number" 
                  className="px-4 py-2 border focus:outline-none" 
                  id="quantity" />
              </div>
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="offer">Product Offfer (%) *</label>
                <input 
                  value={fData.pOffer}
                  onChange={e=> setFdata({...fData,error:false,success:false,pOffer:e.target.value})}
                  type="number"
                  className="px-4 py-2 border focus:outline-none"
                  id="offer" />
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6 mt-4">
              <button type="submit" className="bg-gray-800 text-gray-100 text-lg font-medium py-2">Create product</button>
            </div>
          </form>
        </div>
      </div>

    </Fragment>
  )
}

export default AddProductModal;