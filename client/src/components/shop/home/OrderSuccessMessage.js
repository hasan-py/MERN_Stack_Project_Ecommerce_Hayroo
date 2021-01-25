import React, { Fragment, useContext } from "react";
import { LayoutContext } from "../layout";

const OrderSuccessMessage = (props) => {
  const { data, dispatch } = useContext(LayoutContext);
  return (
    <Fragment>
      <div
        className={`${
          data.orderSuccess ? "" : "hidden"
        } fixed bottom-0 flex justify-between items-center z-30 w-full bg-gray-800 text-white text-lg py-8 md:py-16 md:text-xl px-4 text-center`}
      >
        <span className="w-10/12 md:w-full">
          Your Order in process. Wait 2 days to deliver.
        </span>
        <span
          onClick={(e) => dispatch({ type: "orderSuccess", payload: false })}
          className="hover:bg-gray-400 hover:text-gray-800 p-2 rounded-full cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </Fragment>
  );
};

export default OrderSuccessMessage;
