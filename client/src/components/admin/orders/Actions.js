import { getAllOrder, deleteOrder } from "./FetchApi";

export const fetchData = async (dispatch) => {
    dispatch({ type: "loading", payload: true })
    let responseData = await getAllOrder();
    setTimeout(() => {
        if (responseData && responseData.Orders) {
            dispatch({ type: "fetchOrderAndChangeState", payload: responseData.Orders })
            dispatch({ type: "loading", payload: false })
        }
    }, 1000)
}

/* This method call the editmodal & dispatch category context */
export const editOrderReq = (oId, type, status, dispatch) => {
    if (type) {
        console.log("click update");
        dispatch({ type: "updateOrderModalOpen", oId: oId, status: status })
    }
}