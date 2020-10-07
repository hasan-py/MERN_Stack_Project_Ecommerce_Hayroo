import React,{Fragment} from 'react';
import Layout from './Layout';

const ProfileComponent = ()=> {
	return(
		<Fragment>
			<div className="flex flex-col w-full md:w-9/12 md:px-8">
				<div className="shadow-lg py-4">
					<div className="py-4 px-4 text-lg font-semibold border-t-2 border-yellow-700">Personal Information</div>
					<hr/>
					<div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4">
						<div className="flex flex-col space-y-2">
							<label htmlFor="name">Name</label>
							<input type="text" id="name" className="border px-4 py-2 w-full focus:outline-none" />
						</div>
						<div className="flex flex-col space-y-2">
							<label htmlFor="email">Email</label>
							<input value={"hasan@gmail.com"} readonly type="email" id="email" className="cursor-not-allowed border px-4 py-2 bg-gray-200 w-full focus:outline-none focus:cursor-not-allowed" />
						</div>
						<div className="flex flex-col space-y-2">
							<label htmlFor="number">Phone Number</label>
							<input type="number" id="number" className="border px-4 py-2 w-full focus:outline-none" />
						</div>
						<div style={{background: '#303031'}} className="w-full text-center cursor-pointer px-4 py-2 text-gray-100">Update Information</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

const UserProfile = (props) => {
  return (
    <Fragment>
    	<Layout children={<ProfileComponent/>}/>
    </Fragment>
  )
}

export default UserProfile;