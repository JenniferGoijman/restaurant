import { GET_ALL_CATEGORIES } from "../types";

const categoryReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
};
export default categoryReducer;