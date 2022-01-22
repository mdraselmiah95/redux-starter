import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default function () {
  return configureStore({ reducer });
}
