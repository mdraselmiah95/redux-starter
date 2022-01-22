import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    //actions => action handlers
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugRemoved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});

console.log(slice);

//Action creators

export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

//Reducer
let lastId = 0;

export default createReducer([], {
  //key:value
  //action: function (event=>event handler)
  [bugAdded.type]: (bugs, action) => {},

  [bugResolved.type]: (bugs, action) => {},
});
