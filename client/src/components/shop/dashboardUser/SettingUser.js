import React, { Fragment, useState } from 'react';
import Layout from './Layout';
import { handleChangePassword } from './Action';

const SettingComponent = () => {

    const [fData, setFdata] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
        success:false,
        error:false,
        passwordView:false,
        type:"password"
    })

    if (fData.success || fData.error) {
        setTimeout(() => {
            setFdata({ ...fData, success: false, error:false })
        }, 1500)
    }

    return (
        <Fragment>
			<div className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
				<div className="shadow-lg border">
					<div className="py-4 px-4 text-lg font-semibold border-t-2 border-yellow-700">Change Password</div>
					<hr/>
					<div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4">
						{
							fData.success ? <div className="bg-green-200 px-4 py-2 rounded">{fData.success}</div> : ""
						}
						{
							fData.error ? <div className="bg-red-200 px-4 py-2 rounded">{fData.error}</div> : ""
						}
						<div className="flex flex-col space-y-2">
							<label htmlFor="oldPassword">Old Password</label>
							<div className="relative">
								<input onChange={e=> setFdata({...fData,oldPassword:e.target.value})} value={fData.oldPassword} type={fData.type} id="oldPassword" className="z-10 border px-4 py-2 w-full focus:outline-none" />
								<span onClick={e=> setFdata({passwordView:false, type:"password"})} className={`${fData.passwordView ? "" : "hidden"} absolute right-0 m-2 box-border cursor-pointer`}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></span>
								<span onClick={e=> setFdata({passwordView:true, type:"text"})} className={`${!fData.passwordView ? "" : "hidden"} absolute right-0 m-2 box-border cursor-pointer`}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg></span>
							</div>
							</div>
						<div className="flex flex-col space-y-2">
							<label htmlFor="newPassword">New Password</label>
							<input onChange={e=> setFdata({...fData,newPassword:e.target.value})} value={fData.newPassword} type="password" id="newPassword" className="border px-4 py-2 w-full focus:outline-none" />
						</div>
						<div className="flex flex-col space-y-2">
							<label htmlFor="confirmPassword">Confirm Password</label>
							<input onChange={e=> setFdata({...fData,confirmPassword:e.target.value})} value={fData.confirmPassword} type="password" id="confirmPassword" className="border px-4 py-2 w-full focus:outline-none" />
						</div>
						<div onClick={e=> handleChangePassword(fData, setFdata)} style={{background: '#303031'}} className="w-full text-center cursor-pointer px-4 py-2 text-gray-100">Change password</div>
					</div>
				</div>
			</div>
		</Fragment>
    )
}

const SettingUser = (props) => {
    return (
        <Fragment>
	    	<Layout children={<SettingComponent/>}/>
	    </Fragment>
    )
}

export default SettingUser;