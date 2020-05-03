import { combineReducers } from "redux";
import user from "./user";
import product from "./product";

const reducer = combineReducers({
    user,
    product
})
export default reducer;