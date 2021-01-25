import React, { Fragment, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Alert } from "./Action";

import moment from "moment";
import { LayoutContext } from "../layout";
import { deleteReview } from "./Action";
import { isAuthenticate } from "../auth/fetchApi";
import { getSingleProduct } from "./FetchApi";

const AllReviews = (props) => {
  const { data, dispatch } = useContext(LayoutContext);
  const { pRatingsReviews } = data.singleProductDetail;
  let { id } = useParams(); // Prodduct Id

  const [fData, setFdata] = useState({
    success: false,
  });

  if (fData.success) {
    setTimeout(() => {
      setFdata({ ...fData, success: false });
    }, 2000);
  }

  const fetchData = async () => {
    try {
      let responseData = await getSingleProduct(id);
      if (responseData.Product) {
        dispatch({
          type: "singleProductDetail",
          payload: responseData.Product,
        });
      }
      if (responseData.error) {
        console.log(responseData.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(pRatingsReviews);
  return (
    <Fragment>
      <div className="md:mx-16 lg:mx-20 xl:mx-24 flex flex-col">
        {fData.success ? Alert("red", fData.success) : ""}
      </div>
      <div className="mt-6 mb-12 md:mx-16 lg:mx-20 xl:mx-24">
        {/* List start */}
        {pRatingsReviews.length > 0 ? (
          pRatingsReviews.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-start">
                  <img
                    className="mx-2 w-16 h-16 rounded-full"
                    src="https://secure.gravatar.com/avatar/676d90a1574e9d3ebf98dd36f7adad60?s=60&d=mm&r=g"
                    alt="pic"
                  />
                  <div className="mx-2 flex justify-between w-full">
                    <div className="flex flex-col">
                      <div className="flex flex-col">
                        <span>{item.user ? item.user.name : ""}</span>
                        <span className="text-sm text-yellow-700">
                          {moment(item.createdAt).format("lll")}
                        </span>
                      </div>
                      <div className="leading-tight mt-3">{item.review}</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex">
                        {/* Yellow Star */}
                        {[...Array(Number(item.rating))].map((index) => {
                          return (
                            <span key={index}>
                              <svg
                                className="w-4 h-4 fill-current text-yellow-700"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </span>
                          );
                        })}
                        {/* White Star */}
                        {[...Array(5 - Number(item.rating))].map((index) => {
                          return (
                            <span key={index}>
                              <svg
                                className="w-4 h-4 fill-current text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </span>
                          );
                        })}
                      </div>
                      {item.user &&
                      isAuthenticate() &&
                      item.user._id === isAuthenticate().user._id ? (
                        <div className="flex justify-center my-2">
                          <span
                            onClick={(e) =>
                              deleteReview(
                                item._id,
                                data.singleProductDetail._id,
                                fetchData,
                                setFdata
                              )
                            }
                            className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
                          >
                            <svg
                              className="w-6 h-6 text-yellow-700"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </span>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })
        ) : (
          <div>No Review found</div>
        )}
      </div>
    </Fragment>
  );
};

export default AllReviews;
