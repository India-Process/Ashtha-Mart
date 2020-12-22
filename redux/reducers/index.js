import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
  auth: authReducer,
  user: userReducer,
});
