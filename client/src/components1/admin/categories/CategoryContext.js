export const categoryState = {
    addCategoryModal:false,
    editCategoryModal:{
        modal:false,
        cId:null,
        des:"",
        status:"",
    },
    categories:[]
}

export const categoryReducer = (state, action) => {
    switch (action.type) {
        case 'addCategoryModal':
            return {
                ...state,
                addCategoryModal: action.payload
            }
        case 'editCategoryModalOpen':
            return {
                ...state,
                editCategoryModal:{
                    modal:true,
                    cId:action.cId,
                    des:action.des,
                    status:action.status
                }
            }
        case 'editCategoryModalClose':
            return {
                ...state,
                editCategoryModal:{
                    modal:false,
                    cId:null,
                    des:"",
                    status:""
                }
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