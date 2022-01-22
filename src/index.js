// import { bugAdded, bugResolved } from "./actions";
// import store from "./store";
// // Append heading node to the DOM
// // const app = document.querySelector("#root");

// // const unsubscribe = store.subscribe(() => {
// //   console.log("Store change!", store.getState());
// // });

// //state = reducer(state, action);
// //notify the subscribers

// store.dispatch(bugAdded("bug 1"));
// store.dispatch(bugResolved(1));

// // unsubscribe();

// // store.dispatch({
// //   type: "bugRemoved",
// //   payload: {
// //     id: 1,
// //   },
// // });

// console.log(store.getState());
// console.log(store);
import * as actions from "./actions";
import store from "./store";
// store.state = 1;
// console.log(store.state);
// console.log(store);

store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugAdded("Bug 1"));
console.log(store.getState());
