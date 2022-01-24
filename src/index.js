import * as actions from "./store/api";
import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch(
  actions.apiCallBegan({
    url: "/bugs",
    onSuccess: "bugsReceived",
    onError: "apiRequestFailed",
  })
);

store.dispatch({
  type: "apiCallBegan", //api request method
  payload: {
    url: "/bugs",
    onSuccess: "bugsReceived",
    onError: "apiRequestFailed",
  },
});
