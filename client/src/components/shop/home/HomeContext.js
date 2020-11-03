export const homeState = {
    categoryListDropdown: false,
    filterListDropdown: false,
    searchDropdown: false,
    products:null,
    loading:false,
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
        case 'setProducts':
            return {
                ...state,
                products:action.payload
            }       
        case 'searchHandleInReducer':
            return {
                ...state,
                products: action.productArray && action.productArray.filter(item=> {
                    if(item.pName.toUpperCase().indexOf(action.payload.toUpperCase()) !== -1 ){
                        return item
                    }
                    return null
                })
            }
        case 'loading':
            return {
                ...state,
                loading:action.payload
            }
        default:
            return state
    }
}