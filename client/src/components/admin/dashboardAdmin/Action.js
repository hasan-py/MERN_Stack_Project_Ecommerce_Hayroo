import { DashboardData } from './FetchApi';
import { getAllOrder } from '../orders/FetchApi.js';

export const GetAllData = async (dispatch)=> {
	let responseData = await DashboardData()
	if(responseData){
		dispatch({type:"totalData", payload:responseData})
	}
}

export const todayAllOrders = async (dispatch)=> {
	let responseData = await getAllOrder()
	if(responseData){
		dispatch({type:"totalOrders", payload:responseData})
	}
}