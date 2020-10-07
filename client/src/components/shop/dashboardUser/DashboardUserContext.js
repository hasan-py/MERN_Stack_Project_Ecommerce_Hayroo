export const dashboardUserState = {
    userDetails: null,
    loading:false,
    OrderByUser:null,
}

export const dashboardUserReducer = (state, action) => {
    switch (action.type) {
        case 'userDetails':
            return {
                ...state,
                userDetails: action.payload
            }
        case 'OrderByUser':
            return {
                ...state,
                OrderByUser: action.payload
            }
        case 'loading':
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}