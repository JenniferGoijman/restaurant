const categoryReducer = (state = { sort: [] }, action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORIES_SORT':
            return {
                ...state,
                categorysort: action.payload
            }
        default:
            return state;
    }
};
export default categoryReducer;