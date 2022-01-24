import { assignBugToUser, loadBugs } from "./store/bugs";
import configureStore from "./store/configureStore";

const store = configureStore();

// UI Layer
store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1, 5)), 2000);
