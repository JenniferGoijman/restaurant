import { GET_ALL_PRODUCTS, ADD_CART } from "../types";

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
                cart: [...state.cart, action.payload]
                //cart: [action.payload]
            }
        default:
            return state
    }
}
export default productReducer;