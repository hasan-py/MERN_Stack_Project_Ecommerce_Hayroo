import React, { Fragment, useEffect } from 'react';
import { GetAllData } from './Action';

const DashboardCard = (props) => {

    useEffect(()=> {
      GetAllData()
    }, [])

    return (
        <Fragment>
          {/* Card Start */}
          <div className="m-4 grid grid-cols-1 md:grid-cols-4 row-gap-4 col-gap-4">
            <div className="flex flex-col justify-center items-center col-span-1 bg-white p-6 shadow-lg hover:shadow-none cursor-pointer transition-all duration-300 ease-in border-b-4 border-opacity-0 hover:border-opacity-100 border-indigo-200">
              <div className="bg-indigo-200 p-2 cursor-pointer rounded-full"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
              <div className="text-2xl font-semibold">5658</div>
              <div className="text-lg font-medium">Customers</div>
              <div className="flex items-center space-x-1 text-green-500">
                <span>7%</span>
                <span><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg></span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center col-span-1 bg-white p-6 shadow-lg hover:shadow-none cursor-pointer transition-all duration-300 ease-in border-b-4 border-opacity-0 hover:border-opacity-100 border-red-200">
              <div className="bg-red-200 p-2 cursor-pointer rounded-full"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg></div>
              <div className="text-2xl font-semibold">10000</div>
              <div className="text-lg font-medium">Order</div>
              <div className="flex items-center space-x-1 text-green-500">
                <span>10%</span>
                <span><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg></span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center col-span-1 bg-white p-6 shadow-lg hover:shadow-none cursor-pointer transition-all duration-300 ease-in border-b-4 border-opacity-0 hover:border-opacity-100 border-green-200">
              <div className="bg-green-200 p-2 cursor-pointer rounded-full"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" /></svg></div>
              <div className="text-2xl font-semibold">200</div>
              <div className="text-lg font-medium">Product</div>
              <div className="flex items-center space-x-1 text-green-500">
                <span>14%</span>
                <span><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg></span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center col-span-1 bg-white p-6 shadow-lg hover:shadow-none cursor-pointer transition-all duration-300 ease-in border-b-4 border-opacity-0 hover:border-opacity-100 border-orange-200">
              <div className="bg-orange-200 p-2 cursor-pointer rounded-full"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg></div>
              <div className="text-2xl font-semibold">10</div>
              <div className="text-lg font-medium">Categories</div>
              <div className="flex items-center space-x-1 text-green-500">
                <span>12%</span>
                <span><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg></span>
              </div>
            </div>
          </div>
        {/* End Card */}
        </Fragment>
    )
}

export default DashboardCard;