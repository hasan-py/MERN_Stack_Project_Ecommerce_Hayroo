export const productState = {
    products: null,
    addProductModal: false,
    editProductModal: {
        modal: false,
        pId: null,
        des: "",
        status: "",
    }
}

export const productReducer = (state, action) => {
    switch (action.type) {
        /* Get all product */
        case 'fetchProductsAndChangeState':
            return {
                ...state,
                products: action.payload
            }
            /* Create a product */
        case 'addProductModal':
            return {
                ...state,
                addProductModal: action.payload
            }
            /* Edit a product */
        case 'editProductModalOpen':
            return {
                ...state,
                editProductModal: {
                    modal: true,
                    pId: action.pId,
                    des: action.des,
                    status: action.status
                }
            }
        case 'editProductModalClose':
            return {
                ...state,
                editProductModal: {
                    modal: false,
                    pId: null,
                    des: "",
                    status: ""
                }
            }
        default:
            return state
    }
}