import * as actions from "./actionTypes";

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVE,
});

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: "Bug1",
  },
});

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "Bug1",
//     },
//   };
// }
