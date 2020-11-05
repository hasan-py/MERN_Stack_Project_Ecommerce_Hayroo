export const dashboardState = {
    totalData: {},
    totalOrders: {},
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
        default:
            return state
    }
}