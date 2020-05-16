import { combineReducers } from "redux";
import user from "./user";
import product from "./product";
import category from "./category";
import categorysort from "./categorysort";

const reducer = combineReducers({
    user,
    product,
    category,
    categorysort
})
export default reducer;