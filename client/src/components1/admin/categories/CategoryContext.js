export const categoryState = {
    addCategoryModal:false,
    categories:[]
}

export const categoryReducer = (state, action) => {
    switch (action.type) {
        case 'addCategoryModal':
            return {
                ...state,
                addCategoryModal: action.payload
            }
        case 'fetchCategoryAndChangeState':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}