export const productDetailsState = {
    singleProduct:null,
    loading:false
}

export const productDetailsReducer = (state, action) => {
    switch (action.type) {
        case 'singleProduct':
            return {
                ...state,
                singleProduct: action.payload
            }
        case 'loading':
            return {
                ...state,
                loading: action.payload
            }
        case 'cartState':
            return {
                ...state,
                cartState: action.payload
            }
        default:
            return state
    }
}