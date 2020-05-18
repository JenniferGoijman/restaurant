const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_ORDERS_PRODUCTS':
            return {
                ...state,
                orderproducts: action.payload
            }
        default:
            return state;
    }
};
export default orderReducer;