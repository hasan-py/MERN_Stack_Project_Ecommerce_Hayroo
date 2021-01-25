import React, { Fragment, useContext, useEffect } from "react";
import { DashboardContext } from "./";
import { uploadImage, sliderImages, deleteImage } from "./Action";

const apiURL = process.env.REACT_APP_API_URL;

const Customize = () => {
  const { data, dispatch } = useContext(DashboardContext);

  return (
    <Fragment>
      <div className="m-4 md:w-1/2">
        {!data.uploadSliderBtn ? (
          <div
            onClick={(e) =>
              dispatch({
                type: "uploadSliderBtn",
                payload: !data.uploadSliderBtn,
              })
            }
            style={{ background: "#303031" }}
            className="cursor-pointer rounded-full p-2 flex items-center justify-center text-gray-100 text-sm font-semibold uppercase"
          >
            <svg
              className="w-6 h-6 text-gray-100 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Customize Slider Image
          </div>
        ) : (
          ""
        )}
      </div>
      {data.uploadSliderBtn ? <UploadImageSection /> : ""}
    </Fragment>
  );
};

const UploadImageSection = () => {
  const { data, dispatch } = useContext(DashboardContext);

  const uploadImageHandler = (image) => {
    uploadImage(image, dispatch);
  };

  return (
    <Fragment>
      <div className="relative m-4 bg-white p-4 shadow-lg">
        <h1 className="border-b-2 border-yellow-700 mb-4 pb-2 text-2xl font-semibold">
          Shop Slider Images
        </h1>
        <div className="relative flex flex-col space-y-2">
          <div
            style={{ background: "#303031" }}
            className="relative z-0 px-4 py-2 rounded text-white flex justify-center space-x-2 md:w-4/12"
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>{" "}
            <span>Upload File</span>
          </div>
          <input
            onChange={(e) => uploadImageHandler(e.target.files[0])}
            name="image"
            accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
            className="absolute z-10 opacity-0 bg-gray-100"
            type="file"
            id="image"
          />
        </div>
        <span
          onClick={(e) =>
            dispatch({
              type: "uploadSliderBtn",
              payload: !data.uploadSliderBtn,
            })
          }
          style={{ background: "#303031" }}
          className="cursor-pointer absolute top-0 right-0 m-4 rounded-full p-1"
        >
          <svg
            className="w-6 h-6 text-white"
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
        <AllImages />
      </div>
    </Fragment>
  );
};

const AllImages = () => {
  const { data, dispatch } = useContext(DashboardContext);

  useEffect(() => {
    sliderImages(dispatch);
  }, []);

  const deleteImageReq = (id) => {
    deleteImage(id, dispatch);
  };

  return (
    <Fragment>
      {data.imageUpload ? (
        <div className="flex items-center justify-center p-8">
          <svg
            className="w-12 h-12 animate-spin text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
        </div>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 my-4">
        {data.sliderImages.length > 0 ? (
          data.sliderImages.map((item, index) => {
            return (
              <div key={index} className="relative col-span-1 m-2 border">
                <img
                  className="w-full md:h-32 object-center object-cover"
                  src={`${apiURL}/uploads/customize/${item.slideImage}`}
                  alt="sliderImages"
                />
                <span
                  onClick={(e) => deleteImageReq(item._id)}
                  style={{ background: "#303031" }}
                  className="absolute top-0 right-0 m-1 text-white cursor-pointer rounded-full p-1"
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
            );
          })
        ) : (
          <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-xl font-light w-full bg-orange-200 rounded py-2">
            No slide image found
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Customize;
