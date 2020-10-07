import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

const AdminNavber = (props) => {

    const history = useHistory();

    const logout = () => {
      localStorage.removeItem("jwt")
      localStorage.removeItem("cart")
      localStorage.removeItem("wishList")
      window.location.href = "/";
    }

    return (
        <Fragment>
          <nav className="sticky z-10 flex items-center shadow-md justify-between px-4 py-4 md:px-8 top-0 w-full bg-white">
            {/*  Large Screen Show  */}
            <div className="hidden lg:block lg:flex lg:items-center lg:space-x-4 mr-32">
              <span>
                <svg className="w-8 h-8 cursor-pointer text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </span>
            </div>
            {/*  Large Screen Show  */}
            <div className="hidden lg:block">
              <span onClick={e=> history.push("/admin/dashboard")} style={{letterSpacing: '0.70rem'}} className="flex items-left text-center font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center">Hayroo</span>
            </div>
            {/* Small Screen Show */}
            <div className="lg:hidden flex items-center">
              <svg id="hamburgerBtn" className="lg:hidden w-8 h-8 cursor-pointer text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              <span onClick={e=> history.push("/admin/dashboard")} style={{letterSpacing: '0.10rem'}} className="flex items-left text-center font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center">Hayroo</span>
            </div>
            {/* Both Screen show */}
            <div className="flex items-center">
              <div className="hover:bg-gray-200 rounded-lg p-2" title="Search">
                <svg className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              </div>
              <div className="hover:bg-gray-200 rounded-lg p-2" title="Search">
                <svg className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              {/* Logout Button Dropdown */ }
              <div className="userDropdownBtn hover:bg-gray-200 px-2 py-2 rounded-lg relative" title="Logout">
                <svg className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div className="userDropdown absolute right-0 mt-1 bg-gray-200 rounded">
                  <li className="flex flex-col text-gray-700">
                    <a onClick={e=> history.push("/")} className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer">
                      <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg></span>
                      <span>Shop</span>
                    </a>
                    <a className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer">
                      <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></span>
                      <span>Profile</span>
                    </a>
                    <a className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer">
                      <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></span>
                      <span>Setting</span>
                    </a>
                    <a onClick={e=> logout() } className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer">
                      <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg></span>
                      <span>Logout</span>
                    </a>
                  </li>
                </div>
              </div>
            </div>
            {/* Mobile Navber */}
            {/* End Mobile Navber */}
          </nav>
        </Fragment>
    )
}

export default AdminNavber;