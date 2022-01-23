import configureStore from "./store/configureStore";
import { projectAdded } from "./store/projects";

const store = configureStore();

store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(projectAdded({ name: "project 1" }));

console.log(store.getState());

const unresolvedBugs = store
  .getState()
  .entities.bugs.filter((bug) => !bug.resolved);
console.log(unresolvedBugs);

// import { applyMiddleware, createStore } from "redux";
// import reducer from "./store/reducer";

// const store = createStore(reducer, applyMiddleware(logger));
