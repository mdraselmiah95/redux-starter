//SNA => Store,next,Action
const logger = (param) => (store) => (next) => (action) => {
  console.log("logging", param);
  next(action);
};

//Currying
// N => 1

export default logger;
