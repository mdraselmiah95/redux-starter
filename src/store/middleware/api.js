const action = {
  type: "apiCallBegan", //api request method
  payload: {
    url: "/bugs",
    method: "get",
    data: {},
    onSuccess: "bugsReceived",
    onError: "apiRequestFailed",
  },
};

const api = (store) => (next) => (action) => {
  if (action.type === "apiCallBegan") {
    return next(action);
  }
};

export default api;
