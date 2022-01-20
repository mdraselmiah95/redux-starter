import { bugAdded } from "./actions";
// Append heading node to the DOM
// const app = document.querySelector("#root");

// const unsubscribe = store.subscribe(() => {
//   console.log("Store change!", store.getState());
// });

//state = reducer(state, action);
//notify the subscribers

store.dispatch(bugAdded("bug 1"));

// unsubscribe();

// store.dispatch({
//   type: "bugRemoved",
//   payload: {
//     id: 1,
//   },
// });

console.log(store.getState());
