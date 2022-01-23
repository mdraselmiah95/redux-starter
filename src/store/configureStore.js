import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import reducer from "./reducer";

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "console" }),
      toast,
    ],
  });
}
