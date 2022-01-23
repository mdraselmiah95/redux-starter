import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch(() => {
  // Call an API
  // When the promise is resolved => dispatch()
  store.dispatch({ type: "bugsReceived", bugs: [1, 2, 4] });
  // If the promise is rejected => dispatch()
});
