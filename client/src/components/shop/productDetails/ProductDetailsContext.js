export const productDetailsState = {
    singleProduct:null,
}

export const productDetailsReducer = (state, action) => {
    switch (action.type) {
        case 'singleProduct':
            return {
                ...state,
                singleProduct: action.payload
            }
        default:
            return state
    }
}