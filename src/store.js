import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./reducer";

const store = createStore(reducer, devToolsEnhancer());
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default store;
