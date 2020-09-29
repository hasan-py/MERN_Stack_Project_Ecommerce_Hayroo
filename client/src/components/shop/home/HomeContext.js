export const homeState = {
    categoryListDropdown: true,
    filterListDropdown: false,
    searchDropdown: false,
}

export const homeReducer = (state, action) => {
    switch (action.type) {
        case 'categoryListDropdown':
            return {
                ...state,
                categoryListDropdown: action.payload,
                filterListDropdown: false,
                searchDropdown: false
            }
        case 'filterListDropdown':
            return {
                ...state,
                categoryListDropdown: false,
                filterListDropdown: action.payload,
                searchDropdown: false
            }
        case 'searchDropdown':
            return {
                ...state,
                categoryListDropdown: false,
                filterListDropdown: false,
                searchDropdown: action.payload
            }
        default:
            return state
    }
}