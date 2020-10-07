import React, { Fragment } from 'react';

const SearchFilter = (props) => {
    return (
        <Fragment>
          <div className="m-4 flex flex-col space-y-4 md:space-y-0 md:flex-row  items-center justify-between">
            <div className="bg-white shadow-lg flex items-center rounded-full space-x-1 px-4 cursor-pointer">
              <span className="py-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" /></svg>
              </span>
              <span className="py-2">Product</span>
            </div>
            <div className="bg-white shadow-lg rounded-full flex items-center">
              <span className="py-2 px-3"><svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg></span>
              <input placeholder="Find something..." className="py-2 px-2 focus:outline-none" type="text" />
              <input style={{background: '#303031'}} className="py-2 px-4 focus:outline-none rounded-r-full cursor-pointer capitalize  text-gray-100" type="submit" defaultValue="search" />
            </div>
          </div>
        </Fragment>
    )
}

export default SearchFilter;