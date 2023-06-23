// import { createStore } from "redux";
// import countReducer from "../counter/reducer";

// const store = createStore(countReducer);
// export default store;

import { combineReducers } from "redux";
import productReducer from "./product/reducer";

export default combineReducers({ productReducer });
