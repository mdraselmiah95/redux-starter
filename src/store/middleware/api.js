import axios from "axios";

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

const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === "apiCallBegan") return next(action);
    const { url, method, data, onSuccess, onError } = action.payload;
    try {
      const response = await axios.request({
        baseUrl: "http://localhost:9001/api",
        url,
        method,
        data,
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: onError, payload: error });
    }
  };

export default api;
