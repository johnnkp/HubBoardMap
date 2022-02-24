import { createStore } from "redux";

// INFO: import reducers
// import reducers from "./reducers/index"

const sampleReducer = (state = {}, action) => {
  return state;
};

const store = createStore(sampleReducer);

export default store;
