import React, { Fragment, useContext, useEffect } from 'react';
import moment from 'moment';
import { DashboardContext } from './';
import { todayAllOrders } from './Action';

const apiURL = process.env.REACT_APP_API_URL

const SellTable = () => {


    const { data, dispatch } = useContext(DashboardContext)

    useEffect(() => {
        todayAllOrders(dispatch)
    },[])

    return (
        <Fragment>
        <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
          <table className="table-auto border w-full my-2">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Products</th>
                <th className="px-4 py-2 border">Image</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Order Address</th>
                <th className="px-4 py-2 border">Ordered at</th>
              </tr>
            </thead>
            <tbody>
              {
                data.totalOrders.Orders !== undefined  
                ? data.totalOrders.Orders.map((item,key)=> {
                  return (
                    <TodayOrderTable order={item} key={key} />
                  )
                })
                : <tr><td colSpan="5" className="text-xl text-center font-semibold py-8">No orders found today</td></tr>
              }
            </tbody>
          </table>
           <div className="text-sm text-gray-600 mt-2">Total {data.totalOrders.Orders !== undefined  ? data.totalOrders.Orders.length : 0} orders found</div>
        </div>
      </Fragment>
    )
}

const TodayOrderTable = ({ order }) => {
	console.log(order, "hello");
    return (
        <Fragment>
	      <tr>
	        <td className="w-48 hover:bg-gray-200 p-2 flex flex-col space-y-1">
              {order.address}
            </td>
	        <td className="p-2 text-left"></td>
	        <td className="p-2 text-center">
	          
	        </td>
	        <td className="p-2 text-center">
	          
	        </td>
	        <td className="p-2 text-center">{moment(order.createdAt).format('lll')}</td>        
	      </tr>
	    </Fragment>
    )
}

const TodaySell = (props) => {

    return (
        <div className="m-4">
        	<SellTable/>
    	</div>
    )
}

export default TodaySell;