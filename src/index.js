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
import * as actions from "./store/bugs";
import configureStore from "./store/configureStore";
// store.state = 1;
// console.log(store.state);
// console.log(store);

const store = configureStore();

store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(actions.bugAdded({ description: "Bug 1" }));
store.dispatch(actions.bugAdded({ description: "Bug 2" }));
store.dispatch(actions.bugAdded({ description: "Bug 3" }));
store.dispatch(actions.bugResolved({ id: 1 }));

console.log(store.getState());
