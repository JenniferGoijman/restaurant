import { GET_ALL_PRODUCTS, ADD_CART, REMOVE_CART } from "../types";

const productReducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case ADD_CART:
            return {
                ...state,
                cart: state.cart? [...state.cart, action.payload] : [action.payload]
            }
        case REMOVE_CART:
            return {
                ...state,
                cart: state.cart.filter(p => p._id !== action.payload)
            }
        default:
            return state
    }
}
export default productReducer;