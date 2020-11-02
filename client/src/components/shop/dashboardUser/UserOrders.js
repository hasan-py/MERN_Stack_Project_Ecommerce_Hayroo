import React, { Fragment, useEffect, useContext } from 'react';
import moment from "moment";

import Layout from './Layout';
import { DashboardUserContext } from './Layout'
import { fetchOrderByUser } from './Action'

const apiURL = process.env.REACT_APP_API_URL


const TableHeader = () => {
    return (
        <Fragment>
      <thead>
              <tr>
                <th className="px-4 py-2 border">Products</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Total</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Address</th>
                <th className="px-4 py-2 border">Transaction Id</th>
                <th className="px-4 py-2 border">Checkout</th>
                <th className="px-4 py-2 border">Processing</th>
              </tr>
            </thead>
    </Fragment>
    )
}

const TableBody = ({ order }) => {
    return (
        <Fragment>
          <tr className="border-b">
            <td className="w-48 hover:bg-gray-200 p-2 flex flex-col space-y-1">
              
              {
                order.allProduct.map((product,i)=> {
                  return (
                    <span className="block flex items-center space-x-2"  key={i}>
                      <img className="w-8 h-8 object-cover object-center" src={`${apiURL}/uploads/products/${product.id.pImages[0]}`} alt="productImage" />
                      <span>{product.id.pName}</span>
                      <span>{product.quantitiy}x</span>
                    </span>
                  )
                })
              }
            </td>
            <td className="hover:bg-gray-200 p-2 text-center cursor-default">
              { order.status === 'Not processed' && <span className="block text-red-600 rounded-full text-center text-xs px-2 font-semibold">{order.status}</span>}
              { order.status === 'Processing' && <span className="block text-yellow-600 rounded-full text-center text-xs px-2 font-semibold">{order.status}</span>}
              { order.status === 'Shipped' && <span className="block text-blue-600 rounded-full text-center text-xs px-2 font-semibold">{order.status}</span>}
              { order.status === 'Delivered' && <span className="block text-green-600 rounded-full text-center text-xs px-2 font-semibold">{order.status}</span>}
              { order.status === 'Cancelled' && <span className="block text-red-600 rounded-full text-center text-xs px-2 font-semibold">{order.status}</span>}
            </td>
            <td className="hover:bg-gray-200 p-2 text-center">${ order.amount }.00</td>
            <td className="hover:bg-gray-200 p-2 text-center">{ order.phone }</td>
            <td className="hover:bg-gray-200 p-2 text-center">{ order.address }</td>
            <td className="hover:bg-gray-200 p-2 text-center">{ order.transactionId }</td>
            <td className="hover:bg-gray-200 p-2 text-center">{moment(order.createdAt).format('lll')}</td>     
            <td className="hover:bg-gray-200 p-2 text-center">{moment(order.updatedAt).format('lll')}</td>       
          </tr>
        </Fragment>
    )
}

const OrdersComponent = () => {
    const { data, dispatch } = useContext(DashboardUserContext)
    const { OrderByUser: orders } = data

    useEffect(() => {
        fetchOrderByUser(dispatch)
    })

    if (data.loading) {
        return <div className="w-full md:w-9/12 flex items-center justify-center py-24"><svg className="w-12 h-12 animate-spin text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></div>
    }
    return (
        <Fragment>
          <div className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
            <div className="border">
               <div className="py-4 px-4 text-lg font-semibold border-t-2 border-yellow-700">Orders</div>
                <hr/>
                <div className="overflow-auto bg-white shadow-lg p-4">
                  <table className="table-auto border w-full my-2">
                    <TableHeader/>
                    <tbody>
                            {
                              orders && orders.length > 0 
                              ? orders.map((item,i)=> {
                                return (
                                  <TableBody key={i} order={item}/>
                                )
                              })
                              : <tr><td colSpan="8" className="text-xl text-center font-semibold py-8">No order found</td></tr>
                            }
                          </tbody>
                  </table>
                    <div className="text-sm text-gray-600 mt-2">Total {orders && orders.length} order found</div>
                </div>
            </div>
          </div>
        </Fragment>
    )
}

const UserOrders = (props) => {
    return (
        <Fragment>
      <Layout children={<OrdersComponent/>} />
    </Fragment>
    )
}

export default UserOrders;