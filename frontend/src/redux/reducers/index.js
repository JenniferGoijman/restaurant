import { combineReducers } from "redux";
import user from "./user";
import product from "./product";
import category from "./category";
import categorysort from "./categorysort";
import order from "./orders";

const reducer = combineReducers({
    user,
    product,
    category,
    categorysort,
    order
})
export default reducer;