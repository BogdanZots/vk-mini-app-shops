import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import shopReducer from "./reducers/shopReducer";
import userReducer from "./reducers/userReducer";

const redusers = combineReducers({
  shops: shopReducer,
  user : userReducer
});

const store = createStore(redusers, applyMiddleware(thunk));
window.store = store;

export default store;
