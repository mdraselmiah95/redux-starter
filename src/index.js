import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch((dispatch, getState) => {
  // Call an API
  // When the promise is resolved => dispatch()
  dispatch({ type: "bugsReceived", bugs: [1, 2, 4] });
  // If the promise is rejected => dispatch()
});
