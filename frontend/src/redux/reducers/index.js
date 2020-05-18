import { combineReducers } from "redux";
import user from "./user";
import product from "./product";
import category from "./category";
import categorysort from "./categorysort";
import order from "./order";
import orderproduct from "./orderproduct";

const reducer = combineReducers({
    user,
    product,
    category,
    categorysort,
    order,
    orderproduct
})
export default reducer;