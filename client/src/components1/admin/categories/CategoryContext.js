export const categoryState = {
    addCategoryModal:false
}

export const categoryReducer = (state, action) => {
    switch (action.type) {
        case 'addCategoryModal':
            return {
                ...state,
                addCategoryModal: action.payload
            }
        default:
            return state
    }
}