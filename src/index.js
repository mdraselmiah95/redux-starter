import store from "./store";

// Append heading node to the DOM
// const app = document.querySelector("#root");

const unsubscribe = store.subscribe(() => {
  console.log("Store change!", store.getState());
});

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1",
  },
});

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

console.log(store.getState());
