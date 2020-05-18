import { GET_ALL_PRODUCTS, ADD_CART, REMOVE_CART, ADD_CART_UNITS, RESET_CART, SUBSTRACT_CART } from "../types";

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
        case ADD_CART_UNITS:
            return {
                ...state,
                cart: [...state.cart]
            }
        case REMOVE_CART:
            return {
                ...state,
                cart: state.cart.filter(p => p.product._id !== action.payload)
            }
        case SUBSTRACT_CART:
            return {
                ...state,
                cart: [...state.cart]
            }
        case RESET_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}
export default productReducer;