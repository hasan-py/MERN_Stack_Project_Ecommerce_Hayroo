import React, { Fragment } from 'react';

const SearchFilter = (props) => {
    return (
        <Fragment>
	        <div className="rounded-full flex items-center justify-between overflow-hidden">
	          <span style={{background: '#303031'}}  className="py-2 px-3"><svg className="rounded-l-full w-6 h-6 text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg></span>
	          <input placeholder="Find category..." className="py-2 px-2 focus:outline-none rounded-r-full w-full" type="text" />
	        </div>
	    </Fragment>
    )
}

export default SearchFilter;