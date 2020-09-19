import React,{Fragment} from 'react';

const AllCategory = (props) => {
  return (
    <Fragment>
    	<div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <table className="table-auto border w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Created at</th>
              <th className="px-4 py-2 border">Updated at</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 text-left">Lighthouse Lantern
              </td>
              <td className="p-2 text-left">Man faishon</td>
              <td className="p-2 text-center">16</td>
              <td className="p-2 text-center">
              	<span className="bg-green-200 rounded-full text-center text-xs px-2 font-semibold">Active</span>
              </td>
              <td className="p-2 text-center">200</td>     
              <td className="p-2 text-center">200</td>     
              <td className="p-2 flex items-center justify-center">
              	<span className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1">
              		<svg className="w-6 h-6 fill-current text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
              	</span>
              	<span className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1">
              		<svg className="w-6 h-6 fill-current text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              	</span>
              </td>     
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default AllCategory;