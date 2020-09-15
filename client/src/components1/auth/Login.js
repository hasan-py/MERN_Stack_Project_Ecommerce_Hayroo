import React,{Fragment} from 'react';

const Login = (props) => {
  return (
    <Fragment>
          <div className="text-center text-2xl mb-6">Login</div>
          <form className="space-y-4" action>
            <div className="flex flex-col">
              <label htmlFor="name">Username or email address<span className="text-sm text-gray-600 ml-1">*</span></label>
              <input type="text" id="name" className="px-4 py-2 focus:outline-none border" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password<span className="text-sm text-gray-600 ml-1">*</span></label>
              <input type="text" id="password" className="px-4 py-2 focus:outline-none border" />
            </div>
            <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">
              <div>
                <input type="checkbox" id="rememberMe" className="px-4 py-2 focus:outline-none border mr-1" />
                <label htmlFor="rememberMe">Remember me<span className="text-sm text-gray-600">*</span></label>
              </div> 
              <a className="block text-gray-600" href="#">Lost your password?</a>
            </div>
            <div style={{background: '#303031'}} className="px-4 py-2 text-white text-center cursor-pointer">Login</div>
          </form>
    </Fragment>
  )
}

export default Login;