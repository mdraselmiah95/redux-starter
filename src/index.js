import * as actions from "./store/api";
import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch(
  actions.apiCallBegan({
    url: "/bugs",
    onSuccess: "bugsReceived",
    onError: actions.apiCallFailed.type,
  })
);
