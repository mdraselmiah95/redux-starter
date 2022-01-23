import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch(() => {
  // Call an API
  // When the promise is resolved => dispatch()
  // If the promise is rejected => dispatch()
});
