import React, { Fragment, useContext, useState, useEffect } from "react";
import { ProductContext } from "./index";
import { editProduct, getAllProduct } from "./FetchApi";
import { getAllCategory } from "../categories/FetchApi";
const apiURL = process.env.REACT_APP_API_URL;

const EditProductModal = (props) => {
  const { data, dispatch } = useContext(ProductContext);

  const [categories, setCategories] = useState(null);

  const alert = (msg, type) => (
    <div className={`bg-${type}-200 py-2 px-4 w-full`}>{msg}</div>
  );

  const [editformData, setEditformdata] = useState({
    pId: "",
    pName: "",
    pDescription: "",
    pImages: null,
    pEditImages: null,
    pStatus: "",
    pCategory: "",
    pQuantity: "",
    pPrice: "",
    pOffer: "",
    error: false,
    success: false,
  });

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const fetchCategoryData = async () => {
    let responseData = await getAllCategory();
    if (responseData.Categories) {
      setCategories(responseData.Categories);
    }
  };

  useEffect(() => {
    setEditformdata({
      pId: data.editProductModal.pId,
      pName: data.editProductModal.pName,
      pDescription: data.editProductModal.pDescription,
      pImages: data.editProductModal.pImages,
      pStatus: data.editProductModal.pStatus,
      pCategory: data.editProductModal.pCategory,
      pQuantity: data.editProductModal.pQuantity,
      pPrice: data.editProductModal.pPrice,
      pOffer: data.editProductModal.pOffer,
    });
  }, [data.editProductModal]);

  const fetchData = async () => {
    let responseData = await getAllProduct();
    if (responseData && responseData.Products) {
      dispatch({
        type: "fetchProductsAndChangeState",
        payload: responseData.Products,
      });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!editformData.pEditImages) {
      console.log("Image Not upload=============", editformData);
    } else {
      console.log("Image uploading");
    }
    try {
      let responseData = await editProduct(editformData);
      if (responseData.success) {
        fetchData();
        setEditformdata({ ...editformData, success: responseData.success });
        setTimeout(() => {
          return setEditformdata({
            ...editformData,
            success: responseData.success,
          });
        }, 2000);
      } else if (responseData.error) {
        setEditformdata({ ...editformData, error: responseData.error });
        setTimeout(() => {
          return setEditformdata({
            ...editformData,
            error: responseData.error,
          });
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      {/* Black Overlay */}
      <div
        onClick={(e) =>
          dispatch({ type: "editProductModalClose", payload: false })
        }
        className={`${
          data.editProductModal.modal ? "" : "hidden"
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}

      {/* Modal Start */}
      <div
        className={`${
          data.editProductModal.modal ? "" : "hidden"
        } fixed inset-0 flex items-center z-30 justify-center overflow-auto`}
      >
        <div className="mt-32 md:mt-0 relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4 px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
              Edit Product
            </span>
            {/* Close Modal */}
            <span
              style={{ background: "#303031" }}
              onClick={(e) =>
                dispatch({ type: "editProductModalClose", payload: false })
              }
              className="cursor-pointer text-gray-100 py-2 px-2 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          {editformData.error ? alert(editformData.error, "red") : ""}
          {editformData.success ? alert(editformData.success, "green") : ""}
          <form className="w-full" onSubmit={(e) => submitForm(e)}>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="name">Product Name *</label>
                <input
                  value={editformData.pName}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      pName: e.target.value,
                    })
                  }
                  className="px-4 py-2 border focus:outline-none"
                  type="text"
                />
              </div>
              <div className="w-1/2 flex flex-col space-y-1 space-x-1">
                <label htmlFor="price">Product Price *</label>
                <input
                  value={editformData.pPrice}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      pPrice: e.target.value,
                    })
                  }
                  type="number"
                  className="px-4 py-2 border focus:outline-none"
                  id="price"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="description">Product Description *</label>
              <textarea
                value={editformData.pDescription}
                onChange={(e) =>
                  setEditformdata({
                    ...editformData,
                    error: false,
                    success: false,
                    pDescription: e.target.value,
                  })
                }
                className="px-4 py-2 border focus:outline-none"
                name="description"
                id="description"
                cols={5}
                rows={2}
              />
            </div>
            {/* Most Important part for uploading multiple image */}
            <div className="flex flex-col mt-4">
              <label htmlFor="image">Product Images *</label>
              {editformData.pImages ? (
                <div className="flex space-x-1">
                  <img
                    className="h-16 w-16 object-cover"
                    src={`${apiURL}/uploads/products/${editformData.pImages[0]}`}
                    alt="productImage"
                  />
                  <img
                    className="h-16 w-16 object-cover"
                    src={`${apiURL}/uploads/products/${editformData.pImages[1]}`}
                    alt="productImage"
                  />
                </div>
              ) : (
                ""
              )}
              <span className="text-gray-600 text-xs">Must need 2 images</span>
              <input
                onChange={(e) =>
                  setEditformdata({
                    ...editformData,
                    error: false,
                    success: false,
                    pEditImages: [...e.target.files],
                  })
                }
                type="file"
                accept=".jpg, .jpeg, .png"
                className="px-4 py-2 border focus:outline-none"
                id="image"
                multiple
              />
            </div>
            {/* Most Important part for uploading multiple image */}
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="status">Product Status *</label>
                <select
                  value={editformData.pStatus}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      pStatus: e.target.value,
                    })
                  }
                  name="status"
                  className="px-4 py-2 border focus:outline-none"
                  id="status"
                >
                  <option name="status" value="Active">
                    Active
                  </option>
                  <option name="status" value="Disabled">
                    Disabled
                  </option>
                </select>
              </div>
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="status">Product Category *</label>
                <select
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      pCategory: e.target.value,
                    })
                  }
                  name="status"
                  className="px-4 py-2 border focus:outline-none"
                  id="status"
                >
                  <option disabled value="">
                    Select a category
                  </option>
                  {categories && categories.length > 0
                    ? categories.map((elem) => {
                        return (
                          <Fragment key={elem._id}>
                            {editformData.pCategory._id &&
                            editformData.pCategory._id === elem._id ? (
                              <option
                                name="status"
                                value={elem._id}
                                key={elem._id}
                                selected
                              >
                                {elem.cName}
                              </option>
                            ) : (
                              <option
                                name="status"
                                value={elem._id}
                                key={elem._id}
                              >
                                {elem.cName}
                              </option>
                            )}
                          </Fragment>
                        );
                      })
                    : ""}
                </select>
              </div>
            </div>
            <div className="flex space-x-1 py-4">
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="quantity">Product in Stock *</label>
                <input
                  value={editformData.pQuantity}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      pQuantity: e.target.value,
                    })
                  }
                  type="number"
                  className="px-4 py-2 border focus:outline-none"
                  id="quantity"
                />
              </div>
              <div className="w-1/2 flex flex-col space-y-1">
                <label htmlFor="offer">Product Offfer (%) *</label>
                <input
                  value={editformData.pOffer}
                  onChange={(e) =>
                    setEditformdata({
                      ...editformData,
                      error: false,
                      success: false,
                      pOffer: e.target.value,
                    })
                  }
                  type="number"
                  className="px-4 py-2 border focus:outline-none"
                  id="offer"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6 mt-4">
              <button
                style={{ background: "#303031" }}
                type="submit"
                className="rounded-full bg-gray-800 text-gray-100 text-lg font-medium py-2"
              >
                Update product
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProductModal;
