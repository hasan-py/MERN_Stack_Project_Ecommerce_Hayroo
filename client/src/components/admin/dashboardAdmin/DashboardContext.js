export const dashboardState = {
    totalData: {},
    totalOrders: {},
    uploadSliderBtn: false,
}

export const dashboardReducer = (state, action) => {
    switch (action.type) {
        case 'totalData':
            return {
                ...state,
                totalData: action.payload
            }
        case 'totalOrders':
            return {
                ...state,
                totalOrders: action.payload
            }
        case 'uploadSliderBtn':
            return {
                ...state,
                uploadSliderBtn: action.payload
            }
        default:
            return state
    }
}