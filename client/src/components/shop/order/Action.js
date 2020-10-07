import { createOrder } from './FetchApi'

export const fetchData = async (cartListProduct, dispatch) => {
    try {
        let responseData = await cartListProduct();
        if (responseData && responseData.Products) {
            dispatch({ type: "cartProduct", payload: responseData.Products })
        }
    } catch (error) {
        console.log(error)
    }
}

export const fetchbrainTree = async (getBrainTreeToken, setState) => {
    try {
        let responseData = await getBrainTreeToken();
        if (responseData && responseData) {
            setState({ clientToken: responseData.clientToken, success: responseData.success })
            console.log(responseData);
        }
    } catch (error) {
        console.log(error)
    }
}

export const pay = async (data, dispatch, state, setState, getPaymentProcess, totalCost, history) => {
    if (!state.address) {
        setState({ ...state, error: "Please provide your address" })
    } else if (!state.phone) {
        setState({ ...state, error: "Please provide your phone number" })
    } else {
        let nonce;
        let getNonce = state.instance.requestPaymentMethod()
        .then(data => {
            nonce = data.nonce;
            let paymentData = {
                amountTotal: totalCost(),
                paymentMethod: nonce
            }
            getPaymentProcess(paymentData)
                .then(async (res) => {
                    if (res) {
                        let orderData = {
                            allProduct: JSON.parse(localStorage.getItem('cart')),
                            user: JSON.parse(localStorage.getItem('jwt')).user._id,
                            amount: res.transaction.amount,
                            transactionId: res.transaction.id,
                            address: state.address,
                            phone: state.phone
                        }
                        try {
                            let resposeData = await createOrder(orderData)
                            if (resposeData.success) {
                                localStorage.setItem('cart', JSON.stringify([]))
                                dispatch({ type: "cartProduct", payload: null })
                                dispatch({ type: "cartTotalCost", payload: null })
                                dispatch({ type: "orderSuccess", payload: true })
                                setState({ clientToken: "", instance: {} })
                                return history.push('/')
                            } else if (resposeData.error) {
                                console.log(resposeData.error);
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(error => {
            console.log(error);
            setState({ ...state, error: error.message })
        })
    }
}