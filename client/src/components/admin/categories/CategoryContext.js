export const categoryState = {
  categories: [],
  addCategoryModal: false,
  editCategoryModal: {
    modal: false,
    cId: null,
    des: "",
    status: "",
  },
  loading: false,
};

export const categoryReducer = (state, action) => {
  switch (action.type) {
    /* Get all category */
    case "fetchCategoryAndChangeState":
      return {
        ...state,
        categories: action.payload,
      };
    /* Create a category */
    case "addCategoryModal":
      return {
        ...state,
        addCategoryModal: action.payload,
      };
    /* Edit a category */
    case "editCategoryModalOpen":
      return {
        ...state,
        editCategoryModal: {
          modal: true,
          cId: action.cId,
          des: action.des,
          status: action.status,
        },
      };
    case "editCategoryModalClose":
      return {
        ...state,
        editCategoryModal: {
          modal: false,
          cId: null,
          des: "",
          status: "",
        },
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
