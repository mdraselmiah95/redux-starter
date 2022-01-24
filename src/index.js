import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch({
  type: "apiCallBegan", //api request method
  payload: {
    url: "/bugs",
    onSuccess: "bugsReceived",
    onError: "apiRequestFailed",
  },
});
